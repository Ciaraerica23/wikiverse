import React from 'react';

export const Article=(props) => {

    return <>
      <h3>{props.page.title}</h3>
     
      <p>{props.page.content}</p>
  
    </>
  } 