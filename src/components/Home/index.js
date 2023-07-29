// import React, {useEffect, useState} from 'react'
import { Component } from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'
import Card from '../Card'
var datanew = require("../../data.json");



class Home extends Component{

  state={initialData:datanew.result}

  componentDidMount(){
    this.getAllMovies()  
}
 getAllMovies=async()=>{
  const options={
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          "category": "movies",
          "language": "kannada", "genre": "all",
          "sort":"voting"
      })
  }
  try {
    const response=await fetch("https://hoblist.com/api/movieList",options)
  const data=await response.json()
  console.log(data)
  } catch (e) {
      console.log(e)
  }
}
   
  render(){
    const initialData=this.state
    console.log(initialData)
    {initialData.initialData.map(e=>(
      console.log(e._id)
    ))}

    return(
      <div className="movie-list-container">
       <div className='nav-b'>
        <h2 className='logo'>GeekSynergy</h2>
        
        <Popup
     trigger={
       <button type="button" className="trigger-button">
         Company Details
       </button>
     }
     position="bottom left"
   >
     <p><b>Company:</b> Geeksynergy Technologies Pvt Ltd</p>
     <p><b>Address:</b> Sanjayanagar, Bengaluru-56</p>
     <p><b>Phone:</b> XXXXXXXXX09</p>
     <p><b>Email: </b>XXXXXX@gmail.com</p>

   </Popup>
 
        
       </div>
    
      <div>

      <ul>{initialData.initialData.map(e=>(
      <Card key={e._id} title={e.title} poster={e.poster} director={e.director}
      stars={e.stars}
      genre={e.genre}
      language={e.language} date={new Date(e.releasedDate).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
      votes={e.totalVoted} pageViews={e.pageViews} />
    ))}</ul>
       
      </div>
    
    </div>

    )
  }
}
export default Home
  

