import "./footer.css"

export default function Footer() {
  return (
    <div className='bottom'>
    <div className="topLeft">
    <i className="topIcon fa-brands fa-square-facebook"></i>
    <i className="topIcon fa-brands fa-square-twitter"></i>
    <i className="topIcon fa-brands fa-square-pinterest"></i>
    <i className="topIcon fa-brands fa-square-instagram"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className=' topListItem'>News</li>
        <li className=' topListItem'>Trending</li>
        <li className=' topListItem'>Hot</li>
        <li className=' topListItem'>Live</li>
        <li className=' topListItem'>Share</li>
      </ul>
    </div>
    <div className="topRight">
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  </div>
  )
}
