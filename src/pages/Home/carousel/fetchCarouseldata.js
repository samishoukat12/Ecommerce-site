// import {useState} from "react";
// export function FetchCarouseldata() {
//     const [Imgs,setImgs]=useState([
//         {
//             name: "Random Name #1",
//             image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//           },
//           {
//             name: "Random Name #2",
//             image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
//           },
//           {
//             name: "Random Name #1",
//             image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//           },
//           {
//             name: "Random Name #2",
//             image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
//           }
//     ])
//     return ([Imgs,setImgs])
// }
import {useState,useEffect} from "react";
import axios from "axios"
export function FetchCarouseldata() {
    const [Imgs, setImgs] = useState([]);
    const [Loading, setLoading] = useState(false)

    async function API() {
       try {
        setLoading(true)
        let products =await axios.get('https://fakestoreapi.com/products')
        // console.log(products.data);
        setImgs(products.data);
       } catch (error) {
           console.log("error",error);
       }
       finally{
        setLoading(false)
       }
        // console.log("products",await productsRes.json());
    }
    useEffect(() => {
        API();
    }, []);


    // end of logics

    //start of views or user views
    return [Imgs,Loading];
    // end of views
}