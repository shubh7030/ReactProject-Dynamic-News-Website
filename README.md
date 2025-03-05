# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- This is the code of project with responsiveness
//     const newsapikey = "368eb471b295444492c92129cb540aa9"
//     const [query, setQuery] = useState("")
//     const [articles, setarticles] = useState([])
//     console.log(articles)
    
//     const fetchNews = async () => {
//         try {
//             const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apikey=${newsapikey}`)
            
//             if(response?.data){
//                 setarticles(response?.data?.articles)
//             }

//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const handleClick = () => {
//         fetchNews()
//     }

//   return (
//     <div className='bg-black w-screen min-h-screen p-5'>
//         <header className='w-full pt-6'>
//             <h4 className='text-blue-600 text-center text-xl font-bold'>Instant News Website</h4>
//             <p className='text-white text-center opacity-80'>Search and browse the latest news</p>
//         </header>
        
//         <div className='flex item-center m-6 justify-center gap-3'>
//             <input onChange={(e) => setQuery(e.target.value)} className='bg-white w-[30%] rounded' type="text" />
//             <button onClick={handleClick} className='text-white px-6 py-2 bg-blue-600 rounded font-semibold cursor-pointer'>Search topic</button>
//         </div>
        
//         <div className='grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-3 mt-5'>
//            {
//             articles?.map((article)=>(
//                 <div className='w-[25rem] h-96 space-y-5 rounded overflow-hidden shadow-lg bg-white'>
//                 <div className='w-full h-48 overflow-hidden'>
//                     <img className='w-full h-full object-cover' src={article.urlToImage} alt="" />
//                 </div>
//                 <div className='p-3'>
//                     <h1 className='text-lg font-bold'>{article.title}</h1>
//                     <p className='text-md opacity-80 mb-2'>{article.description.substring(0,100)}...</p>
//                     <a href={article.url} target='_blank' className='text-sm font-semibold text-white px-6 py-2 bg-blue-600 rounded cursor-pointer mt-3'>Read more</a>
//                 </div>
//             </div>
//             ))
//            }
            
//         </div>

//     </div>
//   )

 -->