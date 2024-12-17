import axios from "axios";
import { useQuery } from "react-query";



const baseUrl='https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state'
interface IAllData{
    adress:string,
    id: string,
    image:string,
    name:string ,
    price:string,
}

export const getAllData=()=>{
    return useQuery<IAllData[]> ({
        queryKey:['getAllData'],
        queryFn:async()=>{
            const response= await axios.get<IAllData[]>(baseUrl);
            
            return response.data
        }
    })
}
