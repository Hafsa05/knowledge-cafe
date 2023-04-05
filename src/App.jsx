import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SiteCart from './components/SideCart/SiteCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuesAns from './components/QuesAns/QuesAns'

function App() {
  
  const [readTime, setReadTime]= useState('')
  const [blogTitleList, setBlogTitleLists]= useState([]);

  const handleReadTime= (readingTime)=>{
    const previousReadTime=JSON.parse(localStorage.getItem("countReadingTime"));
    if(previousReadTime){
      const total=previousReadTime+readingTime;
      localStorage.setItem("countReadingTime", total);
      setReadTime(total)
    }
    else{
      localStorage.setItem("countReadingTime", readingTime);
      setReadTime(readingTime)
    }
  }

  const handleBookmarks = (arr) =>{
    // toast("It was not so Easy bro !! nice !! you added  a blog on Bookmark !!");
    const newBlogTitleLists = [...blogTitleList,arr]
    setBlogTitleLists(newBlogTitleLists);
    toast("Wow so easy !");

  };

  return (
    <div className="App">
      <Header></Header>
      <div className='flex'>
      <Home
      handleReadTime={handleReadTime}
      handleBookmarks={handleBookmarks}
      ></Home>
      <SiteCart
      readTime={readTime}
      blogTitleList={blogTitleList}
      ></SiteCart>
      </div>
      <QuesAns></QuesAns>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
