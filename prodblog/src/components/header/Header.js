import "./header.css"
import spaceJam from "../../images/purpleSpace.jpeg"

export default function Header() {
    // const imgUrl = "https://wallpapercave.com/wp/wp2601899.jpg"
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTilesSm">si3mshady</span>
                <span  className="headerTilesLg" >Blog</span>                 
                </div> 
            <img className="headerImage"  alt=""src={spaceJam}/>
            </div>
    )
}
