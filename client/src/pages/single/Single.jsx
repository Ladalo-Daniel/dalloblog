import { useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlepost/SinglePost"
import "./single.css"

export default function Single() {
  const [mobile, setMobile] = useState(false)
  
  return (
    <div className="single">
      <SinglePost />
      {/* <Sidebar /> */}
    </div>
  )
}
