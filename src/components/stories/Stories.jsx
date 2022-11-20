import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import './Stories.scss'
const Stories = () => {
// temporary domy data

const {currentUser}=useContext(AuthContext)

const stories=[
    {
        id:1,
        name:"lidan",
        img:"https://tumeourheritage.files.wordpress.com/2016/11/14915595_1081387428649059_841580662917565607_n.jpg"
    },

    {
        id:2,
        name:"Grace vivian",
        img:"https://i2-prod.mirror.co.uk/incoming/article28361099.ece/ALTERNATES/s1200d/0_Lionel-Messi-sets-new-Champions-League-records-to-beat-Cristiano-Ronaldo.jpg"
    },

    {
        id:3,
        name:"Kolman Paul",
        img:"https://cdn.britannica.com/06/202006-050-64C85CC7/Neil-deGrasse-Tyson-2018.jpg?w=400&h=300&c=crop"
    },

    {
        id:4,
        name:"Juan Mary",
        img:"https://i.ytimg.com/vi/rfKiTGj-zeQ/maxresdefault.jpg"
    }
]

  return (
    <div className='stories'>
<div className="story">
<img src={currentUser.profileImg} alt="" />
<span>{currentUser.user}</span>
<button>+</button>
</div>

    {stories.map(story=>{
        return(
        <div className="story" key={stories.id}>
        <img src={story.img} alt="" />
        <span>{story.name}</span>
        </div>
        )
    })}
       
        
    </div>
  )
}

export default Stories