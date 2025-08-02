import { useState,useEffect} from "react";

function useCurrencyInfo(currency) {
    // const [base, setBase] = useState('INR');
    // const [target, setTarget] = useState();
    const [data, setData] = useState({});

    useEffect(() =>{
        fetch(` https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/latest/${currency}`)
        .then((response)=>{
            if(!response.ok) {
                throw new Error("failed to fetch");
            }
            return response.json();
        })
        .then((resData)=> {
            setData(resData.conversion_rates);
        })
        .catch((error) => {
            console.error("Error fetching currency data:", error);
        });
        
    },[currency]);
    console.log("Currency data:", data);
    
    return data;
}

export default useCurrencyInfo;