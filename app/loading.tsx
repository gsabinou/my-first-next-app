export default function MainLoading() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Carregando...</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Aguarde enquanto os dados são carregados.</p>
        </div>
    );
}