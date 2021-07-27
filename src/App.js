// Common
import { useEffect, useState, useRef } from 'react';
// Others
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { apiInstance } from './services';
import Slider from './components/Slider';
import { getOfflineBPM } from './util';

const App = () => {
    const { search } = useLocation();
    const { token, id } = queryString.parse(search);
    const [track, setTrack] = useState({ name: 'new song', tempo: 120 });
    const [isPlaying, setIsPlaying] = useState(false);
    const [rate, setRate] = useState(100);
    const [bpm, setBpm] = useState(120);

    const audioRef = useRef();

    useEffect(() => {
        sessionStorage.setItem('token', token);
        fetchTrack();
    }, []);

    const fetchTrack = async () => {
        await apiInstance.get(`/tracks/${id}`)
            .then(({ data: response }) => {
                setTrack(response);
                fetchFeatures();
            }).catch((error) => {
                console.log(error);
            });
    };

    const fetchFeatures = async () => {
        await apiInstance.get(`/audio-features/${id}`)
            .then(({ data: response }) => {
                setTrack({ ...track, ...response });
                setBpm(response.tempo);
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
    };

    const artists = track.artists?.map((a) => a.name).join(', ') ?? '';

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
        setBpm(Math.round((value / 100) * track.tempo ?? 120));

        const audio = audioRef.current;

        audio.playbackRate = value / track.tempo;
        console.log(audio.playbackRate);
    };

    const fileHandler = async (input) => {
        // console.log(input.target.files[0]);
        console.log(await getOfflineBPM(input.target.files[0]));
    };

    return (
        <main className="h-screen w-screen bg-gray-200">
            <div className="flex">
                <section className="flex flex-col w-full sm:w-1/4 h-1/4 m-5 sm:mx-auto bg-white rounded-4xl">
                    <div className="text-center leading-5 mt-4 text-xl">
                        <h2 className="font-medium">Ahora reproduciendo</h2>
                        <h3 className="font-bold text-lg">{track?.name} - {artists}</h3>
                    </div>
                    <div className="flex h-full justify-center items-center text-center">
                        <div className="w-auto">
                            <p className="font-bold text-8xl text-red-400">{bpm}</p>
                        </div>
                        <div className="text-left">
                            <p className="text-2xl font-bold text-gray-700">BPM</p>
                            <p className="text-xl font-semibold text-gray-400">{ `${rate}%` ?? '---'}</p>
                        </div>
                    </div>
                </section>
            </div>
            {Object.keys(track).length === 0 && <section className="flex">
                <input type="file" accept="audio/*" />
            </section>}
                <input type="file" accept="audio/*" onChange={fileHandler}/>
            <audio ref={audioRef} src={track?.preview_url}></audio>
            <section className="flex flex-col justify-center items-center space-y-4 p-4">
                <button onClick={toggleMedia} className="p-2 bg-red-300 disabled:opacity-50 rounded-xl">
                {/* <button disabled={track && true} onClick={toggleMedia} className="p-2 bg-red-300 disabled:opacity-50 rounded-xl"> */}
                    <p className="text-white font-bold">
                        {isPlaying ? 'PAUSE' : 'PLAY'}
                    </p>
                </button>
            <Slider onChange={handleRate}/>
            </section>

        </main>
    );
}

export default App;
