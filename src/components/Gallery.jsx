import React from "react";
// import web from "../src/images/img4.jpg";
import Sdata from "./Sdata";
import GalleryCard from "./GalleryCard";
import Navbar from "./Navbar"
import Footer from './Footer';

const Gallery = () => {
    return (
        <>
        <Navbar/>
            <div className="my-5">
                <h1 className="text-center">The Gallery</h1>

            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind )=>{
                                    return <GalleryCard key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    
                                    
                                    />
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Gallery;