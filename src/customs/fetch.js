import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect( () => { 
        async function fetchData() {
            setTimeout(async ()=>{
                try{
                    let res = await axios.get(url)
                    let currentData = res && res.data ? res.data : [];
                    setData(currentData);
                    setIsLoading(false);
                    setIsError(false);
                }
                catch(e){
                    setIsLoading(false);
                    setIsError(true);
                }        
            }, 1000);
          }
        return fetchData();
    },[]);
    
    return {
        data, isLoading, isError
    }
}

export default useFetch;