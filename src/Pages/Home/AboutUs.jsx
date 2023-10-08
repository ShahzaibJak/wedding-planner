import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className="container mx-auto py-20 gap-6">
            <div className="flex w-full px-8 items-center">
            <div className="w-2/4 pr-36">
                <h2 className="font-bold text-xl">ABOUT US</h2>
                <h2 className="font-bold text-[44px] pb-5">Start Your Healthy Life Today With Us
                </h2>
                <p className="pb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat, sed diam voluptua.</p>
                <Link to='/about-us'><button className="font-semibold  btn btn-primary">About More</button></Link>
            </div>
            <div className="flex w-2/4 gap-6">
<img className="w-2/4" src="/public/about2.jpg" alt="" />
<img className="w-2/4" src="/public/about.jpg" alt="" />
            </div>
            </div>
        </div>
    );
};

export default AboutUs;