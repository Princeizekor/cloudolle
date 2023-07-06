'use client'
import React from 'react'
import { styled } from 'styled-components'

function Contact() {
    const Text = `Let us bring about a significant effect for your company.`
  return (
    <Wrapper>
      <div className='content'>
        {Text}
        <button>Contact Us</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
  background-color: white;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

.content {
  position: relative;
  margin: 0% auto;
  max-width: 1000px;
  padding: 80px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: #FFF;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.content button {
  position: absolute;
  margin: 0% auto;
  bottom: -50px;
  width: 250px;
  height: 100px;
  flex-shrink: 0;
  color: #FFF;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: #39C;
}
@media (max-width: 1023px) {
  height: 350px;
  .content {
    padding: 60px;
    font-size: 40px;
    height: auto;
  }

  .content button {
    width: 200px;
    height: 80px;
    font-size: 25px;
    bottom: -40px;
  }
}

@media (max-width: 767px) {
  height: 300px;
  .content {
    padding: 40px;
    font-size: 30px;
  }

  .content button {
    width: 150px;
    height: 60px;
    font-size: 20px;
    bottom: -30px;
  }
}

@media (max-width: 560px) {
  height: 250px;
  .content {
    height: 150px;
    padding: 20px;
    font-size: 20px;
    justify-content: center;
  }

  .content button {
    width: 120px;
    height: 50px;
    font-size: 16px;
    bottom: -25px;
  }
}
`

export default Contact
