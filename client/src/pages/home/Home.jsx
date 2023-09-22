import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import FloatingButton from "../../components/floatingbutton/FloatingButton"
import Loader from "../../components/loader/Loader"
import { useEffect, useState } from "react"
//import Register from "../register/Register"
import axios from 'axios';
import { useLocation } from "react-router-dom"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [posts, setposts] = useState([]);
  const [mobile, setMobile] = useState(window.innerWidth <= 960);
  const [toggleSidebar, setToggleSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setMobile(window.innerWidth <= 960);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts


  const {search} = useLocation();
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    try{
      const fetchPosts = async () => {
        const response = await axios.get("/posts" + search);
        console.log(response);
        setposts(response.data);
      }; fetchPosts();
    } catch(err) {
     console.error(err)
    }
  }, [search])

  return (
    <div>
       <Header />
       {loading ? (<Loader />) :
       (<div className="home">
        <Posts posts={posts} />
       {mobile ? null : <Sidebar />}
       </div>)}
       <div className="buttonWrapper" onClick={handleToggleSidebar}>
        {toggleSidebar && mobile && <Sidebar />}
       {mobile && <FloatingButton  toggleSidebar={toggleSidebar} />}
       </div>
    </div>
  )
}
