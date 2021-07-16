import Credits from '../partials/credits';
import Navbar from '../partials/navbar2';
import MobileNav from '../partials/MobileNav';
import '../css/mobileNav.css';
import projects from '../data/projects.json'

const Projects = () => {

  const proj = []

  projects.projects.forEach(async (m) => {
    
    await proj.push(

      <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
      <div className="icon-box">
        <div className="icon"><i className={m.imageURL}></i></div>
        <h4><a href={m.liveDemo} target="_blank" rel="noreferrer">{m.name}</a></h4>            
        <br />
        <a href={m.github} target="_blank" rel="noreferrer"><h6 style={{border: '2px white solid', borderRadius: '3%', padding: '2px 2px 2px 2px'}}>View on Github <i className='bi bi-github' style={{color: 'white'}}></i></h6></a>
        <br />
        <p>{m.descrip}</p>
      </div>
    </div>

    );

  })

    return(

      <html>
        <body>
          <Navbar proj="active"/>
        <section id="projects" className="projects section-show">
    <div className="container">

      <div className="section-title">
        <h2>Projects</h2>
        <p>My Projects</p>
      </div>

      <div className="row">

        {proj}

      </div>

    </div>
  </section>

  <MobileNav />
  <Credits />
        </body>
      </html>

    );
}

export default Projects;