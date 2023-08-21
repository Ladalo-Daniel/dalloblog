import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import Loader from "../../components/loader/Loader"
import { useEffect, useState } from "react"
import Register from "../register/Register"

export default function Home() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
       <Header />
       {loading ? (<Loader />) :
       (<div className="home">
        <Posts />
        <Sidebar />
       </div>)}
    </div>
  )
}
