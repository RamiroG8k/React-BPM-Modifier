// Common
import { useEffect, useState, useRef } from 'react';
// Others
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { apiInstance } from './services';
import Slider from './components/Slider';
import { getOfflineBPM, formatSeconds, classNames } from './util';
import { CgInfinity, CgMusic, CgPlayButtonO, CgPlayPauseO, CgRedo } from 'react-icons/cg'

const initMedia = {
    bpm: undefined,
    currentTime: 0,
    duration: 0,
    half: false,
    isPlaying: false,
    loop: false,
    pitch: false,
    rate: 100,
};

const App = () => {
    const { search } = useLocation();
    const { token, id } = queryString.parse(search);
    const [track, setTrack] = useState({});
    const [media, setMedia] = useState({ ...initMedia, bpm: track?.tempo });
    const audioRef = useRef();
    
    const html = document.getElementsByTagName('html')[0];
    
    useEffect(() => {
        if (token && id) {
            sessionStorage.setItem('token', token);
            fetchTrack();
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            html.classList.add('scheme-dark');
        } else {
            html.classList.remove('scheme-dark');
        }
    }, [token, id]);

    const fetchTrack = async () => {
        await apiInstance.get(`/tracks/${id}`)
            .then(({ data: response }) => {
                fetchFeatures(response);
            }).catch(console.log);
    };

    const fetchFeatures = async (info) => {
        await apiInstance.get(`/audio-features/${id}`)
            .then(({ data }) => {
                setTrack({
                    name: info.name,
                    artists: info.artists.map((a) => a.name).join(', '),
                    duration: (info.duration_ms / 1000),
                    link: info.external_urls.spotify,
                    popularity: info.popularity,
                    preview: info.preview_url,
                    album: info.album.name,
                    img: info.album.images[1].url,
                    tempo: data.tempo
                });
            }).catch(console.log);
    };

    const toggleMedia = () => {
        media.isPlaying ? audioRef.current.pause() : audioRef.current.play();
        mediaHandler({ isPlaying: !media.isPlaying });
    };

    const progressHandler = (event) => {
        const { target: { value: currentTime } } = event;
        const actualValue = (currentTime * media.duration) / 100;
        timeUpdate(actualValue);
    };

    const timeUpdate = (currentTime) => {
        audioRef.current.currentTime = currentTime;
        mediaHandler({ currentTime });
    };

    const mediaHandler = (attribute) => {
        const aux = { ...media, ...attribute };
        audioRef.current.playbackRate = media.rate / 100;
        audioRef.current.preservesPitch = media.pitch;
        setMedia(aux);
    };

    const bpmHandler = () => {
        // return track.tempo;
        const withRate = track.tempo * (media.rate / 100)
        const inHalf = media.half ? withRate / 2 : withRate;
        return Math.round(inHalf);
    }

    const fileHandler = ({ target }) => {
        const file = target.files[0];
        
        getOfflineBPM(file, (bpms) => {
            setTrack({
                name: file.name,
                tempo: bpms[0].tempo,
                artists: 'No artists',
                preview: URL.createObjectURL(file)
            });
            setMedia({ ...media, bpm: bpms[0].tempo });
        });
    };

    const reset = () => {
        setTrack({});
        setMedia({ ...initMedia, bpm: 0 });
        audioRef.current.pause();
    };

    return (
        <main className="flex flex-col h-screen items-center bg-gray-100 dark:bg-gray-900 p-5 pt-12">
            <div className="flex flex-col w-full items-center">
                <section className="flex w-full sm:w-1/2 justify-between">
                    <div className="left">
                        <p className="text-2xl font-bold text-gray-600">BPM</p>
                        <p className="text-xl font-semibold text-gray-400">{`${media.rate - 100}%`}</p>
                    </div>
                    <div className="right flex">
                        <button onClick={() => reset()}>
                            <p className="text-3xl p-2 dark:text-gray-100"><CgRedo /></p>
                        </button>
                        <p className="font-bold text-6xl text-red-400">{bpmHandler() || 0}</p>
                    </div>
                </section>

                <section className="w-full sm:w-1/2 py-5 px-2">
                    <div className="relative w-4/5">
                        <div className="z-10 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                            <img src={track?.img ?? 'https://static.4shared.com/images/4sh_music_embed_player_default_cover.png?ver=-790556520'} alt="Cover" />
                        </div>
                        <div className="z-0 absolute top-0 -right-16 sm:-right-32 bg-gray-700 rounded-full w-full h-full" />
                    </div>
                </section>
            </div>

            {Object.keys(track).length > 0 &&
                <div className="flex flex-col h-1/2 w-full justify-between dark:text-gray-100">

                    <section className="flex w-full">
                        <div className="flex flex-col p-1 w-1/5 justify-between gap-2">
                            <button onClick={() => mediaHandler({ loop: (!media.loop) })} className={classNames(media.loop ? 'bg-red-300 text-white' : 'bg-white text-gray-700',
                                'flex flex-col h-full rounded-xl justify-center items-center transition delay-100')}>
                                <p className="text-3xl"><CgInfinity /></p>
                                <p className="text-sm">Loop</p>
                            </button>

                            <button onClick={() => mediaHandler({ pitch: !media.pitch })} className={classNames(media.pitch ? 'bg-red-300 text-white' : 'bg-white text-gray-700',
                                'flex flex-col h-full rounded-xl justify-center items-center transition delay-100')} >
                                <p className="text-2xl"><CgMusic /></p>
                                <p className="text-xs leading-3">Master tempo</p>
                            </button>
                        </div>

                        <div className="flex flex-col h-full w-4/5 p-2">
                            <div className="h-1/2">
                                <h2 className={`${track.name.length > 20 ? 'text-xs' : 'text-xl'} font-bold`}>{track?.name ?? 'Name placeholder etc...'}</h2>
                            </div>
                            <div className="flex h-1/2 items-center">
                                <div className="w-4/5 h-full py-2">
                                    <h3 className={`${track.artists.length > 20 ? 'text-xs' : 'text-sm'} font-semibold text-gray-600`}>{track?.artists ?? 'Artist 1, Artist 2... etc.'}</h3>
                                </div>
                                <div className="w-1/5">
                                    <button onClick={() => mediaHandler({ half: !media.half })} className={classNames(media.half ? 'bg-red-300 text-white' : 'bg-white text-gray-700',
                                        'flex w-full h-auto rounded-xl p-2 justify-center items-center')}>
                                        <p className="text-3xl font-semibold">½</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-5 px-2">
                        <Slider onChange={(rate) => mediaHandler({ rate })} />
                        <div className="flex justify-between">
                            <p className="text-sm font-thin">- 50%</p>
                            <p className="text-sm font-thin">+ 50%</p>
                        </div>
                    </section>

                    <section className="flex w-full h-1/3 justify-between items-center">
                        <div className="w-9/12">
                            <input onChange={progressHandler} type="range" value={media.duration ? (media.currentTime * 100) / media.duration : 0}
                                className="w-full" />
                            <div className="flex justify-between">
                                <span className="text-xs">{formatSeconds(media.currentTime)}</span>
                                <span className="text-xs">{formatSeconds(media.duration)}</span>
                            </div>
                        </div>

                        <div className="flex w-1/5 justify-center">
                            <button onClick={toggleMedia} className="flex justify-center items-center">
                                <p className="text-4xl">
                                    {!media.isPlaying && <CgPlayButtonO />}
                                    {media.isPlaying && <CgPlayPauseO />}
                                </p>
                            </button>
                        </div>
                    </section>
                </div>}

            <audio preload="true" ref={audioRef} src={track.preview}
                onTimeUpdate={({ target: { currentTime } }) => mediaHandler({ currentTime })}
                onCanPlay={({ target: { duration } }) => mediaHandler({ duration })}
                onEnded={() => mediaHandler({ isPlaying: false })}></audio>

            {Object.keys(track).length === 0 &&
                <div className="flex items-center justify-center">
                    <label className="flex flex-col items-center p-4 bg-gray-200 rounded-2xl tracking-wide uppercase cursor-pointer">
                        <span className="text-base leading-normal">Archivo</span>
                        <input type="file" className="hidden" accept="audio/*" onChange={fileHandler} />
                    </label>
                </div>}

        </main>
    );
}

export default App;
