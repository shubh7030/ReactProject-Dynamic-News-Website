import React, { useState } from 'react'
import axios from 'axios'

const News = () => {
    const newsapikey = "368eb471b295444492c92129cb540aa9";
    const [query, setQuery] = useState("");
    const [articles, setArticles] = useState([]);
      
    const fetchNews = async () => {
        try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&apikey=${newsapikey}`
        );
        if (response?.data) {
          setArticles(response?.data?.articles);
        }
        } catch (error) {
        console.log(error);
        }
    };
      
    const handleClick = () => {
        fetchNews();
    };
      
    return (
        <div className="bg-black w-full min-h-screen p-5">
        <header className="w-full pt-6 text-center">
            <h4 className="text-blue-600 text-xl font-bold">NewScope</h4>
            <p className="text-white opacity-80">Search and browse the latest news</p>
        </header>
      
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center m-6 justify-center gap-3">
            <input
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white w-full sm:w-[50%] md:w-[40%] lg:w-[30%] rounded px-3 py-2"
            type="text"
            placeholder="Search for news..."
            />
            <button
            onClick={handleClick}
            className="text-white px-6 py-2 bg-blue-600 rounded font-semibold cursor-pointer hover:bg-blue-700"
            >
            Search Topic
            </button>
            </div>
      
        {/* Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-5 mt-5">
            {articles?.map((article, index) => (
            <div
                key={index}
                className="w-full sm:w-auto h-auto space-y-5 rounded overflow-hidden shadow-lg bg-white"
            >
                <div className="w-full h-48 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={article.urlToImage}
                    alt={article.title}
                />
                </div>
                <div className="p-3">
                <h1 className="text-lg font-bold">{article.title}</h1>
                <p className="text-md opacity-80 mb-2">
                {article.description?.substring(0, 100)}...
                </p>
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white px-6 py-2 bg-blue-600 rounded cursor-pointer hover:bg-blue-700"
                >
                    Read More
                </a>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default News