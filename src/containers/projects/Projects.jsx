import React from 'react';
import './projects.css';

export const Projects = () => {
  document.body.style = 'background: #F2E5D7;';
  window.scrollTo(0, 0)
  return (
    <div id="page2">
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
    <div className='images2'>
      <div className='gta'></div>
      <div className='thels'></div>
      <div className='newenvai'></div>
      <div className='onmagellanic'></div>
    </div>
</div>
  )
}

export default Projects
