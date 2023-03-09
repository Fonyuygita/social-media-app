import React from 'react'
import './Posts.scss'
import Post from '../post/Post'
import {useQuery } from 'react-query'
import { makeRequest } from '../../axios'

const Posts = () => {
  const { isLoading, error, data } = useQuery(['posts'], () =>
  // create a simple function for axios which include a base url
  makeRequest.get("/posts").then((res)=>{
    return res.data
  })

  )
  console.log(data);

  return (

    <div className='posts'>

    {/*
     {data.map(post=>{
      return(
      
      <Post  post={post} key={post.id}/>

        
      )

    })}

  */}

 
    </div>
  )
}

export default Posts