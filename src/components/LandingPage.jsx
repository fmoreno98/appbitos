import React from 'react';

const LandingPage = () => {
    return (
        <>
            <section className="w-full px-8 text-gray-700 bg-orange-50">
                <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div className="relative flex flex-col md:flex-row">
                        <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                                APPBITO <span className="text-indigo-600">GRUPO AJNEB</span>
                            </span>
                        </a>
                        <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                                DIARIO
                            </a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                                CALENDARIO
                            </a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                                DESAFIOS
                            </a>
                            <a href="#_" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">
                                SOBRE NOSOTROS
                            </a>
                        </nav>
                    </div>
                    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                            REGISTRO
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                            LOGIN
                        </a>
                    </div>
                </div>
            </section>

            <div
                className="object-bottom"
                style={{
                    backgroundImage: "url('../assets/banner.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            >
                <section>
                    <div className="flex flex-col items-center justify-center px-4 py-8 sm:flex-row text-center h-72">
                        <div className="text-center">
                            {/* <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-orange-300">eStrella</span></h1>
                <h4 className="text-white">Buceando en el espacio de las emociones</h4> */}
                        </div>
                    </div>
                </section>
            </div>

            <div className="bg-gradient-to-b from-orange-50 via-violet-300 to-orange-200 ...">
                <section className="w-full pt-7 pb-7 md:pt-12 md:pb-12">
                    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
                        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                            <img src="../assets/star-rocket-1.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-10 " alt="" />
                        </div>
                        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                            <h3 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                                ¡Descubre APPBITO!
                            </h3>
                            <h4 className="text-purple-600">La App de Acompañamiento Emocional para Niños</h4>
                            <p className="pt-4 pb-8 m-0 leading-7 text-black border-0 border-gray-300  lg:text-lg">
                                ¡Descubre APPBITO! es una aplicación diseñada para BLA BLA
                            </p>
                            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                                <li className="box-border relative py-4 pl-0 text-left text-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                        <span className="text-sm font-bold">✓</span>
                                    </span>{' '}
                                    Espacio Seguro para Compartir: Brindamos a los niños un espacio digital seguro para expresar sus pensamientos y emociones diarias, fomentando la comunicación abierta.
                                </li>
                                <li className="box-border relative py-4 pl-0 text-left text-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                        <span className="text-sm font-bold">✓</span>
                                    </span>{' '}
                                    Desarrollo Emocional: La aplicación facilita la exploración y comprensión de las emociones, fortaleciendo las habilidades de inteligencia emocional desde la infancia.
                                </li>
                                <li className="box-border relative py-4 pl-0 text-left ttext-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                                        <span className="text-sm font-bold">✓</span>
                                    </span>{' '}
                                    Aprendizaje Divertido: A través de juegos interactivos, los niños pueden aprender sobre sus emociones de manera lúdica, contribuyendo al enfoque holístico de su educación.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
                            <h2 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-black font-semibold">Sobre Nosotros</h2>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg bg-violet-50">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Inteligencia Artificial</h2>
                                    <p className="leading-relaxed text-base">Tecnología innovadora para brindar la experiencia de usuario a un nuevo nivel</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg bg-violet-50">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Diario</h2>
                                    <p className="leading-relaxed text-base">Un sitio donde siempre serás escuchado y podrás compartir el día a día</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg bg-violet-50">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Chatbot</h2>
                                    <p className="leading-relaxed text-base">¿Alguna vez has tenido ganas de preguntarle a una emoción algo? ¡Ahora puedes hacerlo!</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg bg-violet-50">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Juegos</h2>
                                    <p className="leading-relaxed text-base">Diviértete y disfruta de la mano de las emociones en retos únicos</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg bg-violet-50">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                        Planetario
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        Disfruta de la experiencia de forma inmersiva viajando a través del
                                        espacio
                                    </p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border border-gray-300 p-6 rounded-lg bg-violet-50">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                        Autodescubrimiento
                                    </h2>
                                    <p className="leading-relaxed text-base">
                                        Apostamos por conocerse mejor a uno mismo para afrontar mejor el día a día
                                    </p>
                                </div>
                            </div>
                            <div className="lg:mx-2 mb-4 flex flex-col items-center">
                                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                                    <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-white relative">
                                        <div className="text-lg font-bold text-gray-700 leading-tight">
                                            Data, IA y Backend
                                        </div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg
                                                        className="text-gray-400 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span className="ml-1 text-gray-500">Barcelona</span>
                                                </div>
                                                <div className="flex items-start ml-4"></div>
                                            </div>
                                            <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                                                    Autodidacta
                                                </span>
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
                                                    Resolutivo
                                                </span>
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                                                    Constancia
                                                </span>
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                                                    Resiliencia
                                                </span>
                                            </div>
                                            <div className="mt-12 flex items-center">
                                                <div
                                                    className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
                                                    alt=""
                                                    style={{ backgroundImage: 'url("../assets/jon.png")' }}
                                                ></div>
                                                <div className="ml-4 flex flex-col items-start">
                                                    <div className="font-bold text-gray-800">Jon</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:mx-2 mb-4 flex flex-col items-center">
                                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                                    <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-white relative">
                                        <div className="text-lg font-bold text-gray-700 leading-tight">
                                            Scrum Master, Frontend y Diseño
                                        </div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg
                                                        className="text-gray-400 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span className="ml-1 text-gray-500">Barcelona</span>
                                                </div>
                                                <div className="flex items-start ml-4"></div>
                                            </div>
                                            <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                                                    Creatividad
                                                </span>
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
                                                    Agile
                                                </span>
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                                                    Visión estratégica
                                                </span>
                                                <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                                                    Proactividad
                                                </span>
                                            </div>
                                            <div className="mt-12 flex items-center">
                                                <div
                                                    className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
                                                    alt=""
                                                    style={{ backgroundImage: 'url("../assets/cris.png")' }}
                                                ></div>
                                                <div className="ml-4 flex flex-col items-start">
                                                    <div className="font-bold text-gray-800">Cristina</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer
                        className="px-5 sm:px-10 md:px-20 py-8"
                        style={{
                            backgroundImage: "url('../assets/fondo.png')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    >
                        <div className="flex flex-col items-center lg:flex-row-reverse justify-between">
                            <div>
                                <a
                                    className="mx-4 text-sm font-bold text-white hover:text-violet-300"
                                    href="#"
                                >
                                    Inicio
                                </a>
                                <a
                                    className="mx-4 text-sm font-bold text-white hover:text-violet-300"
                                    href="#"
                                >
                                    Sobre Nosotros
                                </a>
                                <a
                                    className="mx-4 text-sm font-bold text-white hover:text-violet-300"
                                    href="#"
                                >
                                    Links
                                </a>
                            </div>
                            <div className="mt-4">
                                <img src="../assets/logo.png" className="w-40" alt="Logo" />
                            </div>
                            <div className="mt-4 text-xs font-bold text-white">
                                &copy; DREAM TEAM | AI-ON ORGANIZATION
                            </div>
                        </div>
                    </footer>
                </section>

            </div>
        </>
    );
}

export default LandingPage;
