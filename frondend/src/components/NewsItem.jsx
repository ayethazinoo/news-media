import React from 'react'
import axiosAPI from "../api/axios";
import { Link } from 'react-router-dom'

const NewsItem = ({news , deletedNews}) => {
  let deleteNews = async()=>{
    let res = await axiosAPI.delete('/api/news/'+news._id)
    
    if(res.status == 200){
      deletedNews(news._id)
      
    }
    
  }
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-2">
                <div className="p-6">
                    <h3 className='text-green-800 text-2xl font-semibold'>{news.title}</h3>
                    <p className='text-gray-600 mt-2'>{news.description} </p>
                </div>
                <div className="px-6 pb-6">
                    <span className='text-sm text-gray-500'>Published on : {news.createdAt}</span>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-4">
                      <div className="flex-1 min-w-0 text-gray-600 text-sm wrap-break-word">Author : {news.author}</div>
                      <div className="shrink-0 flex flex-wrap gap-2">
                        <Link to={'/detailNews/'+news._id} className='bg-gray-400 text-white rounded-md shadow-sm p-2 text-sm me-2'>Detail</Link>
                        <Link onClick={deleteNews} className='bg-red-600 text-white rounded-md shadow-sm p-2 text-sm'>Delete</Link>
                        <Link to={'/updateNews/'+news._id} className='bg-green-600 text-white rounded-md shadow-sm p-2 text-sm ms-2'>Update</Link>                        
                      </div>
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewsItem
