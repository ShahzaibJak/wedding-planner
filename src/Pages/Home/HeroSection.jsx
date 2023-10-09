import { Link } from "react-router-dom";


const HeroSection = () => {

    return (
        <div className="container mx-auto px-6 pt-14 pb-24">
            <div className="carousel w-full">
                {/* slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex justify-end items-center mx-auto gap-4 w-full">
                        <div className="flex flex-col px-20 w-2/4">
                            <p className="text-lg font-medium">We AreSkilled & Expert
                            </p>
                            <h2 className="text-6xl py-6 font-bold">Wedding Planner For Couples</h2>
                            <p className="pb-6 mr-24">There are many variations of passages orem psum available but the majority have
                                suffered alteration</p>
                            <Link to='/login'><button className="btn btn-primary w-max">Learn More</button></Link>
                        </div>
                        <div className="w-2/4 h-full">
                            <img src="https://images.pexels.com/photos/1405674/pexels-photo-1405674.jpeg" className="" />
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
                            <p className="text-lg font-medium">We AreSkilled & Expert
                            </p>
                            <h2 className="text-6xl py-6 font-bold">Wedding Planner For Couples</h2>
                            <p className="pb-6">There are many variations of passages orem psum available but the majority have
                                suffered alteration</p>
                            <Link to='/login'><button className="btn btn-primary w-max">Join Now</button></Link>
                        </div>
                        <div className="w-2/4 h-full">
                            <img className="h-full"  src="https://images.pexels.com/photos/1806360/pexels-photo-1806360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
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
                            <p className="text-lg font-medium">We AreSkilled & Expert
                            </p>
                            <h2 className="text-6xl py-6 font-bold">Wedding Planner For Couples</h2>
                            <p className="pb-6">There are many variations of passages orem psum available but the majority have
                                suffered alteration</p>
                            <Link to='/login'><button className="btn btn-primary w-max">Join Now</button></Link>
                        </div>
                        <div className="w-2/4 h-full">
                            <img className="h-full" src="https://images.pexels.com/photos/6503844/pexels-photo-6503844.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
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