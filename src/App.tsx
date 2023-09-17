import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className={"App"}>

            <ImgBox
                src={"https://www.figma.com/file/fidgvz4DVRJfpbtUvMz6LB/image/295b9b3e0cbd17e4381497547009ce81acc4eee3"}/>
            <Head>Headline</Head>
            <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
            <StyledBtn>See more</StyledBtn>
            <SuperBtn>Save</SuperBtn>

        </div>
    )
}

export default App;

const Paragraph = styled.p`
  width: 260px;
  color: #ABB3BA;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`

const Head = styled.h1`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`

const ImgBox = styled.img`
  width: 280px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 10px;

`

const StyledBtn = styled.button`
  border: none;
  border-radius: 5px;
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  background: #4E71FE;
`

const SuperBtn = styled.button`
  width: 86px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 2px solid #4E71FE;
`