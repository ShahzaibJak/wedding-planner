import { Link } from "react-router-dom";
import Certificate from "./docs/certificate.pdf";
import Bond from "./docs/bond.pdf";
import Stock from "./docs/stock-cert.pdf";
import Financial from "./docs/financials2.pdf";

const AboutUs = () => {
    return (
        <div className="container mx-auto py-20 gap-6 flex flex-col items-center justify-evenly ">
            <div className="flex justify-center items-center w-full px-8 mx-auto">
                <div className="w-2/4 pr-36">
                    <h2 className="font-bold text-xl">ABOUT US</h2>
                    <h2 className="font-bold text-[40px] pb-5">We Make Your Special Moment Is <i>Perfect</i>
                    </h2>
                    <p className="pb-6">We, at Perfect Planning, make sure your special moments are perfect!. With thorough planning, attention to detail and precise execution, we take care of the details so you can enjoy your moments.</p>
                    <Link to='/about-us'><button className="font-semibold  btn btn-primary">Read More</button></Link>
                </div>
                <div className="flex w-2/4 gap-6">
                    <img className="" src="https://live.themewild.com/loveo/assets/img/gallery/03.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-4 p-2 py-12 w-full bg-neutral-50">
                <h1 className="text-5xl font-bold p-6">
                    Organizational Structure
                </h1>
                <img className="rounded-md" src="https://ucarecdn.com/773c3d54-e1a2-441a-ba04-9cfd43d9e2b7/orgstruct.jpg" alt="Organizational Structure" />
            </div>

            <div className="flex flex-col items-center justify-start gap-4 p-2 py-12 w-full bg-neutral-50">
                <h1 className="text-5xl font-bold p-6">
                    Certificated & Documents
                </h1>
                <div className="p-6 flex flex-row items-center justify-center gap-4 w-full">
                    <div className="p-2 pb-12 rounded-md bg-yellow-50 flex flex-col gap-6 items-start justify-start w-1/4">
                        <h1 className="text-3xl font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-7 h-7 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                            </svg>

                            Prize Bond
                        </h1>
                        <a href={Bond} without rel="noopener noreferrer" target="_blank"><button className="text-white font-semibold bg-blue-600 rounded-md w-max px-4 py-2">View</button></a>
                    </div>

                    <div className="p-2 pb-12 rounded-md bg-yellow-50 flex flex-col gap-6 items-start justify-start w-1/4">
                        <h1 className="text-3xl font-semibold">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>
                            Certificate
                        </h1>
                        <a href={Certificate} without rel="noopener noreferrer" target="_blank"><button className="text-white font-semibold bg-blue-600 rounded-md w-max px-4 py-2">View</button></a>
                    </div>

                    <div className="p-2 pb-12 rounded-md bg-yellow-50 flex flex-col gap-6 items-start justify-start w-1/4">
                        <h1 className="text-2xl font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                            Stock Certificate

                        </h1>
                        <a href={Stock} without rel="noopener noreferrer" target="_blank"><button className="text-white font-semibold bg-blue-600 rounded-md w-max px-4 py-2">View</button></a>
                    </div>

                    <div className="p-2 pb-12 rounded-md bg-yellow-50 flex flex-col gap-6 items-start justify-start w-1/4">
                        <h1 className="text-2xl font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                            Financial Statements

                        </h1>
                        <a href={Financial} without rel="noopener noreferrer" target="_blank"><button className="text-white font-semibold bg-blue-600 rounded-md w-max px-4 py-2">View</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;