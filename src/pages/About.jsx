import Credits from '../partials/credits';
import pfp from '../img/me.jpg';
import Navbar from '../partials/navbar2';
import MobileNav from '../partials/MobileNav';
import '../css/mobileNav.css';

const About = () => {
    return(
      <body>
        <Navbar about="active"/>
      <header>
      <section id="about" className="about section-show">

<div className="about-me container">

  <div className="section-title">
    <h2>About</h2>
    <p>Know more about me</p>
  </div>

  <div className="row">
    <div className="col-lg-4" data-aos="fade-right">
      <img src={pfp} className="img-fluid" alt="" />
  </div>
    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
      <h4>Software Developer | Student | Tech Enthusiast | Chef</h4><br /><br />
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Manav Garg</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>College:</strong> <span style={{fontSize: '0.8rem', textDecoration: 'underline'}}>Vellore Institute of Technology</span></li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Gurgaon, Haryana, India</span></li>
            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:manavvgarg2019@gmail.com" target="_blank" rel="noreferrer">manavvgarg2019@gmail.com</a></span></li>
          </ul>
        </div>
      </div>
      <p>
        Hey I'm Manav, Nice to meet you 👋 <br />I'm a student as well as a software developer who is passionate about making awesome things. I like making things, especially those which help or entertain others. I also love discover new things to learn. I spend my free time coding, cooking, playing video games and making code more efficient/user friendly.
      </p>
    </div>
  </div>

</div>


<div className="interests container">

  <div className="section-title">
    <h2>Interests</h2>
  </div>

  <div className="row">
    <div className="col-lg-3 col-md-4">
      <div className="icon-box">
        <i className="bx bxl-javascript" style={{color: '#ffbb2c'}}></i>
        <h3>JavaScript</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div className="icon-box">
        <i className="bx bxl-nodejs" style={{color: '#29cc61'}}></i>
        <h3>Nodejs</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div className="icon-box">
        <i className='bx bxl-python' style={{color: '#0b72c2'}}></i>
        <h3>Python</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
      <div className="icon-box">
        <i className='bx bxl-html5' style={{color: '#e14913'}}></i>
        <h3>HTML</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className='bx bxl-css3' style={{color: '#0655d4'}}></i>
        <h3>CSS</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className='bx bxl-bootstrap' style={{color: '#563d7c'}}></i>
        <h3>Bootstrap</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className='bx bxl-markdown' style={{color: '#ffffff'}}></i>
        <h3>Markdown</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className="ri-database-2-line" style={{color: '#47aeff'}}></i>
        <h3>Data Structures</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className='bx bxs-terminal' style={{color: '#ffffff'}}></i>
        <h3>Terminal</h3>
      </div>
    </div>
    <div className="col-lg-3 col-md-4 mt-4">
      <div className="icon-box">
        <i className='bx bx-bug' style={{color: '#29cc61'}}></i>
        <h3>Bug Hunting</h3>
      </div>
    </div>
  </div>

</div>
</section>
      </header>

<footer>
<MobileNav />
</footer>
<Credits />
      </body>
    



    );
}

export default About;