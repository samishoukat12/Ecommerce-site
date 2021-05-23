import {useState,useEffect} from "react"
import axios from "axios"
import {endPoint} from "../../../config/config"
export function FetchItem() {
    const [products, setproducts] = useState([])
    const [Loading,setLoading] = useState(false)
    async function API() {
        try {
            setLoading(true)
            let products=await axios.get(`${endPoint}/products?limit=5`)
            console.log(products.data);
            setproducts(products.data)
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
    return([products,Loading])
}