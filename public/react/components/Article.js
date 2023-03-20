import React from 'react';

export const Article=({articles})=>{
    return <div>
        
        <h3>{articles.title}</h3>
        <h3>{articles.authorId}</h3>
        <p>{articles.content}</p>
       
       

    </div>
}