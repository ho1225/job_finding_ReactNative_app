import { useState, useEffect } from 'react';
import axios from 'axios';
import MockResponse from '../MockResponse/MockResponse';

const rapidApiKey = process.env.RAPID_API_KEY
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = MockResponse(endpoint)
    
    const options = {
        method: 'GET',
        url: url,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
      fetchData()
    }, []);
    
    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;