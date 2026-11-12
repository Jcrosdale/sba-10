import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {

    // State to store value
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            // Key
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;

        }
    });
    // Save state to localStorage with changes
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('Error saving to localStorage:', error)
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;

}