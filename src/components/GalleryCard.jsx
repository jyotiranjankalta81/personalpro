import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../src/images/img4.jpg";
import "./GalleryCard.css"

const GalleryCard = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card " id="gallerycard_img">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title }</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#Name" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
                <p className="text-center m-1">beacons.ai/{props.title}</p>

            </div>



        </>
    );
};

export default GalleryCard;