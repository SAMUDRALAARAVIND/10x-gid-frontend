import {useState} from "react" 

export const AddNewPost = () => {
    const [username, setUsername] = useState('')
    const [address , setAddress] = useState('')
    const [imageFile, setImageFile] = useState('') ;
    const [description, setDescritpion] = useState(""); 

    const uploadPost = () => {
        const formData = new FormData();
        // Map => takes the data in the key value format 
        formData.append("username", username)
        formData.append("address", address)
        formData.append("image_file", imageFile)
        formData.append("description", description)

        fetch("http://localhost:8080/api", {
            method: 'POST',
            body: formData
        })
    }

    return (
        <div style={styles.container}>
            <input placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <input type="file" onChange={(e) => {
                setImageFile(e.target.files[0]) ;
            }} />
            <textarea value={description} placeholder="Description" onChange={(e) => setDescritpion(e.target.value)}>
            </textarea>
            <button onClick={uploadPost}>Submit</button>
        </div>
    );
}

const styles = {
    container: { height: "300px" , justifyContent:'space-evenly', width: "400px", display: "flex", flexFlow: 'column wrap' }
}