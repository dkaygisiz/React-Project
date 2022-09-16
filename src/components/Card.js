import React from "react";
import "./card.css";
export default function Card(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card text-dark bg-light mb-3 ">
        <img
          src={"images/image" + props.imageId + ".jpg"}
          className="card-img-top"
          alt="#"
        />
        <div className="card-body">
          <h5 className="card-title ">{props.title}</h5>
          <p className="card-text  ">{props.body}</p>
          {/*<a href="#" class="btn btn-primary">Go somewhere</a>*/}
        </div>
      </div>
    </div>
  );
}
