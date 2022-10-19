import React from 'react';
import { FaGithub, FaMailBulk, FaTwitter, FaLinkedin } from "react-icons/fa";
import './main.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const Main = () => {
  /*return (
    <div> 

      <Parallax page={1}>
        <ParallaxLayer>
          <div className="title">Kirill Rybkov</div>
          <div className="text">
              <span className="font-link">
              <p>&nbsp; Born in Siberian part of Russia. I'm living & studying in Barcelona, Spain. Capitalist and atheist, though I do believe in the <b>Universe.</b> I'm a geek (at least how I classify myself) with soldering iron in teeth, having ~2 years coding experience in hands and the same amount of self-development in conscious and subconscious minds. A lot of creativity and imagination is added and well mixed. Love dreaming about the future of the humankind and space. I believe my mission is to hugely advance and expand the human race, as well as make a revolution.</p>
              <p>&nbsp; Now working in web3 & blockchain space after working in game dev for a year. Built a lot of cool stuff during hackathons and bounty hunting marathons. I do believe that blockchain is the future of more sustainable capitalism without corruption, crimes and stupid policies that will one day help the humans to expand in supercalifragilisticexpialidocious way.</p>
              <p>&nbsp; I prefer working as a back-end developer, however I can do front-end so I guess I'm full-stack.</p>
              </span>
          </div>
            <div className='icons'>
              < FaGithub />
              < FaMailBulk />
              < FaTwitter />
              < FaLinkedin />
            </div>
          <div className='image'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <div className="title2">Projects</div>
          <div className="text2">
              <span className="font-link2">
              <p>&nbsp; Wood System using RAGE:MP API A system for sale. Uses JS on front-end and C# on server-side. Built while working in GTA5 game dev. https://ragemp.pro/threads/prodazha-v2-sistema-rubki-dereva-dlja-redage-1-1-wood-system.3292/</p>
              <p>&nbsp; The Loan Stream A DeFi protocol which allows DAOs with large treasuries & other DeFi users to collateralize their treasuries, and take out loans in the form of streams. Built during ‘The Road to Web3’ hackathon. https://showcase.ethglobal.com/roadtoweb3/the-loan-stream</p>
              <p>&nbsp; With NewEnvAI people can freely mint dynamic animal NFTs which represent real environmental data. The uniqueness of this project is determined by the usage of DALL-E neural network which allows users to create any images by just writing a description of it (e.g. bear in river)! There are 3 stages of NFTs: 'bad', 'neutral' and 'good' that will change accordingly to the data provided by an oracle from environmental API. Built during ‘Sustainable Blockchain Hackathon 2022’. https://github.com/Kirillr-Sibirski/newEnvAI</p>
              <p>&nbsp; A productivity dapp that will help users to have more conscious life. Increase concentration during work times or help relax more effectively by incentivizing users using awards such as completion NFTs and reward in native tokens. Built during ‘ETHOnline 2022’ hackathon. https://ethglobal.com/showcase/onmagellanic-vvk4q</p>
              <p>I’ve built a lot more projects but I think these are the most successful. More projects coming!</p>
              </span>
          </div>
          <div className='image-grid'>
            <img src="woodSystem.png" alt="architecture"></img>
            <img src="thels.png" alt="architecture"></img>
            <img src="newEnvAI.png" alt="architecture"></img>
            <img src="onMagellanic.png" alt="architecture"></img>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
            <div className="skills_title">Skills</div>
            <div className="skills_text">
                <span className="skills_font-link">
                <ul>
                  <li>Javascript - 2 years. Used in game dev, frontend and web3 smart contract integrations (Ethers.js).</li>
                  <li>HTML/CSS - 2 years. Classic, no frameworks. Created some websites on it.</li>
                  <li>Git - less than 2 years. How would I get anywhere without it?</li>
                  <li>Arduino & Raspberry Pi - more than 1 year. C++. More as a hobby. Didn’t really create any projects worth mentioning.</li>
                  <li>Python - more than 1 year. Used in smart contract integrations (Brownie) and writing simple programs.</li>
                  <li>Photoshop - 1 year. Created some preview pictures for YouTube channel.</li>
                  <li>C# - 1 year. Used in game dev (RAGE:MP API) and a bit in Unity.</li>
                  <li>Solidity - less than 1 year. Used to write some smart contracts.</li>
                  <li>React.js - less than 1 year. This website is created on it, also used to create some websites for web3 projects.</li>
                </ul>
                </span>
            </div>
            <div className="interests_title">Interests</div>
            <div className="interests_text">
                <span className="interests_font-link">
                <ul>
                  <li>Coding - programming? you already heard enough.</li>
                  <li>Crypto & Blockchain - future? more sustainable capitalism.</li>
                  <li>Psychology - a bit psycho? Study of mind(s).</li>
                  <li>Philosophy - what is the purpose of life? Stoicism and Taoism.</li>
                  <li>Quantum cognition - fake fiction or the reality? I prefer the 2nd. psychology with applied quantum theory principles to it. “The consciousness that created the universe is embedded in us.” and “We exist in the energy web and are one with it.”</li>
                  <li>Space (everything from astronomy to rocket science) - are we gonna become the interplanetary species? Love this topic, I believe my future is strongly tied with it. “Earth should be zoned residential and light industrial.”</li>
                  <li>Reading books - paper or electronic? Prefer reading non-fiction: science-pop, business, self-development, biography and travel. My favorites: "21 Lessons for the 21st Century” - inspired me to do blockchain; “The Space Barons” - inspired me to be the next ‘baron’; “Quantum Warrior: The Future of the Mind” - inspired me to do quantum cognition.</li>
                  <li>Walking - on water like Jesus? trivially but energizing.</li>
                  <li>Skiing - outside of comfort zone? non-professional.</li>
                  <li>Self-development - life is? doing it everyday.</li>
                  <li>Electronics - only on factories? love the smell of soldering rosin.</li>
                  <li>Would love to try: kitesurfing, glider flying, photography, modeling dioramas, windsurfing, launch a cubesat satellite, visit Iceland, visit USA, visit UK, paddle, embedded software development.</li>
                </ul>
                </span>
            </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )*/

  return (
    <Parallax pages={3.5} style={{ top: '0', left: '0', backgroundColor: '#262322' }} factor={2}>
      <ParallaxLayer
        offset={0}
        speed={1.5}
        factor={2}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <div className="title">Kirill Rybkov</div>
          <div className="text">
              <span className="font-link">
              <p>&nbsp; Born in Siberian part of Russia. I'm living & studying in Barcelona, Spain. Capitalist and atheist, though I do believe in the <b>Universe.</b> I'm a geek (at least how I classify myself) with soldering iron in teeth, having ~2 years coding experience in hands and the same amount of self-development in conscious and subconscious minds. A lot of creativity and imagination is added and well mixed. Love dreaming about the future of the humankind and space. I believe my mission is to hugely advance and expand the human race, as well as make a revolution.</p>
              <p>&nbsp; Now working in web3 & blockchain space after working in game dev for a year. Built a lot of cool stuff during hackathons and bounty hunting marathons. I do believe that blockchain is the future of more sustainable capitalism without corruption, crimes and stupid policies that will one day help the humans to expand in supercalifragilisticexpialidocious way.</p>
              <p>&nbsp; I prefer working as a back-end developer, however I can do front-end so I guess I'm full-stack.</p>
              </span>
          </div> 
          <div className='icons'>
              < FaGithub />
              < FaMailBulk />
              < FaTwitter />
              < FaLinkedin />
            </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.5} factor={2}>
        <div className='image'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1.5} factor={2} style={{ backgroundColor: '#F2E5D7' }}> 
          <div className="title2">Projects</div>
            <div className="text2">
              <span className="font-link2">
              <p>&nbsp; Wood System using RAGE:MP API A system for sale. Uses JS on front-end and C# on server-side. Built while working in GTA5 game dev. https://ragemp.pro/threads/prodazha-v2-sistema-rubki-dereva-dlja-redage-1-1-wood-system.3292/</p>
              <p>&nbsp; The Loan Stream A DeFi protocol which allows DAOs with large treasuries & other DeFi users to collateralize their treasuries, and take out loans in the form of streams. Built during ‘The Road to Web3’ hackathon. https://showcase.ethglobal.com/roadtoweb3/the-loan-stream</p>
              <p>&nbsp; With NewEnvAI people can freely mint dynamic animal NFTs which represent real environmental data. The uniqueness of this project is determined by the usage of DALL-E neural network which allows users to create any images by just writing a description of it (e.g. bear in river)! There are 3 stages of NFTs: 'bad', 'neutral' and 'good' that will change accordingly to the data provided by an oracle from environmental API. Built during ‘Sustainable Blockchain Hackathon 2022’. https://github.com/Kirillr-Sibirski/newEnvAI</p>
              <p>&nbsp; A productivity dapp that will help users to have more conscious life. Increase concentration during work times or help relax more effectively by incentivizing users using awards such as completion NFTs and reward in native tokens. Built during ‘ETHOnline 2022’ hackathon. https://ethglobal.com/showcase/onmagellanic-vvk4q</p>
              <p>I’ve built a lot more projects but I think these are the most successful. More projects coming!</p>
              </span>
            </div>
          <div className='image-grid'>
            <img src="woodSystem.png" alt="architecture"></img>
            <img src="thels.png" alt="architecture"></img>
            <img src="newEnvAI.png" alt="architecture"></img>
            <img src="onMagellanic.png" alt="architecture"></img>
          </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        factor={2}
        style={{ backgroundColor: '#81997E' }}>
          <div className="skills_title">Skills</div>
            <div className="skills_text">
                <span className="skills_font-link">
                <ul>
                  <li>Javascript - 2 years. Used in game dev, frontend and web3 smart contract integrations (Ethers.js).</li>
                  <li>HTML/CSS - 2 years. Classic, no frameworks. Created some websites on it.</li>
                  <li>Git - less than 2 years. How would I get anywhere without it?</li>
                  <li>Arduino & Raspberry Pi - more than 1 year. C++. More as a hobby. Didn’t really create any projects worth mentioning.</li>
                  <li>Python - more than 1 year. Used in smart contract integrations (Brownie) and writing simple programs.</li>
                  <li>Photoshop - 1 year. Created some preview pictures for YouTube channel.</li>
                  <li>C# - 1 year. Used in game dev (RAGE:MP API) and a bit in Unity.</li>
                  <li>Solidity - less than 1 year. Used to write some smart contracts.</li>
                  <li>React.js - less than 1 year. This website is created on it, also used to create some websites for web3 projects.</li>
                </ul>
                </span>
            </div>
            <div className="interests_title">Interests</div>
            <div className="interests_text">
                <span className="interests_font-link">
                <ul>
                  <li>Coding - programming? you already heard enough.</li>
                  <li>Crypto & Blockchain - future? more sustainable capitalism.</li>
                  <li>Psychology - a bit psycho? Study of mind(s).</li>
                  <li>Philosophy - what is the purpose of life? Stoicism and Taoism.</li>
                  <li>Quantum cognition - fake fiction or the reality? I prefer the 2nd. psychology with applied quantum theory principles to it. “The consciousness that created the universe is embedded in us.” and “We exist in the energy web and are one with it.”</li>
                  <li>Space (everything from astronomy to rocket science) - are we gonna become the interplanetary species? Love this topic, I believe my future is strongly tied with it. “Earth should be zoned residential and light industrial.”</li>
                  <li>Reading books - paper or electronic? Prefer reading non-fiction: science-pop, business, self-development, biography and travel. My favorites: "21 Lessons for the 21st Century” - inspired me to do blockchain; “The Space Barons” - inspired me to be the next ‘baron’; “Quantum Warrior: The Future of the Mind” - inspired me to do quantum cognition.</li>
                  <li>Walking - on water like Jesus? trivially but energizing.</li>
                  <li>Skiing - outside of comfort zone? non-professional.</li>
                  <li>Self-development - life is? doing it everyday.</li>
                  <li>Electronics - only on factories? love the smell of soldering rosin.</li>
                  <li>Would love to try: kitesurfing, glider flying, photography, modeling dioramas, windsurfing, launch a cubesat satellite, visit Iceland, visit USA, visit UK, paddle, embedded software development.</li>
                </ul>
                </span>
          </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default Main
