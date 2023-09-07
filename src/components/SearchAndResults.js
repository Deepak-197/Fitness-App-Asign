import React, { useState } from 'react';
import { VideoCard } from './VideoCard';
import axios from 'axios';
import { Navbar } from './Navbar';


export const SearchAndResults = ({query}) => {
     const [data, setData] = useState([])
    
    const [isPlaying, setIsPlaying] = useState(false)
    const [id,setId]= useState()

      
    const handleSearch = (query) => {
         axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=15`)  
         .then((res) => {
          console.log(res.data.results)
          setData(res.data.results)
        }).catch((err) => console.log(err))

      }
      const handlePlay = (id) => {
        setId(id)
      }
  

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className='search-card'>
        {(data && data.map((el, index) => {
          return(
              <VideoCard key={index} 
                id={el.id}
                heading={el.heading}
                text={el.text}
                videoUrl={el.video}
                tags={el.tags}
                setIsPlayin={setIsPlaying}
                isPlaying={id === index ? true : false}
                handlePlay={()=>handlePlay(index)}
              />
          )
        }))}

      </div>
    </>
  )
}
