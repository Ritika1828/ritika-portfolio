import React, { useEffect } from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import OwnerImage from '../../images/ritikaImg.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import MyTypeWriter from '../TypeWriter';

function HeroSection() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer >
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                {/* <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                /> */}
                <MyTypeWriter words={Bio.roles}/>
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">

            <Img src={OwnerImage} alt="owner-image" />
          </HeroRightContainer>
        </HeroInnerContainer>

      </HeroContainer>
    </div>
  )
}

export default HeroSection