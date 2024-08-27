import React from 'react';
import Header from './Header';
function LandingPage() {
    return (
        <>
            <Header />
            {/* <-- Seccion 1 --> */}
            <div id='home' className="object-bottom" style={{ backgroundImage: `url('/img/FondoLanding.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', height: '450px' }}>
                <section>
                    <div className="flex flex-col items-center justify-center px-4 py-8 sm:flex-row text-center h-72">
                        <div className="text-center mt-10 rounded-4">
                            <h1 className="inline-block p-1 mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-7xl bg-[#E8E1D9] bg-opacity-80 rounded-3 "><span className=" text-transparent bg-clip-text bg-gradient-to-r to-[#081EAC] from-[#516BE7]">APPBITOS</span></h1>
                            <div className='bg-[#E8E1D9] bg-opacity-80 rounded-3 shadow mt-10'><h4 className="text-[#2F49D4]  mr-2 ml-2">Cumplir Hábitos Saludables Mejora la Calidad de Vida de las Personas</h4></div>
                        </div>
                    </div>
                </section>
            </div>

            {/* <-- Section 2 --> */}
            <div className="bg-gradient-to-b from-[#E8E1D9] via-[#516BE7] to-[#938A7F]">
                <section className="w-full pt-7 pb-7 md:pt-12 md:pb-12">
                    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-[#938A7F] border-solid md:flex-row max-w-7xl lg:px-16">
                        {/* <-- Logo --> */}
                        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                            <img src="/img/GIFLogo.gif" className="ml-10 p-4 pl-6 pr-5 xl:pl-16 xl:pr-10 rounded-full" />
                        </div>

                        {/* <-- Content --> */}
                        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                            <h3 className="m-0 text-xl font-semibold leading-tight border-0 border-[#938A7F] lg:text-3xl md:text-2xl">
                                Bievenido a APPBITOS!
                            </h3>
                            <h4 className="text-[#2F49D4]">La mejor App de Hábitos Saludables!</h4>
                            <p className="pt-2 pb-2 m-0 leading-7 text-black border-0 border-[#938A7F]  lg:text-lg">
                            Hemos creado AppBitos, una aplicación innovadora diseñada para ayudarte a alcanzar tus objetivos de salud y bienestar diarios. AppBitos ofrece un entorno inspirador y motivador, con herramientas personalizadas para que puedas seguir tus hábitos saludables, monitorear tu progreso y celebrar cada logro en tu camino hacia una vida más equilibrada. </p>                            <ul className="p-0 m-0 leading-6 border-0 border-[#938A7F]">
                                <li className="box-border relative py-3 pl-0 text-left text-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-[#E8E1D9] bg-[#0E28C0] rounded-full"><span className="text-sm font-bold">✓</span>
                                    </span>Optimiza tu salud y calidad de vida con una app que te permite gestionar y mejorar tus hábitos diarios, facilitando el camino hacia una vida más plena y saludable.
                                </li>
                                <li className="box-border relative py-3 pl-0 text-left text-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-[#E8E1D9] bg-[#0E28C0] rounded-full"><span className="text-sm font-bold">✓</span>
                                    </span>Monitorea y mejora tus hábitos diarios: desde prácticas saludables hasta la reducción de los menos beneficiosos, AppBitos te ayuda a crear un estilo de vida equilibrado y satisfactorio..
                                </li>
                                <li className="box-border relative py-3 pl-0 text-left ttext-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-[#E8E1D9] bg-[#0E28C0] rounded-full"><span className="text-sm font-bold">✓</span>
                                    </span>Sigue tus hábitos, celebra tus éxitos y ajusta lo necesario para mejorar tu bienestar. Con AppBitos, cada día es una oportunidad para vivir mejor.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <p id="link1"></p>
                {/* Section 3 --> */}
                <section  className="text-gray-700 body-font">
                    <div className="container bg-[#516BE7] rounded-5 px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">
                            <h2 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-[#E8E1D9] font-semibold">Sobre Nosotros</h2>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6">
                                            <path fill="#ffffff" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" /></svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Calendario</h2>
                                    <p style={{color: "black"}} className="leading-relaxed text-base">Nuestro calendario muestra los días en los que has completado algún hábito, permitiéndote ver cómo evolucionas y celebrando cada paso hacia el cambio.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6">
                                            <path fill="#ffffff" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Autoseguimiento</h2>
                                    <p style={{color: "black"}} className="leading-relaxed text-base">Ofrecemos una función de autoseguimiento que destaca tus logros diarios, ayudándote a visualizar tu progreso y mantener la motivación para alcanzar tus metas.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6">
                                            <path fill="#ffffff" d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-128 0zM32 320c-17.7 0-32 14.3-32 32L0 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L32 320zm416 96l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z"/></svg>                                    
                                            </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Rachas</h2>
                                    <p style={{color: "black"}} className="leading-relaxed text-base">Sección dedicada a tus rachas de hábitos, donde podrás ver el registro de tus habitos continuos y el esfuerzo constante que has invertido en completarlos todos.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6">
                                                <svg ><path fill="#ffffff" d="M0 96C0 43 43 0 96 0l96 0 0 190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5L352 0l32 0 32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32z"/></svg>
                                            </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Historial</h2>
                                    <p style={{color: "black"}} className="leading-relaxed text-base"> Nuestra herramienta te muestra los días en los que has completado algún hábito, creando un historial que te permite visualizar tu progreso y evaluar cómo has avanzado con el tiempo.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6">
                                            <path fill="#ffffff" d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Consejos Diarios</h2>
                                    <p style={{color: "black"}} className="leading-relaxed text-base">Brindamos consejos diarios personalizados que te inspiran a mantenerte en el camino correcto, ayudándote a lograr tus metas y a mejorar cada día, pudiendo obtener ideas de tu nuevo hábito objetivo.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6" >
                                            <path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Uso Sencillo</h2>
                                    <p style={{color: "black"}} className="leading-relaxed text-base">Una experiencia sencilla y agradable para que alcanzar tus metas sea más fácil. Una app intuitiva, lo que te permite enfocarte en lo que realmente importa construir hábitos que transformen tu vida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <-- Section 4 --> */}
                <section id="link2" className="">
                    <div className="px-5 py-12 " id="cards">

                        <div className="max-w-screen-xl mx-auto text-center mb-12">
                            <h2 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-[#E8E1D9] font-semibold">Integrantes del equipo</h2>
                        </div>
                        <div className="lg:flex lg:flex-wrap lg:justify-evenly lg:mt-8">
                            <div className="lg:mx-2 mb-4 flex flex-col items-center">
                                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                                    <div className="border-2 border-[#B2AAA0] bg-[#E8E1D9] w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded relative">
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Frontend y Backend</div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path fill="#000000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />                                                    </svg>
                                                    <span className="ml-2 text-sm  text-gray-700">Sant Andreu de la Barca</span>
                                                </div>

                                                <div className="flex items-start ml-4">
                                                </div>
                                            </div>
                                            <div
                                                className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                                                <a href="https://www.linkedin.com/in/marcflob/" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 p-1 rounded bg-[#081EAC] text-white">LinkedIn</span>
                                                </a>
                                                <a href="https://github.com/lordflower99" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 mx-1 p-1 rounded bg-[#938A7F] text-white">Github</span>
                                                </a>
                                            </div>
                                            <div className="mt-12 flex items-center">
                                                <div className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700" alt=""
                                                    style={{ backgroundImage: `url('/img/Marc.jpeg')` }}></div>
                                                <div className="ml-4 flex flex-col items-start">
                                                    <div className="font-bold text-gray-800">
                                                        Marc
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:mx-2 mb-4 flex flex-col items-center">
                                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                                    <div className="border-2 border-[#B2AAA0] bg-[#E8E1D9] w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded relative">
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Frontend y Backend </div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path fill="#000000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />                                                    </svg>
                                                    <span className="ml-2 text-sm  text-gray-700">Sant Celoni</span>
                                                </div>

                                                <div className="flex items-start ml-4">
                                                </div>
                                            </div>
                                            <div
                                                className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                                                <a href="https://www.linkedin.com/in/benjamin-armijo/" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 p-1 rounded bg-[#081EAC] text-white">LinkedIn</span>
                                                </a>
                                                <a href="https://github.com/BenjaGreen012" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 mx-1 p-1 rounded bg-[#938A7F] text-white">Github</span>
                                                </a>
                                            </div>
                                            <div className="mt-12 flex items-center">
                                                <div className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700" alt=""
                                                    style={{ backgroundImage: `url('/img/Benja.jpeg')` }}></div>
                                                <div className="ml-4 flex flex-col items-start">
                                                    <div className="font-bold text-gray-800">
                                                        Benja
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:mx-2 mb-4 flex flex-col items-center">
                                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                                    <div className="border-2 border-[#B2AAA0] bg-[#E8E1D9] w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded relative">
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Frontend y Backend</div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path fill="#000000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />                                                    </svg>
                                                    <span className="ml-2 text-sm  text-gray-700">Mataró</span>
                                                </div>

                                                <div className="flex items-start ml-4">
                                                </div>
                                            </div>
                                            <div
                                                className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                                                <a href="https://www.linkedin.com/in/bellatriugerard/" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 p-1 rounded bg-[#081EAC] text-white">LinkedIn</span>
                                                </a>
                                                <a href="https://github.com/geribt" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 mx-1 p-1 rounded bg-[#938A7F] text-white">Github</span>
                                                </a>
                                            </div>
                                            <div className="mt-12 flex items-center">
                                                <div className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700" alt=""
                                                    style={{ backgroundImage: `url('/img/Geri.jpeg')` }}></div>
                                                <div className="ml-4 flex flex-col items-start">
                                                    <div className="font-bold text-gray-800">
                                                        Gerard
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:mx-2 mb-4 flex flex-col items-center">
                                <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                                    <div className="border-2 border-[#B2AAA0] bg-[#E8E1D9] w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded relative">
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Frontend y Backend</div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path fill="#000000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />                                                    </svg>
                                                    <span className="ml-2 text-sm  text-gray-700">Hospitalet de Llobregat</span>
                                                </div>

                                                <div className="flex items-start ml-4">
                                                </div>
                                            </div>
                                            <div
                                                className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                                                <a href="https://www.linkedin.com/in/fran-moreno-cazadilla/" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 p-1 rounded bg-[#081EAC] text-white">LinkedIn</span>
                                                </a>
                                                <a href="https://github.com/fmoreno98" target="_blank" rel="noopener noreferrer" className="block no-underline">
                                                    <span className="block mt-6 mx-1 mx-1 p-1 rounded bg-[#938A7F] text-white">Github</span>
                                                </a>
                                            </div>
                                            <div className="mt-12 flex items-center">
                                                <div className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700" alt=""
                                                    style={{ backgroundImage: `url('/img/Fran.jpeg')` }}></div>
                                                <div className="ml-4 flex flex-col items-start">
                                                    <div className="font-bold text-gray-800">
                                                        Fran
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <div style={{ position: 'fixed', bottom: '45px', right: '-5px' }}>
                    <a href="#top">
                        <img className="h-[80px] -[30px]" src="/img/Flecha.png" alt="f" />
                    </a>

                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default LandingPage;
