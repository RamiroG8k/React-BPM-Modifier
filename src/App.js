// Common
import { useEffect, useState, useRef } from 'react';
// Others
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { apiInstance } from './services';
import Slider from './components/Slider';
import { getOfflineBPM, formatSeconds, classNames } from './util';
import { CgInfinity, CgMusic, CgPlayButtonO, CgPlayPauseO, CgRedo } from 'react-icons/cg'

const App = () => {
    const { search } = useLocation();
    const { token, id } = queryString.parse(search);

    const [track, setTrack] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [rate, setRate] = useState(100);
    const [bpm, setBpm] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [loop, setLoop] = useState(false);
    const [master, setMaster] = useState(true);
    const [half, setHalf] = useState(false);

    const audioRef = useRef();

    useEffect(() => {
        if (token && id) {
            sessionStorage.setItem('token', token);
            fetchTrack();
        }
    }, [token, id]);

    const fetchTrack = async () => {
        await apiInstance.get(`/tracks/${id}`)
            .then(({ data: response }) => {
                console.log(response);
                fetchFeatures(response);
            }).catch(console.log);
    };

    const fetchFeatures = async (info) => {
        await apiInstance.get(`/audio-features/${id}`)
            .then(({ data: response }) => {
                const data = { ...info, ...response };
                const artists = info.artists?.map((a) => a.name).join(', ') ?? '';
                const tempo = Math.round(data.tempo);
                setTrack({ name: data.name, tempo, artists, src: data.preview_url, img: data.album.images[1].url });
                setBpm(tempo);
            }).catch(console.log);
    };

    const toggleMedia = () => {
        const audio = audioRef.current;
        audio.loop = loop;
        if (isPlaying) {
            setIsPlaying(false);
            audio.pause();
        } else {
            setIsPlaying(true);
            audio.play();
        }
    };

    const handleRate = (value) => {
        setRate(value);
        setBpm(Math.round((value / 100) * (half ? (track.tempo / 2) : track.tempo)));

        const audio = audioRef.current;
        audio.playbackRate = value / 100;
    };

    const fileHandler = ({ target }) => {
        const file = target.files[0];

        getOfflineBPM(file, (value) => {
            setTrack({
                name: file.name,
                tempo: value[0].tempo,
                artists: 'No artists',
                src: URL.createObjectURL(file)
            });
            setBpm(value[0].tempo);
        });
    };

    const handleProgress = (e) => {
        const audio = audioRef.current;

        let compute = (e.target.value * duration) / 100;
        setCurrentTime(compute);
        audio.currentTime = compute;
    };

    const toggleLoop = () => {
        setLoop(!loop);

        const audio = audioRef.current;
        audio.loop = loop;
    };

    const toggleMaster = () => {
        setMaster(!master);

        const audio = audioRef.current;
        audio.preservesPitch = master;
    };

    const toggleHalf = () => {
        setHalf(!half);
        half ? setBpm(bpm * 2) : setBpm(bpm / 2);
    };

    const reset = () => {
        setTrack({});
        setIsPlaying(false);
        setRate(100);
        setBpm(0);
        setDuration(0);
        setCurrentTime(0);
        setLoop(false);
        setMaster(true);
        setHalf(false);
    };

    return (
        <main className="flex flex-col h-screen items-center bg-gray-100 p-5">

            <div className="flex flex-col w-full items-center">
                <section className="flex w-full sm:w-1/2 justify-between">
                    <div className="left">
                        <p className="text-2xl font-bold text-gray-700">BPM</p>
                        <p className="text-xl font-semibold text-gray-400">{`${rate}%`}</p>
                    </div>
                    <div className="right flex">
                        <button onClick={() => reset()}>
                            <p className="text-3xl p-2">
                                <CgRedo />
                            </p>
                        </button>
                        <p className="font-bold text-6xl text-red-400">{bpm}</p>
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
                            <button onClick={() => toggleLoop()} className={classNames(loop ? 'bg-red-300 text-white' : 'bg-white text-gray-700',
                                'flex flex-col h-full rounded-xl justify-center items-center transition delay-100')}>
                                <p className="text-3xl"><CgInfinity /></p>
                                <p className="text-sm">Loop</p>
                            </button>

                            <button onClick={() => toggleMaster()} className={classNames(!master ? 'bg-red-300 text-white' : 'bg-white text-gray-700',
                                'flex flex-col h-full rounded-xl justify-center items-center transition delay-100')} >
                                <p className="text-2xl"><CgMusic /></p>
                                <p className="text-xs leading-3">Master tempo</p>
                            </button>
                        </div>

                        <div className="flex flex-col h-full w-4/5 p-2">
                            <div className="h-1/2">
                                <h2 className={`${track.name.length > 25 ? 'text-xs' : 'text-xl'} font-bold`}>{track?.name ?? 'Name placeholder etc...'}</h2>
                            </div>
                            <div className="flex h-1/2 items-center">
                                <div className="w-4/5 h-full py-2">
                                    <h3 className={`${track.artists.length > 25 ? 'text-xs' : 'text-sm'} font-semibold text-gray-600`}>{track?.artists ?? 'Artist 1, Artist 2... etc.'}</h3>
                                </div>
                                <div className="w-1/5">
                                    <button onClick={() => toggleHalf()} className={classNames(half ? 'bg-red-300 text-white' : 'bg-white text-gray-700',
                                        'flex w-full h-auto rounded-xl p-2 justify-center items-center')}>
                                        <p className="text-3xl font-semibold">½</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-5 px-2">
                        <Slider onChange={handleRate} />
                        <div className="flex justify-between">
                            <p className="text-sm font-thin">- 50%</p>
                            <p className="text-sm font-thin">+ 50%</p>
                        </div>
                    </section>

                    <section className="flex w-full h-1/3 justify-between items-center">
                        <div className="w-9/12">
                            <input onChange={handleProgress} type="range" value={duration ? (currentTime * 100) / duration : 0}
                                className="w-full" />
                            <div className="flex justify-between">
                                <span className="text-xs">{formatSeconds(currentTime)}</span>
                                <span className="text-xs">{formatSeconds(duration)}</span>
                            </div>
                        </div>

                        <div className="flex w-1/5 justify-center">
                            <button onClick={toggleMedia} className="flex justify-center items-center">
                                <p className="text-4xl">
                                    {!isPlaying && <CgPlayButtonO />}
                                    {isPlaying && <CgPlayPauseO />}
                                </p>
                            </button>
                        </div>
                    </section>
                </div>}

            <audio onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} onCanPlay={(e) => setDuration(e.target.duration)}
                preload="true" ref={audioRef} src={track.src}></audio>

            {Object.keys(track).length === 0 &&
                <div className="flex items-center justify-center">
                    <label className="flex flex-col items-center p-4 bg-gray-200 rounded-2xl tracking-wide uppercase cursor-pointer">
                        <span className="text-base leading-normal">Archivo</span>
                        <input
                            type="file" className="hidden" accept="audio/*" onChange={fileHandler} />
                    </label>
                </div>}

        </main>
    );
}

export default App;
