import { useState, useEffect } from "react"
import  axios from "axios"
import { endPoint } from "../../config/config"
// import { endPoint } from "../../config/config"

export function FetchAddCart() {
    const [Cartz, setCarts] = useState([])
    const [Loading, setLoading] = useState(false)
    const API = async () => {
        try {
            setLoading(true)
            let AddtoCarts = await axios.get(`${endPoint}/carts`)
            console.log("res", AddtoCarts.data);
            setCarts(AddtoCarts.data)
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        API();
    }, [])
    return ([Cartz, Loading])
}