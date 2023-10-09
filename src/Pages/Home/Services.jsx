import { Link, useLoaderData,  } from "react-router-dom";
import { ImCircleRight } from "react-icons/im";

const Services = () => {

    
const services = useLoaderData()

    
    return (
        <div className="bg-[#F7FAF4]">
            <div className="container mx-auto">
            <h2 className="text-[44px] pt-16 pb-12 text-center">Our Awesome Services
</h2>

<div className="grid grid-cols-3 px-14 gap-7 py-14">
   
{
    services.map(ser => <div key={ser.id} className="px-[30px] py-[45px] bg-white">
    <div className="p-6 rounded-full bg-[#F5F8EF] w-max">
        <img src={ser.icon} alt=""/>
    </div>
    <h2 className="text-2xl font-bold py-5">{ser.title}</h2>
    <p className="pb-5">{ser.des}</p>
    <Link to={`/service-details/${ser.id}`} className=" font-bold text-[#69A032] ">Read More <ImCircleRight className="inline"/> </Link>
    </div>)
    
}
</div>
        </div>
        </div>
        
    );
};

export default Services;