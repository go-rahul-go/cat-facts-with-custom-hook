import { useState,useEffect } from "react";



const useFetch = (url,num)=>{
    const [data,updateData]=useState(null)

    useEffect(()=>{
        fetch(url)
    .then((response)=>{
        return response.json()
        
    })
    .then((result)=>{
        // console.log(result)
        updateData(result)
    })
    },[num])

    
    return [data];

}

export default useFetch;