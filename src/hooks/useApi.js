import { useEffect } from "react";
import { useState } from "react";
const API_URL = 'https://api-agencyposts.onrender.com'

export function useApi(type) {
    const [arrayImages, setArrayImages] = useState([])
    const [actions , setActions] = useState({
        error : false,
        load : true
    })
    const [data, setData] = useState([])

    useEffect(()=>{
        ( async () => {
            
        const options = {
            method: 'POST',
            body: JSON.stringify({
              text: type
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }

        try {

        const response = await fetch(API_URL, options)
    
        const data = await response.json()

        const arrayCompleted = data.images.map((item, index) => {
            return { image: data.images[index] };
    
        });

        setArrayImages(arrayCompleted)
        setActions({...actions, load : false})
        setData(data.data)

        } catch (e) {
        console.log(e);
        setActions({...actions, error: true, load:false})
        }
    })()
    }, [actions, type])

    return {
        arrayImages,
        error : actions.error,
        load : actions.load,
        data : data
    }
}