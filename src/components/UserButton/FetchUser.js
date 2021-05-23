import {useState,useEffect} from "react";
import axios from "axios"
import {endPoint} from "../../config/config"
export function FetchUser() {
    const [Users, setUser] = useState([])
    const[Loading,setLoading]=useState(false)
    const API=async()=>{
            try {
                setLoading(true)
                let useFetch=await axios.get(`${endPoint}/users`)
                console.log("result",useFetch.data);
                setUser(useFetch.data)
            } catch (error) {
                console.log(error);
            }
            finally{
                setLoading(false)
            }


        }
    useEffect(() => {
        API();
    }, [])
    return([Users,Loading])
}