import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {

    const [details, setDetails] = useState([]);
    const [des, setDes] = useState('')
    const [des2, setDes2] = useState('')
    const [des3, setDes3] = useState('')
    const {id} = useParams()
    const service = useLoaderData()

    useEffect(()=>{
const showService = service.find((service) => service.id == id )
setDetails(showService)
 const newDes = showService.description.slice(0, 400)
 const newDes2 = showService.description.slice(400, 700)
 const newDes3 = showService.description.slice(700, 1000)
setDes(newDes)
setDes2(newDes2)
setDes3(newDes3)
    },[])

    

    

    
    return (
        <div className="container mx-auto pb-20">
            <h2 className="text-5xl pt-6 pb-10 font-bold text-center"> 
                    Our {details.title} Service
                </h2>
            <div className="flex w-full">
                
                
                <div className="w-2/4">
                <h2 className="text-4xl font-bold pt-10 pb-5">{details.title}</h2>
                <p>{des}</p>
                <p className="pt-6">{des2}</p>
                
                </div>
                <div className=" flex justify-center w-2/4">
                <img className="" src={details.cover} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;