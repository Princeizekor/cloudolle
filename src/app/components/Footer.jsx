'use client'
import React from 'react'
import { styled } from 'styled-components'

function Footer() {
  const Solution = {
    solution: 'Solutions',
    eGovernor: 'eGovernment',
    finance: 'Finance Transformation',
    customer: 'Customer Experience',
    manager: 'Managed Services',
    cloud: 'Cloud Infrastructures',
    data: 'Data & AI',
    application: 'Application Modernisation',
    licence: 'MS Cloud Licencing',
  }
  const Tech = {
    tech: 'Technologies',
    micro1: 'Microsoft Dynamics 365',
    micro2: 'Microsoft Power Platform',
    micro3: 'Microsoft Dynamics 365 Business',
    micro4: 'Azure Cloud',
    micro5: 'Azure Data & AI',
    micro6: 'Microsoft Office 365',
    micro7: 'Solver CPM',
    micro8: 'Oracle EPM',
  }
  const Inovate = {
    inovate: 'Innovation Services',
    skill: 'Anyskills labs',
    client: 'Client Benefits',
    product: 'Products',
  }
  const About = {
    about: 'About Codec',
    who: 'Who We Are',
    team: 'Team',
    path: 'Partners',
    career: 'Careers',
    grad: 'Graduate Programme',
    contact: 'Contact Us',
  }
  const Resource = {
    resource: 'Resources',
    success: 'Client Success',
    blog: 'Blog',
    news: 'News & Events',
  }
  return (
    <Wrapper>
      <div className="all">
        <div className="wrapper">
          <div className="solution">
            <p className='top'>{Solution.solution}</p>
            <p>{Solution.eGovernor}</p>
            <p>{Solution.finance}</p>
            <p>{Solution.customer}</p>
            <p>{Solution.manager}</p>
            <p>{Solution.cloud}</p>
            <p>{Solution.data}</p>
            <p>{Solution.application}</p>
            <p>{Solution.licence}</p>
          </div>
          <div className="solution">
            <p className='top'>{Tech.tech}</p>
            <p>{Tech.micro1}</p>
            <p>{Tech.micro2}</p>
            <p>{Tech.micro3}</p>
            <p>{Tech.micro4}</p>
            <p>{Tech.micro5}</p>
            <p>{Tech.micro6}</p>
            <p>{Tech.micro7}</p>
            <p>{Tech.micro8}</p>
          </div>
          <div className="solution">
            <p className='top'>{Inovate.inovate}</p>
            <p>{Inovate.skill}</p>
            <p>{Inovate.client}</p>
            <p>{Inovate.product}</p>
          </div>
          <div className="solution">
            <p className='top'>{About.about}</p>
            <p>{About.who}</p>
            <p>{About.team}</p>
            <p>{About.path}</p>
            <p>{About.career}</p>
            <p>{About.grad}</p>
            <p>{About.contact}</p>
          </div>
          <div className="solution">
            <p className='top'>{Resource.resource}</p>
            <p>{Resource.success}</p>
            <p>{Resource.blog}</p>
            <p>{Resource.news}</p>
          </div>
        </div>
        <hr style={{marginTop: '50px',}}/>
        <div className="footer-icons">
          <img src="/images/Logofooter.png" alt="footer logo" />
          <img src="/images/socialssocial.png" alt="footer logo" />
          <p>© 2023 Cloudolle. All rights reserved. </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
background: #01162E;
.all {
  max-width: 1440px;
  margin: 0% auto;
      height: auto;
      padding: 50px 120px;
}
    .wrapper {
      display: inline-flex;
      align-items: flex-start;
      gap: 65px;
    }

    .top  {
      margin-bottom: 25px;
      color: #FFF;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 30.147px;
    }

    .solution {
      color: #FFF;
      font-size: 14px;
      font-style: normal;
      font-weight: 100;
      line-height: 30px;
    }

    .footer-icons {
      margin-top: 50px;
    }

    .footer-icons img {
      margin: 0% auto;
      margin-bottom: 30px;
    }

    .footer-icons p {
      color: #FFF;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 6.167px;
    }
    @media (max-width: 1023px) {
      .all {
        padding: 40px;
      }
    }
  
    @media (max-width: 767px) {
      .all {
        padding: 30px;
      }
  
      .wrapper {
        gap: 40px;
      }
  
      .top {
        font-size: 18px;
      }
  
      .solution {
        font-size: 12px;
      }
    }
  
    @media (max-width: 560px) {
      .all {
        padding: 20px;
      }
  
      .wrapper {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 30px;
      }
  
      .top {
        margin-bottom: 0px;
        font-size: 16px;
      }
  
      .solution {
        text-align: center;
        font-size: 11px;
      }
    }
  
`

export default Footer
