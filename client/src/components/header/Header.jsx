import "./header.css"
import img7 from "../../img/img7.jpg"


export default function Header() {
  return (
    <div className="header">
     <div className="headerTitles">
        <span className="headerTitleSm">Latest</span>
        <span className="headerTitleLg">UPdate!</span>
     </div>
     <img className="headerImg" src={img7} alt="" />
    </div>
  )
}
