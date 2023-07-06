'use client'
import React, { useState } from 'react'
import { styled } from 'styled-components'

function Header() {
    const [data, setData] = useState(1)
    const Data = [
        {
            id: 1,
            img: '/images/Rectangle 20.png',
            details: `For years, organisations across the world have faced challenges with delivering on their promises.
            We brings a new approach to deliver on your promises. Our unique project delivery framework ensures that every customer's needs are met at every stage of the project lifecycle. With this approach, we can help organisations create dramatic shifts in their business and achieve exponential growth.`,
            title: `Paving the way for the future of Business.`,
        },
        {
            id: 2,
            img: '/images/Rectangle 188.png',
            details: `CloudOlle uses a variety of strategies to help organizations, including focusing on customer experience, adopting agile methodologies, building a culture of innovation, embracing sustainability, and embracing emerging technologies. These strategies help CloudOlle deliver high-quality services that meet its clients' unique needs and enable them to stay ahead of the competition. By combining these approaches, CloudOlle helps its clients succeed in today's fast-paced and ever-changing business environment.`,
            title: `Helping businesses innovate and adapt to stay ahead of the curve.`,
        },
        {
            id: 3,
            img: '/images/Rectangle 202.png',
            details: `CloudOlle empowers organizations to stay ahead of emerging trends and technologies through cloud migration, hosting, and management services, partnerships with leading technology providers, and a team of experts who stay up-to-date with the latest developments.
            Additionally, CloudOlle offers training programs to help organizations upskill their teams and stay competitive in the ever-evolving technology landscape.`,
            title: `Staying on top of emerging trends and technologies`,
        },
    ]
    const filteredData = Data.filter(item => item.id === data);

    const handleClick = () => {
        data === 3 ? setData(1) : setData(data + 1)
    }
    const handlePrev = () => {
        setData(1)
    }
    const handleMiddle = () => {
        setData(2)
    }
    const handleNext = () => {
        setData(3)
    }

    setTimeout(() => {
        handleClick()
    }, 5000);
    return (
        <Wrapper>
            <div className="wrapper">
            {
                filteredData.map((item, i) =>
                    <div className="slide-wrapper" style={{ backgroundImage: `url('${item.img}')` }} key={i}>
                        <p className='title'>{item.title}</p>
                        <p className='detail'>{item.details}</p>
                        <div>
                        <button onClick={handlePrev}></button>
                        <button onClick={handleMiddle}></button>
                        <button onClick={handleNext}></button>
                        </div>
                    </div>
                )
            }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
background-color: black;
            .wrapper {
                height: 700px;
            max-width: 1440px;
            margin: 0% auto;
            }
        .slide-wrapper {
            position: relative;
            width: 100%;
            height: 700px;
            display: flex;
            padding: 0px 310px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-size: cover;
            // transition: 5s all ease;
        }
        .title {
            color: #FFF;
            margin-bottom: 30px;
            text-align: center;
            font-size: 65px;
            font-style: normal;
            font-weight: 500;
            line-height: 110%;
        }
        .detail {
            color: #FFF;
            text-align: center;
            font-size: 12px;
            font-style: normal;
            font-weight: 300;
            line-height: 27px;
        }

        .slide-wrapper div {
            position: absolute;
            display: flex;
            width: 150px;
            justify-content: space-between;
            align-items: center;
            bottom: 50px;
        }

        .slide-wrapper div button {
            width: 15px;
            height: 15px;
            background-color: white;
            border-radius: 50%;
        }
        @media (max-width: 1023px) {
            .wrapper {
                height: 50vh;
            width: 100%;
            margin: 0%;
            }
        .slide-wrapper {
            height: 50vh;
            padding: 0px 150px;
        }
        .title {
            margin-bottom: 30px;
            font-size: 35px;
            font-weight: 300;
            line-height: 100%;
        }
        .detail {
            line-height: 20px;
        }

        .slide-wrapper div {
            width: 100px;
            bottom: 20px;
        }
        }
        @media (max-width: 767px) {
            .wrapper {
                height: 300px;
            }
        .slide-wrapper {
            height: 300px;
            padding: 0px 50px;
        }
        @media (max-width: 560px) {
            .slide-wrapper {
                padding: 0px 30px;
            }
        .title {
            margin-bottom: 20px;
            font-size: 30px;
        }
        .detail {
            font-size: 10px;
        }
        }
`

export default Header
