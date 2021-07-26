// Common
import { useEffect, useState } from 'react';
// Others
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { apiInstance } from './services';

const App = () => {
    const { search } = useLocation();
    const { token, id } = queryString.parse(search);

    const [track, setTrack] = useState({ });
    sessionStorage.setItem('token', token);

    useEffect(() => {
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
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
    };

    // const artists = track.artists.map((a) => a.name).join(', ') ?? '';

    return (
        <main className="h-screen w-screen bg-gray-200">
            <div className="flex">
                <section className="flex flex-col w-full sm:w-1/4 h-1/4 m-5 sm:mx-auto bg-white rounded-4xl">
                    <div className="text-center leading-5 mt-4 text-xl">
                        <h2 className="font-medium">Ahora reproduciendo</h2>
                        <h3 className="font-bold text-lg">{track?.name} - {'artists'}</h3>
                    </div>
                    <div className="flex h-full justify-center items-center text-center">
                        <div className="w-1/2">
                            <p className="font-bold text-8xl text-red-400">{Math.round(track?.tempo)}</p>
                        </div>
                        <div className="text-left">
                            <p className="text-2xl font-bold text-gray-700">BPM</p>
                            <p className="text-xl font-semibold text-gray-400">{null ?? '90.7%'}</p>
                        </div>
                    </div>
                    {/* <div className="mt-10 bg-green-200">
                    <h1 className="text-xl font-bold uppercase">token: {token}</h1>
                    
                    <h1 className="text-xl font-bold uppercase">id: {id}</h1>
                </div> */}
                </section>

            </div>
            {/* <section className="flex">
                <div class="overflow-hidden relative w-64 mt-4 mb-4">
                    <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
                        <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                        </svg>
                        <span class="ml-2">Last opp bilder (max 3)</span>
                    </button>
                    <input class="cursor-pointer absolute block opacity-0 pin-r pin-t" type="file"/>
                </div>
            </section> */}
        </main>
    );
}

export default App;
