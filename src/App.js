import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const App = () => {
    const { search } = useLocation();
    const { token, id } = queryString.parse(search);

    console.log(token, id);

    return (
        <main className="flex h-screen w-screen bg-gray-200">
            <section className="flex flex-col w-full sm:w-1/4 h-1/4 m-5 sm:mx-auto bg-white rounded-4xl">
                <div className="text-center leading-5 mt-4 text-xl">
                    <h2 className="font-medium">Ahora reproduciendo</h2>
                    <h3 className="font-bold">Titulo - Artista</h3>
                </div>
                <div className="flex h-full justify-center items-center text-center">
                    <div className="w-1/2">
                        <p className="font-bold text-8xl text-red-400">169</p>
                    </div>
                    <div className="text-left">
                        <p className="text-5xl font-bold text-gray-700">BPM</p>
                        <p className="text-3xl font-semibold text-gray-400">90.7%</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
