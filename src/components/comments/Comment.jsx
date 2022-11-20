import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import './Comment.scss'

const Comment = () => {
// fake comment  here
const {currentUser}=useContext(AuthContext);



const comment=[
    {
        id:1,
        name:"lidan",
        userId:1,
        img:"https://tumeourheritage.files.wordpress.com/2016/11/14915595_1081387428649059_841580662917565607_n.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptas, inventore obcaecati, excepturi fuga, earum adipisci vel harum sed qui sunt doloremque quidem?"
    },

    {
        id:2,
        name:"Grace vivian",
        userId:2,
        img:"https://i2-prod.mirror.co.uk/incoming/article28361099.ece/ALTERNATES/s1200d/0_Lionel-Messi-sets-new-Champions-League-records-to-beat-Cristiano-Ronaldo.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptas, inventore obcaecati, excepturi fuga, earum adipisci vel harum sed qui sunt doloremque quidem?"
    },

    {
        id:3,
        name:"Kolman Paul",
        userId:3,
        img:"https://cdn.britannica.com/06/202006-050-64C85CC7/Neil-deGrasse-Tyson-2018.jpg?w=400&h=300&c=crop",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptas, inventore obcaecati, excepturi fuga, earum adipisci vel harum sed qui sunt doloremque quidem?"
    },

    {
        id:4,
        name:"Juan Mary",
        userId:4,
        img:"https://i.ytimg.com/vi/rfKiTGj-zeQ/maxresdefault.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt voluptas, inventore obcaecati, excepturi fuga, earum adipisci vel harum sed qui sunt doloremque quidem?"
    }
]



  return (
   <div className="comments">
<div className="write">
<img src={currentUser.profileImg} alt="" />
<input type="text" placeholder='write a comment.....' />
<button>Sent</button>
</div>

   {comment.map(comment=>{
    return(
    <div className="comment">
<img src={comment.img} alt="" srcset="" />
<div className="info">
<span>{comment.name}</span>
<p>{comment.desc}</p>
</div>
<span className='date'>1 hour ago</span>
    </div>
    )

   })}
   
   </div>
  )
}

export default Comment