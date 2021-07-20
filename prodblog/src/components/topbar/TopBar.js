import './topbar.css'

export default function TopBar() {
   const imgUrl =  "https://cdn.vox-cdn.com/thumbor/K1WKyMb31K-K1vvseGAyFsjfYYE=/0x0:1200x675/1200x800/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg"

    return (
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook"></i>
                <i class="topIcon fab fa-twitter"></i>
                <i class="topIcon fab fa-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>

                </ul>
            </div>
            <div className='topRight'>
                <img className="topImage" src={imgUrl} alt="blank"/>
                <i class="topSearchIcon fas fa-search"></i>
            </div>            
        </div>
    )
}
// resume 12:43