import React, {useState} from 'react';
import apiURL from '../api';

export const Form = (props) => {
    const [articleData, setArticleData] = useState({title: "", content: "", name: "", email: ""})

    const handleSubmit = async (e) => {
        e.preventDefault()

            const res = await fetch(`${apiURL}/wiki`)
            const data = res.json()
            setArticleData({})
           

        
    }

    const handleChange = (e) => {
        setArticleData({...articleData, [e.target.name]: e.target.value})
    }


    const checkFormData = () => {
        const formData = Object.values(articleData)
        if(formData.length < 4) return false
        else return true
    }

    return <>
        <form onSubmit={handleSubmit}>
            <h3>Add a Page</h3>
            <div><input type="text" placeholder='Title' name='title' onChange={handleChange}/></div>
            <div><input type="text" placeholder='Content' name='content' onChange={handleChange}/></div>
            <div><input type="text" placeholder='Author name' name='name' onChange={handleChange}/></div>
            <div><input type="text" placeholder='Author email' name='email' onChange={(e) => {
           
               handleChange(e)
                if(checkFormData()) document.getElementById("btn").disabled = false;
            }}/> </div>
            <button type="submit" id="btn" disabled>Create a Page</button>
        </form>
    </>
} 