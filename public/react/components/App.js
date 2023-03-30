import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Article } from './Article';
import { Form } from './Form';


// import and prepend the api url to any fetch calls
import apiURL from '../api';


export const App = () => {

	const [pages, setPages] = useState([]);
	const [article, setArticle] = useState({});
	const [slug,setSlug] = useState("")
	const [addArticle, setAddArticle] = useState(false)
	const [deletedArticle, setDeletedArticle] = useState(false)

	async function fetchPages(){
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
			setDeletedArticle(false)
	}

	const fetchArticle = async () => {
			const res = await fetch(`${apiURL}/wiki/${slug}`)
			const data = await res.json()
			setArticle(data)
			setSelectedArticle(true)
			
	}

	const deleteArticle = async (slug) => {
		const res = await fetch(`${apiURL}/wiki/${slug}`)
		const data = await res.json()
		
	  }
	
	

	const removeSelectedArticle = () => {
		setSlug("")
	}



	useEffect(() => {
		fetchPages();
	}, []);

	

	return (
<main>			
			  {
				  <>
					  <h1>WikiVerse</h1>
					  {
						  addArticle ? 
						  <Form/> :
						  <>
							  <h2>An interesting 📚</h2>
							  <PagesList pages={pages} fetchArticle={fetchArticle}/>
							  <button onClick={setAddArticle}>Add a Page</button>
							  <input onChange={(event) => setSlug(event.target.value)} value={slug}type="text" ></input><button onClick={fetchArticle}>Search</button>
						  </>
					  }
					  	  <Article page={article}/>
				<button onClick={deleteArticle}>Delete</button>
		  <button onClick={removeSelectedArticle}>Back to list</button>
				  </>
			  }
		  </main>
	)
}