import { Link, useLoaderData,  } from "react-router-dom";
import { ImCircleRight } from "react-icons/im";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Services = () => {

    useEffect(()=>{
        Aos.init()
    },[])
const services = useLoaderData()

    
    return (
        <div className="bg-[#F7FAF4]">
            <div className="container mx-auto">
            <h2 className="text-[44px] pt-16 pb-12 text-center">Our Awesome Services
</h2>

<div data-aso="fade-up" className="grid grid-cols-3 px-14 gap-7 py-14">
   
{
    services.map(ser => <div data-aso="fade-up" key={ser.id} className="px-[30px] py-[45px] bg-white">
    <div className="p-6 rounded-full bg-[#F5F8EF] w-max">
        <img src={ser.icon} alt=""/>
    </div>
    <h2 className="text-2xl font-bold py-5">{ser.title}</h2>
    <p className="pb-5">{ser.des}</p>
    <div className="flex justify-between">
    <Link to={`/service-details/${ser.id}`} className=" font-bold text-[#69A032] ">Read More <ImCircleRight className="inline"/> </Link>
    <div className="p-2 rounded-lg  bg-[#69A032]"><p className="font-bold text-white ">Price: {ser.price}</p></div>
    </div>
    </div>)
    
}
</div>
        </div>
        </div>
        
    );
};

export default Services;