import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="container mx-auto py-20 gap-6">
            <div className="flex justify-center items-center w-full px-8 mx-auto">
            <div className="w-2/4 pr-36">
                <h2 className="font-bold text-xl">ABOUT US</h2>
                <h2 className="font-bold text-[44px] pb-5">We Make Your Every Moment Special
                </h2>
                <p className="pb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even.</p>
                <Link to='/about-us'><button className="font-semibold  btn btn-primary">Read More</button></Link>
            </div>
            <div className="flex w-2/4 gap-6">
<img className="" src="https://live.themewild.com/loveo/assets/img/gallery/03.jpg" alt="" />

            </div>
            </div>
        </div>
    );
};

export default AboutUs;