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
        <div className="container mx-auto">
            <div>
                <img src={details.cover} alt="" />
                <h2 className="text-5xl font-bold pt-10 pb-5">{details.title}</h2>
                {/* <p>{details.description.slice(0, 50)}</p> */}
                {/* <p>{details.description.splice(100, 200)}</p> */}
                <p>{des}</p>
                <p className="pt-6">{des2}</p>
                <p className="pt-6">{des3}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;