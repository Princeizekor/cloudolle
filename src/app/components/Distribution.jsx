'use client'
import React from 'react'
import { styled } from 'styled-components'

function Distribution() {
    const Text1 = `We believe that IT projects should not be viewed as risky.
    To eliminate this perception, we make two guarantees to our clients:`
    const Text2 = `We act ethically and responsibly.`
    const Text3 = `Our team is dedicated to ensuring the success of your organization. By utilizing a combination of proven methods and technologies, as well as a tailored approach, we provide comprehensive support for your digital transformation initiatives.`
    const Text4 = `We handle the distribution.`
    const Text5 = `We tailor our methodology to fit your unique requirements, with a strong emphasis on establishing a solid foundation. By continuously experimenting with new delivery techniques, we strive to constantly enhance the quality of our service.`
    return (
        <Wrapper>
            <div className="wrapper">
            <h2 className='text1'>{Text1}</h2>
            <div className='TextWrap'>
            <h1 className='text2'>{Text2}</h1>
            <p className='text3'>{Text3}</p>
            <button className='btn'>More about us</button>
            </div>
            <div className='TextWrap'>
                <h1 className='text2'>{Text4}</h1>
                <p className='text3'>{Text5}</p>
            </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div `
width: 100%;
background-color: black;
    .wrapper {
      max-width: 1440px;
    margin: 0% auto;
    justify-content: space-between;
    align-items: center;
    padding: 100px;
    height: 600px;
    display: flex;
    }

.text1 {
    color: #FFF;
    font-size: 25px;
    font-style: normal;
    width: 280px;
    font-weight: 500;
    line-height: 178%;
}

.TextWrap {
    width: 300px;
}

.text2 {
    color: #FFF;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
}

.text3 {
    color: #FFF;
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;
}

.btn {
    color: #FFF;
    margin-top: 50px;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
@media (max-width: 1023px) {
    .wrapper {
      height: auto;
    padding: 30px;
    }

    .text1 {
      font-size: 22px;
    }

    .text2 {
      font-size: 32px;
    }

    .text3 {
      font-size: 13px;
    }

    .btn {
      margin-top: 40px;
    }
}
@media (max-width: 767px) {
    .text1 {
      font-size: 20px;
      width: 100%;
    }

    .TextWrap {
      width: 100%;
      text-align: center;
    }

    .text2 {
      font-size: 25px;
    }

    .text3 {
      font-size: 12px;
    }

    .btn {
      margin-top: 30px;
    }
  }
  @media (max-width: 560px) {
    .wrapper {
      flex-direction: column;
    }
    .text1 {
      font-size: 20px;
    }

    .text3 {
      font-size: 15px;
    }

    .btn {
      margin-top: 20px;
    }
  }

`

export default Distribution
