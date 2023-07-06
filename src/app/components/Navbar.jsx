'use client'
import React, { useState } from 'react';
import { styled } from 'styled-components';

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
  const imgs = '/images/hamburger.png'
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDropdown =()=> {
    setIsOpen(!isOpen);
  }
  const toggleDrop =()=> {
    setOpen(!open);
  }
  return (
    <Wrapper>
      <img src='/images/Cloudolle logo.png'/>
      <ul className='buttons' style={!isOpen ? {height: 'auto', left: 0} : {left: '-100%', overflow: 'hidden'}}>
        <li className='sol' >
          <p onClick={toggleDrop}>Solutions</p>
          <div className='solutions' style={!open ? {height: 'auto', left: 0} : {height: '0%', left: '-100%', overflow: 'hidden'}}>
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
          Technologies
          <div className='technologies'style={!isOpen ? {height: 'auto', left: 0} : {left: '-100%', overflow: 'hidden'}}>
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
          Industries
          <div className='industry' style={!isOpen ? {height: 'auto', left: 0} : {left: '-100%', overflow: 'hidden'}}>
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
      <img src={imgs} alt="hamperbar" className="drop" onClick={toggleDropdown}/>
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
// img {
//   width: 80px;
//   height: 80px;
// }
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
  }
  .buttons li:hover {
    color: #39C;
  }
  .industry,
.technologies,
  .solutions {
    position: absolute;
    display: none;
    justify-content: space-between;
    padding: 30px;
    top: 55px;
    left: -200px;
    width: 500px;
    height: 239px;
    flex-shrink: 0;
    background: #FFF;
    border-top: 5px solid #39C;
  }
  .industry {
    width: 400px;
    height: 200px;
    left: -150px;
  }
  .indus:hover .industry,
  .tech:hover .technologies,
  .sol:hover .solutions {
    display: flex;
  }
  .industry ul,
  .technologies ul,
  .solutions ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
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
    display: none;
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
    }
    .indus,
    .tech,
    .sol {
      // display: none;
      img {
        display: none;
      }
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
  .industry,
    .technologies,
    .solutions {
      flex-direction: column;
    }
}
`;

export default Navbar;
