import React from 'react'
import { styled } from 'styled-components'

function Companies() {
    const Data = [
        {
            id: 1,
            img: '/images/Company1.png'
        },
        {
            id: 2,
            img: '/images/Company2.png'
        },
        {
            id: 3,
            img: '/images/Company3.png'
        },
        {
            id: 4,
            img: '/images/Company4.png'
        },
        {
            id: 5,
            img: '/images/Company5.png'
        },
        {
            id: 6,
            img: '/images/Company6.png'
        },
        {
            id: 7,
            img: '/images/Company7.png'
        },
        {
            id: 8,
            img: '/images/Company8.png'
        },
        {
            id: 9,
            img: '/images/Company9.png'
        },
        {
            id: 10,
            img: '/images/Company10.png'
        },
        {
            id: 11,
            img: '/images/Company11.png'
        },
        {
            id: 12,
            img: '/images/Company12.png'
        },
        {
            id: 13,
            img: '/images/Company13.png'
        },
        {
            id: 14,
            img: '/images/Company14.png'
        },
        {
            id: 15,
            img: '/images/Company15.png'
        },
        {
            id: 16,
            img: '/images/Company16.png'
        },
        {
            id: 17,
            img: '/images/Company17.png'
        },
    ]
    return (
        <Wrapper>
            <h1 className='title'>Companies we’ve worked with</h1>
            <div className='wrapper'>
                {
                    Data.map((item, i) => 
                    <img src={item.img} alt="logo" key={i}/>
                    )
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0% auto;
    height: 660px;
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;

    .title {
        color: #0078D4;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 96.52%;
    }

    .wrapper {
        margin: 0% auto;
        margin-top: 100px;
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 1023px) {
        width: 100%;
        height: auto;
        padding: 30px;
        .title {
          font-size: 40px;
        }
    
        .wrapper {
          margin-top: 80px;
        }
      }

    @media (max-width: 767px) {
        .title {
          font-size: 36px;
        }
    
        .wrapper {
          margin-top: 30px;
        }
      }
      @media (max-width: 560px) {
        .title {
          font-size: 32px;
        }
    
        .wrapper {
          margin-top: 60px;
        }
      }
`

export default Companies
