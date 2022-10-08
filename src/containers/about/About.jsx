import React from 'react';
import { DiGithubBadge, AiOutlineMail, BsTwitter, BsLinkedin } from "react-icons";
import './about.css';

export const About = () => {
  return (
    <div>
      <div className="title">Kirill Rybkov</div>
      <div className="text">
          <span className="font-link">
          <p>&nbsp; Born in Siberian part of Russia. I'm living & studying in Barcelona, Spain. Capitalist and atheist, though I do believe in the <b>Universe.</b> I'm a geek (at least how I classify myself) with soldering iron in teeth, having ~2 years coding experience in hands and the same amount of self-development in conscious and subconscious minds. A lot of creativity and imagination is added and well mixed. Love dreaming about the future of the humankind and space. I believe my mission is to hugely advance and expand the human race, as well as make a revolution.</p>
          <p>&nbsp; Now working in web3 & blockchain space after working in game dev for a year. Built a lot of cool stuff during hackathons and bounty hunting marathons. I do believe that blockchain is the future of more sustainable capitalism without corruption, crimes and stupid policies that will one day help the humans to expand in supercalifragilisticexpialidocious way.</p>
          <p>&nbsp; I prefer working as a back-end developer, however I can do front-end so I guess I'm full-stack.</p>
          </span>
      </div>
      <div className='icons'>< DiGithubBadge /><AiOutlineMail /><BsTwitter /><BsLinkedin /></div>
      <div className='image'></div>
    </div>
  )
}

export default About
