import {useState,useEffect} from "react"
import axios from "axios"
import { endPoint } from "../../../config/config"
export function Fetchgadgets(){
    const [Gadgets, setGadgets] = useState([])
    const [Loading,setLoading] = useState(false)
    async function API() {
        try {
            setLoading(true)
            let GadgetsProduct= await axios.get(`${endPoint}/products/category/electronics`)
            console.log("res",GadgetsProduct.data);
            setGadgets(GadgetsProduct.data)
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false)

        }
    }
    useEffect(() => {
       API()
    }, [])
   return([Gadgets,Loading])
}