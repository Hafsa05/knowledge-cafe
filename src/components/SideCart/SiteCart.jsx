// import React, { useEffect, useState } from 'react';

// const SiteCart = ({ readTime, blogTitleList }) => {
//     const [times, setTimes] = useState();
//     useEffect(() => {
//         const getReadTimeFromLocalStorage = localStorage.getItem("countReadingTime");
//         setTimes(getReadTimeFromLocalStorage);
//     }, [readTime]);

//     return (
//         <div className='py-10'>
//             <div className='w-96 h-20 bg-cart-one'>
//                 <h3 className='text-[#6047EC] text-2xl font-semibold px-10 py-5'>Spent time on read : {times} min</h3>
//                 <h4 className='text-black text-2xl font-semibold py-8'>Bookmarked Blogs : {blogTitleList.length} </h4>
//             </div>
//             <div>
//                 {
//                     blogTitleList.map((blogtitle) => (<div><p>{blogtitle.name}</p> </div>))
//                 }
//             </div>
//         </div>
//     );
// };

// export default SiteCart;