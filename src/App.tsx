import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {Home} from "./Home";
import {Pagina1} from "./Pagina1";
import {Pagina2} from "./Pagina2";

const { SubMenu } = Menu;

function App() {
  return (
      <div className="main_cont">
      <Router>
        <Menu className='q'>
          <Menu.Item key="home" >
            <Link to="/Home">Pagina Principală</Link>
          </Menu.Item>
          <Menu.Item key="Pagina1" >
            <Link to="/Pagina1">Pagina 1</Link>
          </Menu.Item>
             <Menu.Item key="Pagina2" >
              <Link to="/Pagina2">Pagina 2</Link>
            </Menu.Item>
          
        </Menu>

        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Pagina1" element={<Pagina1 />} />
          <Route path="/Pagina2" element={<Pagina2 />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;