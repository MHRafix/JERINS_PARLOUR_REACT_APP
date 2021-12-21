import { useEffect, useState } from "react";

const useDataFetching = (dataStorePlace) => {

    // Take a loading state for showing loading gif whilr data is loading
    const [ loading, setLoading ] = useState(false);

    // Use state for storing data in the state
    const [ datas, setDatas ] = useState([]);

    // Use useEffect for loading data from the node server
    useEffect( () => {
        setLoading(true);
        fetch(`https://still-sierra-49002.herokuapp.com/${dataStorePlace}`)
        .then(res => res.json())
        .then(data => {
            setDatas(data);
            setLoading(false);
        });
        
    }, []);

    return [ loading, datas, setDatas ];
};

export default useDataFetching;