import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import 'aos/dist/aos.css'
const HowItWork = () => {

    useEffect(()=>{

        AOS.init()
    },[])
    return (
        <div className="py-24">
            <div data-aso="fade-up" className="pt-4 pb-8 text-center">
                <h3 className="text-xl font-bold">WHAT WE PROMISE</h3>
            <h2 className="text-[44px] font-bold ">Get Our Services at Your Door &<br/>Obey Our Rules</h2></div>
            <div data-aso="fade-up" className="container mx-auto flex justify-center gap-5">
                {/* 1st div */}
                <div data-aso="fade-up" className=" w-[290px] bg-[#F4F7F7]">
                    <div className="relative">
                    <img className="" src="https://live.themewild.com/loveo/assets/img/service/05.jpg" alt="" />
                    <div className="absolute bottom-[-25px] right-5">
                    <span className="flex items-center justify-center bg-[#69A032] w-[50px] h-[50px] rounded-full font-bold  text-lg text-white">01</span>
                    </div>

                    </div>
                    <div className="p-[40px]">
                        
                    <h2 className="text-2xl font-bold pb-2">Satisfaction </h2>
                    <p>It is a long established amet consetetur sadipscing elitr, sed di nonumy.</p>
                    </div>
                </div>
                {/* 2nd div */}
                <div data-aso="fade-up" className=" w-[290px] bg-[#F4F7F7]">
                    <div className="relative">
                    <img className="" src="https://live.themewild.com/loveo/assets/img/service/02.jpg" alt="" />
                    <div className="absolute bottom-[-25px] right-5">
                    <span className="flex items-center justify-center bg-[#69A032] w-[50px] h-[50px] rounded-full font-bold  text-lg text-white">02</span>
                    </div>

                    </div>
                    <div className="p-[40px]">
                        
                    <h2 className="text-2xl font-bold pb-2">Expert Planners</h2>
                    <p>It is a long sit amet consetetur sadipscing elitr, sed di nonumy.</p>
                    </div>
                </div>
                {/* 3rd div */}
                <div data-aso="slide-up" className=" w-[290px] bg-[#F4F7F7]">
                    <div className="relative">
                    <img className="" src="https://live.themewild.com/loveo/assets/img/service/01.jpg" alt="" />
                    <div className="absolute bottom-[-25px] right-5">
                    <span className="flex items-center justify-center bg-[#69A032] w-[50px] h-[50px] rounded-full font-bold  text-lg text-white">03</span>
                    </div>

                    </div>
                    <div className="p-[40px]">
                        
                    <h2 className="text-2xl font-bold pb-2">Made With Love</h2>
                    <p>Everything you are  consetetur sadipscing elitr, sed di nonumy.</p>
                    </div>
                </div>
                {/* 4th  div */}
                <div className=" w-[290px] bg-[#F4F7F7]">
                    <div className="relative">
                    <img className="" src="https://live.themewild.com/loveo/assets/img/service/04.jpg" alt="" />
                    <div className="absolute bottom-[-25px] right-5">
                    <span className="flex items-center justify-center bg-[#69A032] w-[50px] h-[50px] rounded-full font-bold  text-lg text-white">04</span>
                    </div>

                    </div>
                    <div className="p-[40px]">
                        
                    <h2 className="text-2xl font-bold pb-2">Affordable Pricing</h2>
                    <p>Fact that a reader sit amet consetetur sadipscing elitr, sed di nonumy.</p>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default HowItWork;