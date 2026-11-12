// useFetch
// useFetch (or similar): A generic custom hook for handling data fetching logic. It should manage the data, loading state, and error state. This hook will be used throughout your application to communicate with the API.

// Imports
import { useState, useEffect } from 'react';

const useFetchData = <T,>(url: string) => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) return; // Don't fetch if URL is not provided

        const controller = new AbortController() // For cleanup
        setData(null); // Reset data on new fetch
        setError(null); // Reset error on new fetch
        setLoading(true);

        const fetchData = async () => {
            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const result: T = await res.json();
                setData(result);
            } catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
                    setError(err.message);
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
    }, [url]); // Re-run if url or options change

    return { data, loading, error };
}

// useEffect(() => {
//     fetch('https://www.themealdb.com/api/json/v1/')
//         .then(res => res.json())
//         .then(data => console.log(data));
// }, []); // Empty array: fetch once

