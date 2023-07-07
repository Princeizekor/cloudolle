"use client"
import React from "react";
import { styled } from "styled-components";

function Service() {
  const Data = [
    {
      id: 1,
      img: '/images/BG_White.png',
      title: "Cloud Engineering",
    },
    {
      id: 2,
      img: '/images/BG_White (1).png',
      title: "Data & AI Solutions",
    },
    {
      id: 3,
      img: '/images/BG_White (2).png',
      title: "DevOps Automation",
    },
    {
      id: 4,
      img: '/images/BG_White (3).png',
      title: "Application Development",
    },
    {
      id: 5,
      img: '/images/BG_White (4).png',
      title: "Managed Services",
    },
    {
      id: 6,
      img: '/images/BG_White (5).png',
      title: "eGovernment",
    },
    {
      id: 7,
      img: '/images/BG_White (6).png',
      title: "Finance Transformation",
    },
    {
      id: 8,
      img: '/images/BG_White (7).png',
      title: "Customer Experience",
    },
  ];
  const Text = `In a field where commitments are often unfulfilled, we deliver results.
With a proven track record of success, including the completion of numerous projects for over 100 clients, we bring about significant changes in both workforce dynamics and business operations.`
  return (
    <Wrapper>
      <Wrapper2>
        <h1>Our Services</h1>
        <p>{Text}</p>
      </Wrapper2>
      <Services>
        {Data.map((item, i) => (
          <div key={i}>
            <section>
              <img src={item.img} alt="service-image" />
            </section>
            <p>{item.title}</p>
            <button className="colors">
              <span className="brown"></span>
              <span className="red"></span>
              <span className="yellow"></span>
            </button>
            <img src="/images/coolicons.png" alt="arrow" className="arrow" />
          </div>
        ))}
      </Services>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  max-width: 1440px;
  margin: 0% auto;
  padding: 50px;
  @media (max-width: 1023px) {
    height: auto;
  }
`

const Wrapper2 = styled.div`
  max-width: 689px;
  margin: 0% auto;
  text-align: center;
  h1 {
    color: #0078d4;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 96.52%;
    margin-bottom: 20px;
  }
  p {
    color: #2b2d42;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
  }
  @media (max-width: 1023px) {
    width: 100%;
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 15px;
    line-height: 20px;
  }
  }
`;
const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  max-width: 1440px;
  // margin: 70px auto 0;
  padding: 50px;
 div {
    position: relative;
    transition: 0.5s all ease;
    height: 100%;
    box-shadow: 0px -2px 20px 2px rgba(0, 0, 0, 0.4);
  section {
    transition: 0.5s all ease;
    background: linear-gradient(
      0deg,
      rgba(51, 153, 204, 0.7) 0%,
      rgba(51, 153, 204, 0.7) 100%
    );
    height: 240px;
    
    img {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: 0.5s all ease;
    }
  }
  p {
    color: #2b2d42;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    padding: 15px 40px 30px 20px;
    transition: 0.5s all ease;
  }
  &:hover {
      background: url("./images/BG_Whitecover.png");
      background-size: cover;
  }
  &:hover section img {
      position: absolute;
      height: 100%;
    opacity: 0;
  }
  &:hover section {
    background: linear-gradient(
        0deg,
        rgba(51, 153, 204, 0.7) 0%,
        rgba(51, 153, 204, 0.7) 100%
      );
      overflow: hidden;
      bottom: 0%;
    height: 100%;
  }
  &:hover p {
    transform: translateY(-180px);
    color: #FFF;
  }
  &:hover .colors {
    display: none;
  }
 }

 .colors {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  padding: 0px 0px 15px 20px;
  border: none;
  background: transparent;
  position: absolute;
  bottom: 0;
  transition: 0.5s all ease;
  span {
    width: 10px;
    height: 2.5px;
  }
  .brown {
    background: #8d99ae;
  }
  .red {
    background: #ff0071;
  }
  .yellow {
    background: #fff800;
  }
}

 .arrow {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0px 30px 30px 0px;
 }
 
  @media (max-width: 1023px) {
    gap: 30px;
    padding: 50px 0px;
  div {
  section {
    height: 150px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
  }
  }
  }
  @media (max-width: 767px) {
    grid-template-columns: 150px 150px 150px 150px;
  gap: 30px;
  // display: none;
  div {
  section {
  height: 100px;
  }
  p {
    font-size: 15px;
  }
  }
  .colors {
    width: 20%;
  }
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    div {
      width: 100%;
      height: 300px;
      background-position: center;
    section {
    height: 200px;
    background-position: center;
    }
    }
    }
`;

export default Service;
