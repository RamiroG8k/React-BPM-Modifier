// Common
import { useEffect, useState, useRef } from 'react';
// Others
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { apiInstance } from './services';
import Slider from './components/Slider';
import { getOfflineBPM, formatSeconds } from './util';

const App = () => {
    const { search } = useLocation();
    const { token, id } = queryString.parse(search);
    const [track, setTrack] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [rate, setRate] = useState(100);
    const [bpm, setBpm] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

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
                // setTrack(response);
                fetchFeatures(response);
            }).catch(console.log);
    };

    const fetchFeatures = async (info) => {
        await apiInstance.get(`/audio-features/${id}`)
            .then(({ data: response }) => {
                const data = { ...info, ...response };
                const artists = info.artists?.map((a) => a.name).join(', ') ?? '';
                const tempo = Math.round(data.tempo);
                setTrack({ name: data.name, tempo, artists, src: data.preview_url });
                setBpm(tempo);
            }).catch(console.log);
    };

    const toggleMedia = () => {
        const audio = audioRef.current;
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
        setBpm(Math.round((value / 100) * track.tempo));

        const audio = audioRef.current;
        audio.playbackRate = value / 100;
    };

    const fileHandler = ({ target }) => {
        const file = target.files[0];

        getOfflineBPM(file, (value) => {
            setTrack({ name: file.name, tempo: value[0].tempo, artists: '', src: URL.createObjectURL(file) });
            setBpm(value[0].tempo);
        });
    };

    const handleProgress = (e) => {
        const audio = audioRef.current;

        let compute = (e.target.value * duration) / 100;
        setCurrentTime(compute);
        audio.currentTime = compute;
    };

    return (
        <main className="h-screen w-screen bg-gray-100 p-5">
            <section className="flex justify-between">
                <div className="left">
                    <p className="text-2xl font-bold text-gray-700">BPM</p>
                    <p className="text-xl font-semibold text-gray-400">{`${rate}%`}</p>
                </div>
                <div className="right">
                    <p className="font-bold text-6xl text-red-400">{bpm}</p>
                </div>
            </section>

            <section>
                <div className="rounded-sm w-2/3">
                    IMG
                </div>
            </section>
            {/* <div className="flex">
                <section className="flex flex-col w-full sm:w-1/4 h-1/4 m-5 sm:mx-auto bg-white rounded-4xl">
                    <div className="text-center leading-5 mt-4 text-xl">
                        <h2 className="font-medium">Ahora reproduciendo</h2>
                        <h3 className="font-bold text-lg">{track?.name} - {track.artists}</h3>
                    </div>
                    <div className="flex h-full justify-center items-center text-center">
                        <div className="w-auto">
                            <p className="font-bold text-8xl text-red-400">{bpm}</p>
                        </div>
                        <div className="text-left">
                            <p className="text-2xl font-bold text-gray-700">BPM</p>
                            <p className="text-xl font-semibold text-gray-400">{`${rate}%`}</p>
                        </div>
                    </div>
                </section>
            </div> */}
            {Object.keys(track).length === 0 &&
                <div className="flex items-center justify-center">
                    <label className="flex flex-col items-center p-4 bg-white text-blue rounded-3xl shadow-lg tracking-wide uppercase border border-blue cursor-pointer">
                        <span className="text-base leading-normal">Archivo</span>
                        <input
                            type="file" className="hidden" accept="audio/*" onChange={fileHandler} />
                    </label>
                </div>}
            <audio onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} onCanPlay={(e) => setDuration(e.target.duration)}
                preload="true" ref={audioRef} src={track.src}></audio>
            <section className="flex flex-col justify-center items-center space-y-4 p-4">
                <button disabled={Object.keys(track).length === 0 ? true : false} onClick={toggleMedia} className="p-2 bg-red-300 disabled:opacity-50 rounded-xl">
                    <p className="text-white font-bold">
                        {isPlaying ? 'PAUSE' : 'PLAY'}
                    </p>
                </button>

                {Object.keys(track).length !== 0 &&
                    <section>
                        <div>
                            <span>{formatSeconds(currentTime)}</span>
                            <input onChange={handleProgress} type="range" value={duration ? (currentTime * 100) / duration : 0} />
                            <span>{formatSeconds(duration)}</span>
                        </div>

                        <Slider onChange={handleRate} />
                    </section>}
            </section>

        </main>
    );
}

export default App;
