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
          <p onClick={toggleDrop} style={open ? {color: '#39C'} : {color: 'black'}}>Solutions</p>
          <div className='solutions' style={open ? { display: 'flex', height: 'auto', left: 0 } : { height: '0%', left: '-100%', overflow: 'hidden' }}>
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
          <img src={img} alt="button-down" />
        </li>

        <li className='tech'>
          <p onClick={toggleOpenDrop} style={openDrop ? {color: '#39C'} : {color: 'black'}}>Technologies</p>
          <div className='technologies' style={openDrop ? { display: 'flex', height: 'auto', left: 0 } : { height: '0%', left: '-100%', overflow: 'hidden' }}>
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
          <img src={img} alt="button-down" />
        </li>
        <li className='indus'>
          <p onClick={toggleOpenDrops} style={openDrops ? {color: '#39C'} : {color: 'black'}}>Industries</p>
          <div className='industry' style={openDrops ? { display: 'flex', height: 'auto', left: 0 } : { height: '0%', left: '-100%', overflow: 'hidden' }}>
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
          <img src={img} alt="button-down" />
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
      z-index: 100000000;
    }
  }
  .industry,
.technologies,
  .solutions {
    position: absolute;
    display: none;
    justify-content: space-between;
    padding: 30px;
    top: 46px;
    left: -200px;
    width: 500px;
    height: 239px;
    flex-shrink: 0;
    background: #FFF;
    border-top: 5px solid #39C;
  }
  
  .industry {
    width: 385px;
    height: 200px;
    left: -150px;
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
    // z-index: -1;
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
      top: 80px;
      left: 0%;
      width: 100%;
      height: auto;
      flex-direction: column;
      padding: 30px;
      background-color: #FFF;
      align-items: flex-start;
      transition: 0.5s all ease;
      display: none;
    }
    .indus,
    .tech,
    .sol {
      img {
        display: none;
      }
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
      position: static;
      width: auto;
      height: auto;
      gap: 30px;
      margin-top: 20px;
      padding: 20px;
      border-top: none;
    }
    .industry {
      width: 100%;
      height: auto;
      left: auto;
    }
    .indus:hover .industry,
    .tech:hover .technologies,
    .sol:hover .solutions {
      // display: none;
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
      flex-direction: column;
    }
}
`;

export default Navbar;
