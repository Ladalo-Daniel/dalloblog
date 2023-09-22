import "./post.css"
import img1 from "../../img/1.jpg"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import LazyLoadedImage from "../lazyloadimage/LazyLoadingImg";


export default function Post({src, post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
        {post.photo &&  <LazyLoadedImage src={PF + post.photo} />}

        <div className="postInfo">
            <div className="postCats">
              {post.categories.map(cat => (
                <span className="postCat">{cat.name}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} className="navLinks">
            <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.desc}
        </p>
    </div>
  )
}

/*

*/
