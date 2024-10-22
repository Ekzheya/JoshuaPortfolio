import React from 'react';
import './styles.css'; 
import bg from'./img/bg.png';
import c1 from'./img/c1.png';
import josh from'./img/josh.png';
import p1 from'./img/p1.png';
import p2 from'./img/p2.png';
import p3 from'./img/p3.png';
import p4 from'./img/p4.png';
import p5 from'./img/p5.png';
import s1 from'./img/s1.png';
import s2 from'./img/s2.png';
import s3 from'./img/s3.png';
import ph1 from'./img/ph1.png';
import m1 from'./img/m1.png';
import g1 from'./img/g1.png';



const Portfolio = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div id="homeb"></div>
      <img className="bg" src={bg} alt="Background" />
      <p className="asp">Aspiring UI/UX Designer<br />3rd Year BSIT Student<br />Portfolio</p>

      <div className="navbar">
        <div className="space"><button onClick={() => scrollToSection('homeb')}>Home</button></div>
        <div className="space"><button onClick={() => scrollToSection('abtmeb')}>About me</button></div>
        <div className="space"><button onClick={() => scrollToSection('portb')}>Work</button></div>
        <div className="space"><button onClick={() => scrollToSection('contb')}>Contact</button></div>
      </div>

      <div id="abtmeb"></div>
      <div className="abtme">
        <span className="abt">ABOUT </span>
        <span className="me">ME</span>
      </div>
      <div className="shadowR">RESUME</div>
      <div className="recta"></div>
      <img className="picme" src={josh} alt="Me" />
      <p className="intro">
        My name is Joshua Penafiel. I’m an aspiring UI Designer and a student. 
        I’m currently a 3rd year BSIT student. I’m passionate about learning UI/UX designs. 
        My goal is to graduate with enough knowledge to work for the IT industry.
      </p>

      <div className="myed">
        <span className="mye">My </span>
        <span className="educ">Education</span>
      </div>
      <div className="educbg">
        2020-2022<br />General Academic Strand Stratified as ICT<br />-San Juan Academy Inc.<br />
        2022-Present<br />Bachelors of Information in Technology (3rd Year)<br />-Western Institute of Technology
      </div>

      <div className="mysk">
        <span className="mys">My </span>
        <span className="skill">Skills</span>
      </div>
      <img className="s1" src={s1} alt="s1" />
      <img className="s2" src={s2} alt="s2" />
      <img className="s3" src={s3} alt="s3" />


      <div id="portb"></div>
      <div className="myport">
        <span className="my">MY </span>
        <span className="port">PORTFOLIO</span>
      </div>
      <div className="shadowP">PORTFOLIO</div>
      <div className="line1"></div>
      <img className="p1" src={p1} alt="p1" />
      <img className="p2" src={p2} alt="p2" />
      <img className="p3" src={p3} alt="p3" />
      <img className="p4" src={p4} alt="p4" />
      <img className="p5" src={p5} alt="p5" />
      <div className="even"></div>


      <div id="contb"></div>
      <img className="f1" src={m1} alt="Mail" />
      <img className="f2" src={ph1} alt="ph" />
      <a href="https://github.com/Ekzheya" target="_blank" rel="noopener noreferrer">
        <img className="f3" src={g1} alt="Gh" />
      </a>
      <a href="https://www.facebook.com/Otaku.Icebear" target="_blank" rel="noopener noreferrer">
        <img className="f4" src={c1} alt="Fb" />
      </a>
      <div className="line2"></div>

      <div className="mycont">
        <span className="myc">MY </span>
        <span className="cont">CONTACT</span>
      </div>
      <div className="num">(+63)947-692-6450</div>
      <div className="mail">SJA.JBPENAFIEL.EDU@GMAIL.COM</div>

  
      <div className="navbar2">
        <div className="space"><button onClick={() => scrollToSection('homeb')}>Home</button></div>
        <div className="space"><button onClick={() => scrollToSection('abtmeb')}>About me</button></div>
        <div className="space"><button onClick={() => scrollToSection('portb')}>Work</button></div>
        <div className="space"><button onClick={() => scrollToSection('contb')}>Contact</button></div>
      </div>
    </div>
  );
};

export default Portfolio;
