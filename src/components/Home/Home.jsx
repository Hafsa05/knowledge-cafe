import React, { useState } from 'react';
import SingleBlog from '../../SingleBlog/SingleBlog';

const Home = ({handleReadTime,handleBookmarks}) => {
    const [bloglists,setBloglists]=useState([]);

    useState(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBloglists(data))
    },[])

    return (
        <div>
            {
                bloglists.map(bloglist=> <SingleBlog 
                    key={bloglist.id}
                    bloglist={bloglist}
                    handleReadTime={handleReadTime}
                    handleBookmarks={handleBookmarks}
                ></SingleBlog>)
            }
        </div>
    );
};

export default Home;