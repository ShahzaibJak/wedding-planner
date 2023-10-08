import { Link } from "react-router-dom";
import { ImCircleRight } from "react-icons/im";
const Services = () => {
    return (
        <div className="bg-[#F7FAF4]">
            <div className="container mx-auto">
            <h2 className="text-[44px] pt-16 pb-12 text-center">Get Our Features & Services
</h2>

<div className="grid grid-cols-3 px-14 gap-7 py-14">
    {/* 1st cart */}
    <div className="px-[30px] py-[45px] bg-white">
<div className="p-6 rounded-full bg-[#F5F8EF] w-max">
    <img src="/public/10.png" alt="" />
</div>
<h2 className="text-2xl font-bold py-5">Personal Coaching</h2>
<p className="pb-5">Lorem ipsum dolor sit amet, consetetur si pscing elitr, sed di nonumy eirmod.</p>
<Link to='/login' className=" font-bold text-[#69A032] ">Read More <ImCircleRight className="inline"/> </Link>
    </div>
    {/* 1st cart */}
    <div className="px-[30px] py-[40px] bg-white">
<img src="/public/10.png" alt="" />
<h2 className="text-2xl font-bold py-5">Personal Coaching</h2>
<p className="pb-5">Lorem ipsum dolor sit amet, consetetur si pscing elitr, sed di nonumy eirmod.</p>
<a className="font-bold" href="">Read More</a>
    </div>
    {/* 1st cart */}
    <div className="px-[30px] py-[40px] bg-white">
<img src="/public/10.png" alt="" />
<h2 className="text-2xl font-bold py-5">Personal Coaching</h2>
<p className="pb-5">Lorem ipsum dolor sit amet, consetetur si pscing elitr, sed di nonumy eirmod.</p>
<a className="font-bold" href="">Read More</a>
    </div>
    {/* 1st cart */}
    <div className="px-[30px] py-[40px] bg-white">
<img src="/public/10.png" alt="" />
<h2 className="text-2xl font-bold py-5">Personal Coaching</h2>
<p className="pb-5">Lorem ipsum dolor sit amet, consetetur si pscing elitr, sed di nonumy eirmod.</p>
<a className="font-bold" href="">Read More</a>
    </div>
    {/* 1st cart */}
    <div className="px-[30px] py-[40px] bg-white">
<img src="/public/10.png" alt="" />
<h2 className="text-2xl font-bold py-5">Personal Coaching</h2>
<p className="pb-5">Lorem ipsum dolor sit amet, consetetur si pscing elitr, sed di nonumy eirmod.</p>
<a className="font-bold" href="">Read More</a>
    </div>
    {/* 1st cart */}
    <div className="px-[30px] py-[40px] bg-white">
<img src="/public/10.png" alt="" />
<h2 className="text-2xl font-bold py-5">Personal Coaching</h2>
<p className="pb-5">Lorem ipsum dolor sit amet, consetetur si pscing elitr, sed di nonumy eirmod.</p>
<a className="font-bold" href="">Read More</a>
    </div>
    
    
</div>
        </div>
        </div>
        
    );
};

export default Services;