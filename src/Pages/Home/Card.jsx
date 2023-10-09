
import { ImCircleRight } from "react-icons/im";
import { Link } from 'react-router-dom';
const Card = () => {
    return (
        <div>
            
        <div>
            
        <div className="px-[30px] py-[45px] bg-white">
            <div className="p-6 rounded-full bg-[#F5F8EF] w-max">
                <img src="/public/10.png" alt="" />
            </div>
            <h2 className="text-2xl font-bold py-5">Personal Coaching</h2>
            <p className="pb-5">Lorem ipsum dolor sit amet, consetetur si pscing elitr, sed di nonumy eirmod.</p>
            <Link to='/login' className=" font-bold text-[#69A032] ">Read More <ImCircleRight className="inline" /> </Link>
        </div>
        </div>
        </div>
    );
};

export default Card;