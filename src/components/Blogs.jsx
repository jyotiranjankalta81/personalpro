import React from 'react'
import BlogCard from './BlogCard'
import BlogSmallCard from './BlogSmallCard'
import './Blogs.css'
import Navbar from "./Navbar"

const Blogs = (props) => {
  return (
    // <p>This is Blog Page</p>
    <>
    <Navbar/>
      <div id="top_div">
        <h1 >Beacons Blog</h1>
        <p >
          Tips,research,and stories from a startup trying to build the best
          tools for <br /> the creator economy
        </p>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-6' id="blogcontent_type">
              {/* <GalleryCard/> */}
              <BlogCard/>
              <BlogSmallCard/>
              </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row gy-4' id="blogcontent_type">
              {/* <GalleryCard/> */}
              {/* <BlogCard/> */}
              <BlogSmallCard/>
              <BlogSmallCard/>
              <BlogSmallCard/>
              <BlogSmallCard/>
              <BlogSmallCard/>
              <BlogSmallCard/>
              <BlogSmallCard/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
