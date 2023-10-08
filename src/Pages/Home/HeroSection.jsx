import { Link } from "react-router-dom";


const HeroSection = () => {

    return (
        <div className="container mx-auto px-6 pt-10">
            <div className="carousel w-full">
                {/* slider 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                <div className="flex justify-end items-center mx-auto gap-4 w-full">
                    <div className="flex flex-col px-20 w-2/4">
                            <p className="text-lg font-medium">Eat Well Live Well.</p>
                            <h2 className="text-6xl py-6 font-bold">Start Your Healthy Life Today With Us</h2>
                            <p className="pb-6">Succeed in the beauty world with the acquired skills!</p>
                            <Link to='/login'><button className="btn btn-primary w-max">Join Now</button></Link>
                            </div>
                        <div className="w-2/4">
                        <img src="/public/slider1.jpg" className="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex justify-end items-center mx-auto gap-4">
                    <div className="flex flex-col">
                            <p className="text-lg font-medium">Eat Well Live Well.</p>
                            <h2 className="text-6xl py-6 ">Start Your Healthy Life<br />Today With Us</h2>
                            <p className="pb-6">Succeed in the beauty world with the acquired skills!</p>
                            <button className="btn btn-primary w-max">Join Now</button>
                            </div>
                        <div className="h-full">
                        <img className="h-full" src="/public/slider3.jpg"  />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                <div className="flex justify-end items-center mx-auto gap-4">
                    <div className="flex flex-col">
                            <p className="text-lg font-medium">Eat Well Live Well.</p>
                            <h2 className="text-6xl py-6 ">Start Your Healthy Life<br />Today With Us</h2>
                            <p className="pb-6">Succeed in the beauty world with the acquired skills!</p>
                            <button className="btn btn-primary w-max">Join Now</button>
                            </div>
                        <div>
                        <img src="/public/slider1.jpg" className="" />
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