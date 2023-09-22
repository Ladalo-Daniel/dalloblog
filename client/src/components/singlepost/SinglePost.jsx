import "./singlepost.css"
import img2 from "../../img/2.jpg"
import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const {user} = useContext(Context)
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc)
      console.log(res);
    };
    getPost();
  }, [path])


  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
      window.location.replace("/");
    } catch (err) {
      console.error("Error deleting post:", err);
      // You can also show an error message to the user here if desired.
    }
  };

  const handleUpdate = async () => {
    try{
      await axios.put(`/posts/${post._id}`, {
        username:user.username,
        title,
        desc,
      })
      // window.location.reload()
      setUpdateMode(false)
      setUpdateSuccess(true);
    } catch(err){}
  }
  

  // const handleDelete = async () => {
  //   try{
  //     await axios.delete(`/posts/${post._id}` , { data: {username:user.username}});
  //     window.location.replace("/");
  //   } catch(err){}
  // }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
       {post.photo && <img src={PF + post.photo} alt="" className="singlePostImg" />}
       {updateMode ? 
       <input 
       type="text" 
       autoFocus
       value={title} 
       onChange={(e)=> setTitle(e.target.value)} className="singlePostTitleInput">
       </input> : (
       <h1 className="singlePostTitle">
        {post.title}
        {post.username === user?.username && 
        (<div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
        </div>)
        }
      </h1>
       )}
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: 
        <Link className="navLinks" to={`/?user=${post.username}`}>
        <b>{post.username}</b>
        </Link>
        </span>
        <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      {updateMode ? 
      <textarea 
      className="singlePostDescInput" 
      autoFocus
      value={desc} 
      onChange={(e)=>setDesc(e.target.value)}
      /> : (
      <p className="SinglePostDesc">{desc}
      </p>
      )}
     {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
     {updateSuccess && <span className="updateSuccess">Updated successfully</span>}
     </div>
    </div>
  )
}
