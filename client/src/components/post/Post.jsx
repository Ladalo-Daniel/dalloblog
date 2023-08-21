import "./post.css"
import img1 from "../../img/1.jpg"


export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={img1} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolor quis perspiciatis harum unde, ducimus, nostrum soluta modi obcaecati adipisci minima consequuntur consectetur pariatur, maxime accusamus provident nulla non at.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolor quis perspiciatis harum unde, ducimus, nostrum soluta modi obcaecati adipisci minima consequuntur consectetur pariatur, maxime accusamus provident nulla non at.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolor quis perspiciatis harum unde, ducimus, nostrum soluta modi obcaecati adipisci minima consequuntur consectetur pariatur, maxime accusamus provident nulla non at.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolor quis perspiciatis harum unde, ducimus, nostrum soluta modi obcaecati adipisci minima consequuntur consectetur pariatur, maxime accusamus provident nulla non at.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos dolor quis perspiciatis harum unde, ducimus, nostrum soluta modi obcaecati adipisci minima consequuntur consectetur pariatur, maxime accusamus provident nulla non at.
        </p>
    </div>
  )
}
