import "./singlepost.css"
import img2 from "../../img/2.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={img2} alt="" className="singlePostImg" />
       <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Ladalo</b></span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="SinglePostDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ad autem ab corporis consectetur adipisci aut, exercitationem praesentium quaerat rerum ipsam hic. Ipsam earum ut saepe, magnam voluptatibus harum aut?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto pariatur, adipisci illo debitis libero laborum dolor velit praesentium placeat reprehenderit, numquam odio repellendus voluptate repellat asperiores eveniet id consequuntur maxime.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ad autem ab corporis consectetur adipisci aut, exercitationem praesentium quaerat rerum ipsam hic. Ipsam earum ut saepe, magnam voluptatibus harum aut?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto pariatur, adipisci illo debitis libero laborum dolor velit praesentium placeat reprehenderit, numquam odio repellendus voluptate repellat asperiores eveniet id consequuntur maxime.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ad autem ab corporis consectetur adipisci aut, exercitationem praesentium quaerat rerum ipsam hic. Ipsam earum ut saepe, magnam voluptatibus harum aut?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto pariatur, adipisci illo debitis libero laborum dolor velit praesentium placeat reprehenderit, numquam odio repellendus voluptate repellat asperiores eveniet id consequuntur maxime.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ad autem ab corporis consectetur adipisci aut, exercitationem praesentium quaerat rerum ipsam hic. Ipsam earum ut saepe, magnam voluptatibus harum aut?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto pariatur, adipisci illo debitis libero laborum dolor velit praesentium placeat reprehenderit, numquam odio repellendus voluptate repellat asperiores eveniet id consequuntur maxime.
      </p>
     </div>
    </div>
  )
}
