import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import {library} from './top100.js'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const Home = () => {

return(
  <>
  <Tabs defaultActiveKey="2" centered>
   <TabPane
     tab={
       <span>

        FAVORITES
       </span>
     }
     key="1"
   >

   <h1 className="featuredTitle">
   List of Favorites
 </h1>


     <div className="albums">
       {
         library.map(album => (
           <Link to="/album" state={album} className="albumSelection">
             <img  src={album.image}
               alt="bull"
                style={{width: "250px", marginBottom:"10px"}}

               />
              <p>{album.title}</p>
           </Link>

         ))
       }
     </div>
   </TabPane>

   <TabPane
     tab={
       <span>

         NEW MUSIC
       </span>
     }
     key="2"
   >
     Fresh New Music
   </TabPane>

   <TabPane
     tab={
       <span>

         PODCASTS
       </span>
     }
     key="3"
   >
     All Podcasts
   </TabPane>
 </Tabs>
  </>
)
}

export default Home;
