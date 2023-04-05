// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons'


// const SingleBlog = (props) => {
//     const {cImage,dImage,id,name,publishingDate,readingTime,title}=props.bloglist
//     const handleReadTime=props.handleReadTime;
//     const handleBookmarks=props.handleBookmarks;
//     console.log(props)
//     return (
//         <div className='grid grid-rows-1'>
//         <div className="card w-10% bg-base-100 shadow-xl">
//             <figure><img src={cImage} alt="Shoes" /></figure>
//             <div className="card-body">
//                 <div className='flex justify-between items-center'>
//                     <div className='flex justify-between items-center gap-6'>
//                     <div className="w-10 rounded-full">
//                         <img src={dImage} />
//                     </div>
//                     <div>
//                         <h2 className="card-title">{name}</h2>
//                         <p>{publishingDate}</p>
//                     </div>
//                     </div>
//                     <div className='flex justify-between items-center gap-6'>
//                         <h4 >{readingTime}min read
//                         </h4>
//                         <FontAwesomeIcon onClick={()=>handleBookmarks(readingTime)} icon={faBookmark} />
//                     </div>
//                 </div>
//                 <h3 className='font-semibold text-2xl text-left'>{title}</h3>
//                 <a onClick={()=>handleReadTime(readingTime)} className='text-left' href="">Mark as read</a>
//             </div>
//         </div>
//     </div>
//     );
// };

// export default SingleBlog;