import React from 'react';
import './skills_interests.css';
import { useNavigate } from 'react-router-dom';

export const SkillsInterests = () => {
  document.body.style = 'background: #81997E;';
  window.scrollTo(0, 0)
  const navigate = useNavigate();

  function handleScroll() { 
    var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight; 
      
    if (isAtBottom) { 
      navigate('/about');
    } 
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div id="page3">
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
</div>
  )
}

export default SkillsInterests
 