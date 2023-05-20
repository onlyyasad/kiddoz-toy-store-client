import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Kiddoz | ${title}`;
    }, [title])
}

export default useTitle;