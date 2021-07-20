import React from 'react'
import './post.css'

export default function Post({image}) {
    // const imgURL = image !== null ? image : url

    const imgURL = "https://res.cloudinary.com/culturemap-com/image/upload/ar_4:3,c_fill,g_faces:center,w_980/v1508806983/photos/263174_original.jpg"
    return (
        <div className="post">
               
           <img 
           className="postImage" alt=""
      
           src={imgURL}></img> 

           <div className="postInfo">
               <div className="postCategories">                     
                    <span className="postCat">Code</span>
                    <span className="postCat">Movies</span>
                    <span className="postCat">Sports</span>
               </div>
               <span className="postTitle">
                   lorem ipsum dolor  lorem ipsum dolor
               </span>
               <span className="postDate">
                 1 hour ago.
               </span>
               <p className="postDescription">lorem lorem ipsum dolor ipsumlorem lorem 
               ipsum dolor ipsum dds kirb dds llorem lorem ipsum dolor ipsum dds kirblorem lorem ipsum dolor ipsum dds kirblorem lorem ipsum dolor ipsum dds kirblorem lorem ipsum dolor ipsum 
               dds kirblorem lorem ipsum dolor ipsum dds lorem lorem ipsum dolor ipsumlorem lorem 
               ipsum dolor ipsum dds kirb dds llorem lorem ipsum dolor ipsum dds kirblorem lorem ipsum dolor ipsum dds kirblorem lorem ipsum dolor ipsum dds kirblorem lorem ipsum dolor ipsum 
               dds kirblorem lorem ipsum dolor ipsum dds kirborem lorem ipsum kirborem lorem ipsum dolor ipsum dds kirblorem lorem ipsum dolor ipsum dds kirbkirb </p>
           </div>

        </div>
    )
}
