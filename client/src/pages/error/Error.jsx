import "./error.css"
import { NavLink, useRouteError } from "react-router-dom"
import tech from "../../img/tech.jpg"

export default function Error() {

    const goBack = () => {
       window.history.back();
    }
  return (
    <div id="error-page" className="errorPage">
       <i className=" errorIcon fa-solid fa-triangle-exclamation"></i>
       <h1>Oops! Working on the Page...</h1>
       <img className="tech" src={tech} alt="" />
       <button className=' errorButton' onClick={goBack}>Back</button>
       <div className="container">
          <div className="child">LADALO</div>
       </div>
    </div>
  )
}



//  function Err() {
//   const error = useRouteError()

//   return(
//     <div>
//       <p>
//       <i>{error.statusText || error.message}</i>
//       </p>
//     </div>
//   )
// }
