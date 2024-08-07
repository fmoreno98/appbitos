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
                            <h1 className="inline-block p-1 mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-7xl bg-[#E8E1D9] bg-opacity-80 rounded-3 "><span className=" text-transparent bg-clip-text bg-gradient-to-r to-[#081EAC] from-[#516BE7]">APPBITO</span></h1>
                            <div className='bg-[#E8E1D9] bg-opacity-80 rounded-3 shadow mt-10'><h4 className="text-[#2F49D4]  mr-2 ml-2">Cumplir Habitos Saludables Mejora la Calidad de Vida de las Personas</h4></div>
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
                                Bievenido a APPBITO!
                            </h3>
                            <h4 className="text-[#2F49D4]">La mejor App de Habitos Saludables!</h4>
                            <p className="pt-4 pb-8 m-0 leading-7 text-black border-0 border-[#938A7F]  lg:text-lg">
                                Hemos creado AppBito, una aplicación diseñada para ayudar a las personas a cumplir objetivos diarios que ellos mismos podran ponerse. Con el apoyo de la comunidad, AppBito se convertirá en un lugar seguro y acogedor donde los usuarios pueden conectarse, compartir experiencias y aprender de otros.
                            </p>
                            <ul className="p-0 m-0 leading-6 border-0 border-[#938A7F]">
                                <li className="box-border relative py-4 pl-0 text-left text-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-[#E8E1D9] bg-[#0E28C0] rounded-full"><span className="text-sm font-bold">✓</span></span> BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA.
                                </li>
                                <li className="box-border relative py-4 pl-0 text-left text-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-[#E8E1D9] bg-[#0E28C0] rounded-full"><span className="text-sm font-bold">✓</span></span> BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA.
                                </li>
                                <li className="box-border relative py-4 pl-0 text-left ttext-black border-solid">
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-[#E8E1D9] bg-[#0E28C0] rounded-full"><span className="text-sm font-bold">✓</span></span> BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA BLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLABLA.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 3 --> */}
                <section id="link1" className="text-gray-700 body-font">
                    <div className="container bg-[#516BE7] rounded-5 px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
                            <h2 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-[#E8E1D9] font-semibold">Sobre Nosotros</h2>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Autoseguimiento</h2>
                                    <p className="leading-relaxed text-base">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                        </svg>

                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Calendario</h2>
                                    <p className="leading-relaxed text-base">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Comunidad</h2>
                                    <p className="leading-relaxed text-base">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Retos Diarios</h2>
                                    <p className="leading-relaxed text-base">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Modo Sexo</h2>
                                    <p className="leading-relaxed text-base">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                </div>
                            </div>
                            <div className="xl:w-1/3 md:w-1/2 p-4">
                                <div className="border-2 border-[#B2AAA0] p-6 rounded-lg bg-[#E8E1D9]">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#0E28C0] text-[#E8E1D9] mb-4">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            className="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Consejos Diarios</h2>
                                    <p className="leading-relaxed text-base">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
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
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Frontend y Diseño</div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span className="ml-1 text-gray-500">Barcelona</span>
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
                                                    style={{ backgroundImage: `url('/img/Marc.png')`}}></div>
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
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Backend y Agua</div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span className="ml-1 text-gray-500">Barcelona</span>
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
                                                    style={{ backgroundImage: `url('/img/Benja.png')`}}></div>
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
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Frontend y BDD</div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span className="ml-1 text-gray-500">Barcelona</span>
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
                                                    style={{ backgroundImage: `url('/img/Geri.png')`}}></div>
                                                <div className="ml-4 flex flex-col items-start">
                                                    <div className="font-bold text-gray-800">
                                                        Geri
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
                                        <div className="text-lg font-bold text-gray-700 leading-tight">Frontend y Cosas</div>
                                        <div>
                                            <div className="flex justify-between mt-6 text-xs font-bold">
                                                <div className="flex items-start">
                                                    <svg className="text-gray-400 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span className="ml-1 text-gray-500">Barcelona</span>
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
                                                    style={{ backgroundImage: `url('/img/Fran.png')`}}></div>
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
                        <img class="h-[80px] -[30px]" src="/img/Flecha.png" alt="f" />
                    </a>

                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default LandingPage;