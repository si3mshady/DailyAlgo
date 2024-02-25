import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import {Layout} from 'antd'
import DC_LOGO from './images/DC_Comics_logo.png'
import {SearchOutlined, DownCircleOutlined} from '@ant-design/icons'


const {Footer, Sider, Content} = Layout;

const App = () => {
  return(

    <Layout>
       <Sider className="sideBar" width={300}>
         <img src={DC_LOGO} style={{width: "150px",marginBottom: "20px"}} />
         <div className="searchBar">
           <span style={{color: "whiteSmoke", fontSize: "1.8rem"}}> Search </span>
           <SearchOutlined style={{ fontSize: "31px",fontSize: "2.8rem" , color: "whiteSmoke"}} />

         </div>
           <Link to="/">
             <p style={{ color: "green"}}> Home </p>
           </Link>

           <Link to="/">
             <p style={{ color: "green"}}> Your Music </p>
           </Link>
           <div className="recentPlayed">

             <p className="recentTitle">Recently Played</p>

             <div className="install">
               <span>Install App</span>
               <DownCircleOutlined style={{ fontSize: "30px"}} />
             </div>


           </div>
       </Sider>
       <Content className="contentWindow">
           <Routes>
             <Route exact path="/" element={<Home />} />
             <Route path="/album" element={<Album />} />
           </Routes>
         </Content>
     </Layout>



  )
};

export default App;
