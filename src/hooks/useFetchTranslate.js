import { useEffect } from "react";


export const useFetchTranslate = (url, dispatch) => {

    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        dispatch({
            type: 'set-translated',
            payload: data.responseData.translatedText
        })
    }

    useEffect(() => {
        fetchData();
    }, [url])

}
