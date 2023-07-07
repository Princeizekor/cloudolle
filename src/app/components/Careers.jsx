'use client'
import React from 'react'
import { styled } from 'styled-components'
function Careers() {
  const Text = `Just like we care about our clients, we also care about the people. We invest in our business success by making sure our employees are supported by a welcoming, diverse workplace that encourages a healthy work/life balance. Find out what it's like to work in cloudolle and take a look at some of our latest openings.`
  const img = '/images/coolicon.png'
  const Data = [
    {
      id: 1,
      img: '/images/card.png',
      title: 'Developments',
      content: 'Senior Dynamics 365 Consultant',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    },
    {
      id: 2,
      img: '/images/card2.png',
      title: 'HR & Admins',
      content: 'Admin Staff',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    },
    {
      id: 3,
      img: '/images/card5.png',
      title: 'Design',
      content: 'Product Design',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    },
    {
      id: 4,
      img: '/images/card4.png',
      title: 'Support',
      content: 'Support Engineer',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    },
    {
      id: 5,
      img: '/images/card3.png',
      title: 'Marketing',
      content: 'Social Media Marketing',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    }
  ]
  return (
    <Wrapper>
      <div className="wrapper">
        <div className='headText'>
          <h1>Careers at Cloudolle</h1>
          <p className='headText2'>{Text}</p>
        </div>
        <button>See more <img src={img} alt="arrow" /></button>
        <div className='cards'>
          {
            Data.map((item, i) =>
              <div style={{ backgroundImage: `url('${item.img}')` }} key={i} className='cardWrapper'>
                <div style={{ backgroundImage: `url('${item.blur}')` }} className='cover'>
                  <p>{item.more}</p>
                  <p>{item.content}</p>
                  <img src={item.arrow} alt="arrow-image" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <img src={item.arrow} alt="arrow-image" />
              </div>
            )
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
background: #39C;
.wrapper {
  max-width: 1440px;
  margin: 0% auto;
      height: auto;
      padding: 100px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
}

.headText {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    width: 65%;
}

.headText h1 {
    color: #FFF;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 97%;
}

.headText2 {
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
}

button {
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    margin-top: 50px;
    border-bottom: 1px solid white;
}

.cards {
    display: flex;
    width: 100%;
    margin-top: 50px;
    justify-content: space-between;
}

.cardWrapper {
    position: relative;
    width: 200px;
    height: 414px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 30px;
    background-size: cover;
}

.cards h2 {
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
}

.cards p {
    color: #FFF;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
}

.cover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    bottom: 0%;
    padding: 30px;
    opacity: 0%;
    transition: 1s all ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-size: cover;
}

.cover:hover {
    transition: 1s all ease;
    opacity: 100%;
}

.cover img {
    position: absolute;
    bottom: 50px;
}
@media (max-width: 1023px) {
    .wrapper {
      padding: 30px;
    height: auto;
    }
    .headText {
      width: 70%;
    }

    .headText h1 {
      font-size: 40px;
    }

    .headText2 {
      font-size: 16px;
    }

    button {
      margin-top: 40px;
    }

    .cardWrapper {
      width: 180px;
      height: 380px;
      background-size: center;
      background-position: center;
    }

    .cardWrapper h2 {
      font-size: 14px;
      line-height: 30px;
    }

    .cardWrapper p {
      font-size: 16px;
    }

    .cover {
      padding: 25px;
    }
  }
@media (max-width: 767px) {
    .wrapper {
      padding: 30px;
    }

    .headText {
      width: 100%;
    }

    .headText h1 {
      font-size: 35px;
    }

    .headText2 {
      font-size: 16px;
    }

    button {
      margin-top: 30px;
    }

    .cards {
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
      }

    .cardWrapper {
        width: 100%;
        max-width: 300px;
        margin-bottom: 30px;
        background-size: cover;
        border-radius: 15px;
        background-position: center;
      }
    
      .cover {
        background-position: center;
      }

    .cardWrapper h2 {
      font-size: 14px;
      line-height: 30px;
    }

    .cardWrapper p {
      font-size: 16px;
    }
  }

  @media (max-width: 560px) {
    .wrapper {
      padding: 30px;
    }

    .headText {
      width: 100%;
    }

    .headText h1 {
      font-size: 30px;
    }

    .headText2 {
      font-size: 14px;
    }

    button {
      margin-top: 20px;
    }

    .cardWrapper {
      width: 100%;
      height: 340px;
    }

    .cardWrapper h2 {
      font-size: 12px;
      line-height: 25px;
    }

    .cardWrapper p {
      font-size: 14px;
    }

    .cover {
      padding: 15px;
    }
  }
`

export default Careers
