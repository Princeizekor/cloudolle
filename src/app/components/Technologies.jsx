'use client'
import React from 'react'
import { styled } from 'styled-components'
function Technologies() {
  const Text = `In an industry that often falls short of its promises, We delivers. Building on the success of hundreds of projects delivered to over 100 customers, we create dramatic shifts in the way people work and how organisations operate.`
  const img = '/images/coolicon.png'
  const Data = [
    {
      id: 1,
      img: '/images/BG_Whitepc.png',
      title: 'Tech',
      content: 'Microsoft Dynamics 365',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    },
    {
      id: 2,
      img: '/images/BG_Whiteamazon.png',
      title: 'Tech',
      content: 'AWS Data Solutions',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    },
    {
      id: 3,
      img: '/images/BG_Whitepro.png',
      title: 'Tech',
      content: 'Azure Cloud',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    },
    {
      id: 4,
      img: '/images/BG_Whitecompute.png',
      title: 'Tech',
      content: 'Solver CPM',
      arrow: '/images/coolicons.png',
      more: 'Learn more',
      blur: '/images/BG_Whiteblur.png'
    }
  ]
  return (
    <Wrapper>
      <div className="wrapper">
      <div className='headText'>
        <h1>Technologies</h1>
        <p className='headText2'>{Text}</p>
      </div>
      <button className='btn'>See more <img src={img} alt="arrow" /></button>
      <div className='cards'>
        <img src="/images/cooliconcback.png" alt="arrow-back" className='arrow' />
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
        <img src="/images/cooliconcircle.png" alt="arrow-forward" className='arrow' />
      </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
width: 100%;
background: #39C;
  .wrapper {
    max-width: 1440px;
  margin: 0% auto;
  height: auto;
  padding: 50px 100px;
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
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  line-height: 160%;
}

.btn {
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
  align-items: center;
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

.arrow {
  width: 28px;
  height: 28px;
}
@media (max-width: 1023px) {
  .wrapper {
    padding: 30px;
  }

.headText {
  width: 70%;
}

.btn {
  margin-top: 40px;
}

.cards {
  width: 100%;
}
}
@media (max-width: 767px) {
  .headText {
    width: 100%;
  }

  .btn {
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
  
.arrow {
  display: none;
}
}
`

export default Technologies
