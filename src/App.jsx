import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const  [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove read blog from bookmark
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAddToBookmark = {handleAddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
      
      
      
    </>
  )
}

export default App
