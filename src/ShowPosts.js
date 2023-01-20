import { useEffect, useState } from "react"

export const ShowPosts = () => {
    const [serverResponse, setServerResponse] = useState(null) ;

    const fetchAllPosts = async () => {
        const resp = await fetch('http://localhost:8080/all')
        setServerResponse(await resp.json())
    }

    useEffect(() => { 
        fetchAllPosts()
    }, [])

    if(serverResponse === null) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            {
               serverResponse?.result?.map?.((post, index) => {
                return <img width={100} height={100} style={{border: '2px solid red'}} src={`http://localhost:8080/images/${post.image_file}`} key={index}/>
               })
            }
        </div>
    )
}
