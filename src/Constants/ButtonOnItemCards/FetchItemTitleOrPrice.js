import {useState,useEffect} from "react"
import axios from "axios"
import { endPoint } from "../../config/config"
export function FetchItemTitleOrPrice(){
    const[NameOrPrice,setNameOrPrice]=useState([])
    const[Loading,setLoading]=useState(false)
    const API=async()=>{
        try {
            setLoading(true)
            let Products=await axios.get(`${endPoint}/products`) 
            console.log("res",Products.data);
            setNameOrPrice(Products.data)
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
    return([NameOrPrice,Loading])
} 