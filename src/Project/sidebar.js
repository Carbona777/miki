import React, { useEffect } from 'react';

import './Combined.css' // Import your CSS file
import 'boxicons';

 // Import your CSS file


import 'boxicons/css/boxicons.min.css'; // Import boxicons CSS
import  logo from './M.png';
function Sidebar() {
    useEffect(() => {
      const handleToggleClick = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('close');
      };
  
      const handleSearchClick = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('close');
      };
  
      const handleModeSwitchClick = () => {
        const body = document.querySelector('body');
        const modeText = document.querySelector('.mode-text');
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
          modeText.innerText = 'Light Mode';
        } else {
          modeText.innerText = 'Dark Mode';
        }
      };
  
      const toggle = document.querySelector('.toggle');
      const searchBtn = document.querySelector('.search-box');
      const modeSwitch = document.querySelector('.toggle-switch');
  
      toggle.addEventListener('click', handleToggleClick);
      searchBtn.addEventListener('click', handleSearchClick);
      modeSwitch.addEventListener('click', handleModeSwitchClick);
  
      return () => {
        toggle.removeEventListener('click', handleToggleClick);
        searchBtn.removeEventListener('click', handleSearchClick);
        modeSwitch.removeEventListener('click', handleModeSwitchClick);
      };
    }, []);
  
    return (
    <>
      <nav className="sidebar close">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="logo" />
            </span>
          </div>
          <i className="bx bx-chevron-right toggle"></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="search-box">
                <i className="bx bx-search-alt-2 icon"></i>
                <input type="text" placeholder="Search..." />
              </li>
              <li className="nav-links">
                <a href="/">
                  <i className="bx bx-home icon"></i>
                  <span className="text nav-text"> Home</span>
                </a>
              </li>
              <li className="nav-links">
                <a href="/">
                  <i className="bx bx-dumbbell icon"></i>
                  <span className="text nav-text"> WorkOut</span>
                </a>
              </li>
              <li className="nav-links">
                <a href="/">
                  <i className="bx bx-home icon"></i>
                  <span className="text nav-text"> Routine </span>
                </a>
              </li>
              <li className="nav-links">
                <a href="/">
                  <i className="bx bxs-calculator icon"></i>
                  <span className="text nav-text"> Tools </span>
                </a>
              </li>
              <li className="log-out">
                <a href="/">
                  <i className="bx bxs-log-out icon"></i>
                  <span className="text nav-text"> Logout </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <ul>
              <li className="log-in">
                <a href="/">
                  <i className="bx bxs-log-in icon"></i>
                  <span className="text nav-text"> Login </span>
                </a>
              </li>
              <li className="mode">
                <div className="moon-sun">
                  <i className="bx bx-moon icon moon"></i>
                  <i className="bx bx-sun icon sun"></i>
                </div>
                <span className="mode-text text"> Dark Mode</span>
                <div className="toggle-switch">
                  <span className="switch"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="Home">
        <div className="text">Dashboard</div>
      </section>
      
    </>
  );
}

export default Sidebar;
