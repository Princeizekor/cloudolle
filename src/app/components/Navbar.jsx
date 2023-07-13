'use client'
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const Solution = {
    eGovernor: 'eGovernment',
    finance: 'Finance Transformation',
    customer: 'Customer Experience',
    manager: 'Managed Services',
    cloud: 'Cloud Engineering',
    data: 'Data & AI',
    application: 'Application Development',
    devOps: 'DevOps Automations',
  };
  const Tech = {
    overview: 'Overview',
    micro1: 'Microsoft Dynamics 365',
    micro2: 'Microsoft Power Platform',
    aws: 'AWS Data Solutions',
    azure1: 'Azure Cloud',
    azure2: 'Azure Data & AI',
    bus: 'Business Applications',
    oracle: 'Oracle EPM',
  };
  const Industry = {
    overview: 'Overview',
    public: 'Public Sector',
    health: 'Health & life sciences',
    high: 'High-growth tech',
    finance: 'Financial services',
    util: 'Utilities',
  };
  const img = '/images/Header Buttonnav.png'
  const [data, setData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [openDrops, setOpenDrops] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }
  const toggleDrop = () => {
    setOpen(!open);
    setOpenDrop(false);
    setOpenDrops(false);
    setData(true)
  }
  const toggleOpenDrop = () => {
    setOpenDrop(!openDrop);
    setOpen(false)
    setOpenDrops(false);
    setData(true)
  }
  const toggleOpenDrops = () => {
    setOpenDrops(!openDrops);
    setOpenDrop(false);
    setOpen(false)
    setData(true)
  }
  const handleScroll = () => {
    setIsOpen(false);
    setOpen(false);
    setOpenDrop(false);
    setOpenDrops(false);
    setData(false)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  return (
    <Wrapper>
      <img src='/images/Cloudolle logo.png' />
      <ul className={isOpen ? "buttons show" : "hide buttons"}>
        <li className='sol' >
          <p onClick={toggleDrop} style={open ? {color: '#39C'} : {color: 'black'}}>Solutions <img src={img} alt="button-down" /></p>
          <div className={open === true ? 'solutions display' : 'solutions none'}>
            <ul>
              <li>{Solution.eGovernor}</li>
              <li>{Solution.cloud}</li>
              <li>{Solution.finance}</li>
              <li>{Solution.data}</li>
            </ul>
            <ul>
              <li>{Solution.customer}</li>
              <li>{Solution.application}</li>
              <li>{Solution.manager}</li>
              <li>{Solution.devOps}</li>
            </ul>
          </div>
        </li>

        <li className='tech'>
          <p onClick={toggleOpenDrop} style={openDrop ? {color: '#39C'} : {color: 'black'}}>Technologies <img src={img} alt="button-down" /></p>
          <div className={openDrop === true ? 'technologies display' : 'technologies none'}>
            <ul>
              <li>{Tech.overview}</li>
              <li>{Tech.micro1}</li>
              <li>{Tech.micro2}</li>
              <li>{Tech.aws}</li>
            </ul>
            <ul>
              <li>{Tech.azure1}</li>
              <li>{Tech.azure2}</li>
              <li>{Tech.bus}</li>
              <li>{Tech.oracle}</li>
            </ul>
          </div>
        </li>
        <li className='indus'>
          <p onClick={toggleOpenDrops} style={openDrops ? {color: '#39C'} : {color: 'black'}}>Industries<img src={img} alt="button-down" /></p>
          <div className={openDrops === true ? 'industry display' : 'industry none'}>
            <ul>
              <li>{Industry.overview}</li>
              <li>{Industry.public}</li>
              <li>{Industry.health}</li>
            </ul>
            <ul>
              <li>{Industry.high}</li>
              <li>{Industry.finance}</li>
              <li>{Industry.util}</li>
            </ul>
          </div>
        </li>
        <li>Careers</li>
        <li>About Us</li>
      </ul>
      <FontAwesomeIcon icon={faBars} className="drop" onClick={toggleDropdown}/>
      <span onClick={handleScroll} className={data ? "body" : ""}></span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  top: 0%;
  position: sticky;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  background-color: #FFF;
  z-index: 100000000;
  .buttons {
    position: relative;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
  .indus,
  .tech,
  .sol {
    position: relative;
    display: flex;
    p {
      display: flex;
      z-index: 100000000;
      height: 30px;
      align-items: center;
      justify-content: center
    }
  }
  .industry,
.technologies,
  .solutions {
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 30px;
    top: 46px;
    left: 0px;
    width: 500px;
    height: 239px;
    flex-shrink: 0;
    background: #FFF;
    transition: 0.5s all ease;
    cursor: auto;
    border-top: 5px solid #39C;
    z-index: 1;
  }

  .display {
    opacity: 1;
    pointer-events: all;
    transition: 0.5s all ease;
  }

  .none {
    opacity: 0;
    pointer-events: none;
    transition: 0.5s all ease;
  }
  
  .industry {
    width: 385px;
    height: 200px;
  }
  .industry ul,
  .technologies ul,
  .solutions ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
    li {
      z-index: 100000000;
    }
    li:hover {
      color: black
    }
  }
  .industry li,
  .technologies li,
  .solutions li {
    color: #39C;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  }
  .drop {
    color: #39C;
    width: 40px;
    height: 40px;
    display: none;
  }
  span {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    display: none;
  }
  .body {
    display: block;
  }
  @media (max-width: 900px) {
    .buttons {
      gap: 20px;
    }
  }
  @media (max-width: 767px) {
    height: 80px;
    padding: 20px;

    .buttons {
      position: absolute;
      top: 77px;
      left: 0%;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: unset;
      padding: 30px;
      background-color: #FFF;
      align-items: flex-start;
      transition: 0.5s all ease;
      display: none;
    }
    .show {
      display: flex;
    }
    .hide {
      display: none;
    }
    .industry,
    .technologies,
    .solutions {
      position: absolute;
      padding: 30px;
      border: none;
      pointer-events: none;
      height: 0;
      overflow: hidden;
    }
    
    .display {
      position: static;
      pointer-events: all;
      height: auto;
      border-top: 6px solid #39c;
      margin-top: 30px;
      margin-left: -90px;
    }
    .industry,
    .solutions {
      margin-left: -90px;
    }
    .technologies {
      margin-left: -120px;
    }
    .none {
      height: 0px;
      top: 30px;
      left: 0px;
    }
    .drop {
      display: block;
    }
  }

@media (max-width: 600px) {
  .buttons {
    top: 75px;
  }
  .industry,
    .technologies,
    .solutions {
      grid-template-columns: 1fr;
    }
}
`;

export default Navbar;