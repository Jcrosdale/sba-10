// useFetch
// useFetch (or similar): A generic custom hook for handling data fetching logic. It should manage the data, loading state, and error state. This hook will be used throughout your application to communicate with the API.

// Imports
import { useState, useEffect } from 'react';

const useFetchData = (url, options) => {
    const url = 'https://www.themealdb.com/api/json/v1/'

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return; // Don't fetch if URL is not provided

        const controller = new AbortController() // For cleanup
        setData(null); // Reset data on new fetch
        setError(null); // Reset error on new fetch
        setLoading(true);

        const fetchData = async () => {
            try {
                const res = await fetch(url, { ...options, signal: controller.signal });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result = await res.json();
                setData(result);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        // Cleanup function
        return () => {
            controller.abort();
        };
    }, [url, options]); // Re-run if url or options change

    return { data, loading, error };
}

// useEffect(() => {
//     fetch('https://www.themealdb.com/api/json/v1/')
//         .then(res => res.json())
//         .then(data => console.log(data));
// }, []); // Empty array: fetch once

