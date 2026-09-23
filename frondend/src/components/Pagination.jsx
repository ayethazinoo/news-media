import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({links , page}) => {  
  
  return (
    <div>
      <div className="flex items-center justify-center px-4 py-3">        
        <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md">
              <Link to={`${links.previousPage ? '/?page='+((page*1)-1) : '/?page='+page}`} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                  <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" />
                </svg>
              </Link>
              
              {
                  links.loopLink.map(loopItem=>{
                      if(page == loopItem.loopNumber){
                          return (<Link to={ `/?page=${loopItem.loopNumber}`} key={loopItem.loopNumber} aria-current="page" className="relative z-10 inline-flex items-center bg-green-500 px-4 py-2 text-sm font-semibold
                              text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">{loopItem.loopNumber}</Link>)
                      }else{
                          return (<Link to={ `/?page=${loopItem.loopNumber}`} key={loopItem.loopNumber} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600
                              inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">{loopItem.loopNumber}</Link>)
                      }
                  })
              }
              
              
              <Link to={`${links.nextPage ? '/?page='+((page*1)+1) : '/?page='+page}`} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-700 hover:bg-white/5 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5">
                  <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </Link>
            </nav>
          </div>
      </div>
    </div>
  )
}

export default Pagination
