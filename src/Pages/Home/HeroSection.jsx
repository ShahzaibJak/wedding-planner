import { Link } from "react-router-dom";


const HeroSection = () => {

    return (
        <div className="container mx-auto px-6 pt-14 pb-24">
            <div className="carousel w-full">
                {/* slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex justify-end items-center mx-auto gap-4 w-full">
                        <div className="flex flex-col px-20 w-2/4">
                            <p className="text-lg font-medium">Skilled & Expert
                            </p>
                            <h2 className="text-5xl py-4 font-bold">Event Planning & Management</h2>
                            <p className="pb-6 mr-24 text-sm">We provide detailed planning and management for all your events, be it weddings, birthdays or any other celebration, we make it Perfect!</p>
                            <Link to='/about-us'><button className="btn btn-primary w-max">Learn More</button></Link>
                        </div>
                        <div className="w-2/4 h-full">
                            <img src="/public/hero-3.jpg" className="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex justify-end items-center mx-auto gap-4 w-full">
                        <div className="flex flex-col px-20 w-2/4">
                            <p className="text-lg font-medium">Skilled & Expert
                            </p>
                            <h2 className="text-5xl py-6 font-bold">Wedding Planner For Couples</h2>
                            <p className="pb-6 text-sm">With years of experience, planning 1000x of weddings, we have the know how to make your special day <i>perfect</i>, just the way you want!</p>
                            <Link to='/about-us'><button className="btn btn-primary w-max">Learn More</button></Link>
                        </div>
                        <div className="w-2/4 h-full">
                            <img src="/public/hero.jpg" className="" />

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex justify-end items-center mx-auto gap-4 w-full">
                        <div className="flex flex-col px-20 w-2/4">
                            <p className="text-lg font-medium">Skilled & Expert Planners for all
                            </p>
                            <h2 className="text-6xl py-6 font-bold">Celebrations</h2>
                            <p className="pb-6">Celebrations are meant to be celebrated! Let us take over the hassle & planning and enjoy your special moments!</p>
                            <Link to='/about-us'><button className="btn btn-primary w-max">Learn More</button></Link>
                        </div>
                        <div className="w-2/4 h-full">
                            <img src="/public/hero2.jpg" className="" />

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeroSection;