import {useEffect, useState} from "react";

export const useDeobounce = (value: string, delay = 500): string => {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounce(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])

    return debounce
}