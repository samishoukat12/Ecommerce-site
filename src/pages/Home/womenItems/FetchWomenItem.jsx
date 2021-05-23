import { useState, useEffect } from "react"
import axios from "axios"
import {endPoint} from "../../../config/config"
export function FetchWomenItem() {
    const [products, setproducts] = useState([])
    const [Loading, setLoading] = useState(false)
    async function API() {
        try {
            setLoading(true)
            let products = await axios.get(`${endPoint}/products/category/jewelery`)
            console.log(products.data);
            setproducts(products.data)
        } catch (error) {
            console.log("error", error);
        }
        finally {
            setLoading(false)
        }
    }
    // const deleteitem= async()=>{
    //     try {
    //         setLoading(true)
    //         let products = await axios.patch(`${endPoint}/products/6`)
    //         console.log("res",products.data);
    //         // setproducts(products.data)
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }
    const addnewproduct=async()=>{
       
        try {
            let newserverproducts=  {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'sami',
                category: 'electronic'
            }
            setLoading(true)
            let products = await axios.post(`${endPoint}/products`,newserverproducts)
            console.log(products.data);
            setproducts(products.data)
        } catch (error) {
            console.log("error", error);
        }
        finally {
            setLoading(false)
        }
    }
    const updatenewproduct=async()=>{
       
        try {
            let updateserverproducts=  {
                title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
            }
            setLoading(true)
            let products = await axios.put(`${endPoint}/products/7`,updateserverproducts)
            console.log(products.data);
            setproducts(products.data)
        } catch (error) {
            console.log("error", error);
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        API();
        // addnewproduct();
        // deleteitem();
        // updatenewproduct();
    }, [])
    return ([products, Loading])
}