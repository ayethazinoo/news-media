import React, { useEffect, useState } from 'react'
import NewsItem from '../components/NewsItem'
import Pagination from '../components/Pagination'
import { useLocation } from 'react-router-dom'
import axiosAPI from '../api/axios'

const Home = () => {
  const [newsData , setNewsData] = useState([])
  const [ dataLink , setDataLink ] = useState();

  // http://localhost:5000/api/news?page=1
  let location = useLocation();
  let search = new URLSearchParams(location.search);
  let page = search.get('page')
  page = parseInt(page) ? parseInt(page) : 1 ;
  

  useEffect( () => {
    let fetchData = async()=>{
      
      let response = await axiosAPI("/api/news?page="+page);   
     
      if(response.status == 200){
        let data = await response.data;        
        setDataLink(data.dataLink)
        setNewsData(data.data);      
        
        window.scroll({ top : 0 , left : 0 , behavior : 'smooth' })
      }
      
    }
    fetchData();
  },[page])

  let deletedNews = (_id) =>{
    
    if(newsData.length == 1 && page > 1){
      navigation.navigate('/?page='+(page-1))
    }else{
      setNewsData(prev => prev.filter(remove => remove._id !== _id))
    }
  }

  return (
    <div>
      <div className="max-auto p-8">
        <div className="space-y-8">
          {!! newsData.length && (newsData.map( news =>(
            <NewsItem news = {news} deletedNews= {deletedNews} key={news._id}/>
          ))) }

          {!!dataLink && newsData.length !==0 && <Pagination links= {dataLink} page= {page || 1}/>    }    

          { !! newsData.length ==0 ? <h2 className='text-2xl font-semibold text-center text-green-800'>There is no data...</h2> : '' }     
        </div>
      </div>
    </div>
  )
}

export default Home
