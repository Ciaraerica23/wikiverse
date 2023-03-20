import React, { useState, useEffect } from 'react';
import { Page } from './Page';


// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { Article } from './Article';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [articles,setArticles] = useState([])
	const [slug,setSlugs]=useState()

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	async function fetchArticle (){
		const response = await fetch(`${apiURL}/wiki/${slug}`)
		const articleData = await response.json()
		console.log(`${apiURL}/wiki/${slug}`)
		setArticles(articleData)
		console.log({articleData})
		
	}

	useEffect(() => {
		fetchArticle();
	}, []);

	

	return (
		<main>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
	
			
		<Article articles={articles}/>
			{pages.map((pages)=> <Page pages={pages}/>)}

			<span><input onChange={(event) => setSlugs(event.target.value)} value={slug} ></input><button onClick={fetchArticle}>search</button></span>
			
		</main>
	)
}