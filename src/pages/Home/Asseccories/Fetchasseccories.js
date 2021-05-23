import {useState,useEffect} from "react";
import axios from "axios"
import {endPoint} from "../../../config/config"
export function FetchAsseccories(){
  const [accessories,setAccessories]=useState([]);
  const [Loading,setLoading]=useState(false);
  async function API(){
       try {
           setLoading(true)
          let accessories=await axios.get(`${endPoint}/products/category/electronics`)
          console.log("result",accessories.data);
          setAccessories(accessories.data)
       } catch (error) {
           console.log("error",error);
       }
       finally{
           setLoading(false)
       }
  }
  useEffect(() => {
    API()
  },[])
  return([accessories,Loading])
}