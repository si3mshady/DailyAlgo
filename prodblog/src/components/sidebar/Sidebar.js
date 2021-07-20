import './sidebar.css'

export default function Sidebar() {
    const imgUrl = "https://static.metacritic.com/images/products/movies/9/527182c55c79758fafe05160ee80f6fb.jpg"

    return (
        
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img alt="blank" src={imgUrl}></img>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATGEORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
                
           

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    
                    <i class="sidebarIcon fab fa-facebook"></i>
                    <i class="sidebarIcon fab fa-twitter"></i>
                    <i class="sidebarIcon fab fa-instagram"></i>
                </div>
                
            </div>


            </div>
            
        </div>
    )
}
