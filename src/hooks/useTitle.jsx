import {useState, useEffect} from 'react';

export function useTitle(value) {
    

    const [title, setTitle] = useState(value)

    useEffect(() => {
        document.title = title

         return () => {
        document.title = ''
    }

    }, [title])
    

return{
    title,
    setTitle

}

}

