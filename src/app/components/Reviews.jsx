'use client'
import React, { useState } from 'react'
import { styled } from 'styled-components'

function Reviews() {
    const [data, setData] = useState(1)
    const Data = [
        {
            id: 1,
            img: '/images/Company1.png',
            details: '“From a personal point of view, the app development has exceeded my expectations in terms of design and usability. The WSO team members are also praising [our custom mobile app] in terms of its design and the SharePoint backend.”',
            name: 'Hillton Dannis',
            comp: 'Capgemini',
        },
        {
            id: 2,
            img: '/images/Company12.png',
            details: `Cloudolle's digitized capabilities transformed our health and life sciences organization. With EHR integration, telemedicine platforms, and data analytics, we achieved improved patient care, streamlined workflows, and enhanced research outcomes. Highly recommended for leveraging digital solutions in healthcare.`,
            name: 'James Davidson',
            comp: 'RSM',
        },
        {
            id: 3,
            img: '/images/Company9.png',
            details: '“From a personal point of view, the app development has exceeded my expectations in terms of design and usability. The WSO team members are also praising [our custom mobile app] in terms of its design and the SharePoint backend.”',
            name: 'Mathew Paulson',
            comp: 'RSA',
        },
    ]

    const cooliconlack = '/images/cooliconblack.png'

    const filteredData = Data.filter(item => item.id === data);

    const handleNext = () => {
      data == 3 ? setData(1) : setData(data + 1)
    }

    const handlePrev = () => {
      data == 1 ? setData(3) : setData(data - 1)
    }
    
    return (
        <Wrapper>
            <div className="all">
            <div className="wrapper">
                <div className="content1">
                    <h1 className='client-text'>See what our clients say about us, drawing from our experience and impact.</h1>
                    <button className="client-success">Read client success stories <img src={cooliconlack} alt="cooliconlack" /></button>
                </div>
                <div className="content2">
                <img src="/images/cooliconabblue.png" onClick={handlePrev} alt="Previous" className='arrow'/>
                    {
                        filteredData.map((item, i) => 
                        <div className="slide-wrapper" key={i}>
                            <img src={item.img} alt="slide-image" />
                            <p className='review'>{item.details}</p>
                            <p className='name'>{item.name}</p>
                            <p className='comp'>{item.comp}</p>
                        </div>
                        )
                    }
                    <img src="/images/cooliconafblue.png" onClick={handleNext} alt="Previous" className='arrow'/>
                </div>
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
background: #F5FCFF;
    .all {
      max-width: 1440px;
    margin: 0% auto;
    height: auto;
    flex-shrink: 0;
    padding: 50px 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .wrapper {
        margin: 0% auto;
        width: 1000px;
        height: 400px;
        display: flex;
    }

    .content1 {
        width: 40%;
        height: 100%;
        padding: 20px 0px;
        display: flex;
        flex-direction: column;
    }
    .client-text {
        color: #DF650D;
        margin-bottom: 50px;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
    }

    .client-success {
        color: #000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 250px;
        // border-bottom: 2px solid black;
    }

    .content2 {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .arrow {
        width: 28px;
        height: 28px;
    }

    .slide-wrapper {
        padding: 50px;
        transition: 1s all ease;
    }

    .slide-wrapper img {
        margin-bottom: 35px;
    }

    .review {
        color: #000;
        transition: 1s all ease;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%;
    }

    .name {
        margin-top: 30px;
        color: #39C;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .comp {
        margin-top: 20px;
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    @media (max-width: 1023px) {
        
        .all {
          width: 100%;
        padding: 40px;
        flex-direction: column;
        justify-content: flex-start;
        height: auto;
        }
    
        .wrapper {
            width: 100%;
          flex-direction: column;
          height: auto;
          align-items: center;
        }
    
        .content1 {
          width: 100%;
          padding: 0;
          margin-bottom: 40px;
        }
    
        .content2 {
          width: 100%;
          padding: 0;
          justify-content: center;
        }
      }

      @media (max-width: 767px) {
        .all {
          padding: 30px;
        }
    
        .content1 {
          margin-bottom: 30px;
          text-align: center;
        }
    
        .content2 {
          justify-content: center;
        }
      }
      @media (max-width: 560px) {
        .all {
          padding: 20px;
        }
    
        .content1 {
          margin-bottom: 20px;
        }
    
        .client-text {
          font-size: 24px;
          margin-bottom: 30px;
        }
    
        .client-success {
          width: 250px;
        }
    
        .slide-wrapper {
          width: 100%;
          padding: 30px;
        }
    
        .review {
          font-size: 18px;
          line-height: 130%;
        }
    
        .name {
          margin-top: 20px;
          font-size: 16px;
        }
    
        .comp {
          margin-top: 15px;
          font-size: 16px;
        }
      }
    
`

export default Reviews