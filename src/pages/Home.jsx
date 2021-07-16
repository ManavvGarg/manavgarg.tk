/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import HeadData from '../partials/head';
import '../vendor/bootstrap/css/bootstrap.css';
import '../vendor/bootstrap-icons/bootstrap-icons.css';
import '../vendor/boxicons/css/boxicons.min.css';
import '../vendor/glightbox/css/glightbox.min.css';
import '../vendor/remixicon/remixicon.css';
import '../vendor/swiper/swiper-bundle.min.css';
import '../css/style.css';
import Credits from '../partials/credits';
import Navbar from '../partials/navbar';
import MobileNav from '../partials/MobileNav';
import '../css/mobileNav.css';
import '../css/spotifyScroll.css';
import React, {useState, useEffect, useRef} from 'react';

const Home = () => {


  //SPOTIFY
  // =================================================================================================================================================================

  const [songName, setSongName] = useState(`I'm away from keyboard atm!`);
  const [songAlbum, setSongAlbum] = useState();
  const [songURL, setSongURL] = useState(`https://open.spotify.com/user/curiosticgameryt`);
  const [albumURL, setAlbumURL] = useState(`https://open.spotify.com/user/curiosticgameryt`);
  const [songArtists, setSongArtists] = useState([])
  const [songImage, setSongImage] = useState(`https://i.ibb.co/1GPBBmW/zzz.png`);
  const mainComp = useRef(); // For change ref in changing divs
  const mainComp2 = useRef(); // For change ref in changing divs
  const mainComp3 = useRef(); // For change ref in changing divs
  const mainComp4= useRef(); // For change ref in changing divs
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    var details = {
      'grant_type' : 'refresh_token',
      'refresh_token': `${process.env.REACT_APP_REF_TOKEN}`,
      'client_id': `${process.env.REACT_APP_C_ID}`,
      'client_secret': `${process.env.REACT_APP_C_SECRET}`
    };

    var formBody = [];
    for(var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(`https://accounts.spotify.com/api/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    }).then(async(response) => {

      let res = await response.json();
      let accessToken = res.access_token;
  
      fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }).then(async(responsePlayback) => {
        if (!responsePlayback.ok) {
          return setError(true)
        }
      
        //console.log(responsePlayback);
       // return setData(responsePlayback);
       return responsePlayback.text().then(async text => {
         //const content = JSON.parse(text);

         const n = await JSON.parse(text);
         var arr = [];
         n.item.artists.forEach(async e => {
            arr.push(e.name);
         });
         var arr2 = arr.join(', ');
         

         await setSongName(n.item.name);
         await setSongAlbum(n.item.album.name)
         await setSongArtists(arr2)
         await setSongURL(n.item.external_urls.spotify)
         await setAlbumURL(n.item.album.external_urls.spotify)
         await setSongImage(n.item.album.images[0].url)
        
      });

      })
    
      fetch(`https://api.spotify.com/v1/me/playlists`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      }).then(async(responsePlaylist) => {
        if (!responsePlaylist.ok) {
          return setError(true)
        }

        return responsePlaylist.text().then(async(text) => {
          const n = await JSON.parse(text);
          var arr2 = [];
          n.items.forEach(async e=> {
           await arr2.push(

              <li><img src={e.images[0].url} alt='album cover image' style={{display:'flex', margin: "0 5% 2% 0", position:"relative", float: "left" }} height="45vh" width="45vh" /><a href={e.external_urls.spotify} target="_blank" rel="noreferrer">{e.name}<i class='bx bx-play-circle'></i></a></li>

            )
          });
          await setPlaylists(arr2);



        })


      })



    }).catch((error) => {
      
      console.error("Error fetching data: ", error);
      
      setError(error);
      
    })
      .finally(() => {
          setLoading(false);
      });
      





      }, []);

      // =================================================================================================================================================================

      if (loading) return( <div className="loader" style={{display:'flex', justifyContent: "center", alignContent: "center", alignItems:"center", alignSelf:"center"}}><i class='bx bx-loader'></i> Loading...</div> );
      if (error) return( <div className="loader" style={{display:'flex', justifyContent: "center", alignContent: "center", alignItems:"center", alignSelf:"center", marginTop:"20%"}}><i class='bx bxs-message-square-error'></i> An error occured! Please refresh the page!</div> );

      //button onclick funtions
      // =================================================================================================================================================================
      
      
      const playBtn = () => {
        //console.log(`LMAO LMAO LMAO`)
        mainComp.current.classList.toggle(`spotifyNoShow`)
        mainComp2.current.classList.toggle(`spotifyNoShow`)
        mainComp3.current.classList.toggle(`spotifyNoShow`)
        mainComp4.current.classList.toggle(`spotifyNoShow`)
      }

    return (

      <html lang="en">
             
             <HeadData 
             title="Home | Manav Garg"
             description="/*Hey! I'm Manav, Nice to meet you 👋. I'm a student as well as a software developer who is passionate about making awesome things.*/"
             keywords="Manav, Garg, Globa Sevak, Programming, Coder, ReactJS, Freelance, Python, MySql, PostgreSQL, HTML5, CSS3, SASS, PUG, RUBY, NODE, Javascript"
             url="https://manavgarg.tk/"
             />

      <body>
      <header id="header">
    <div className="container">

      <h1 style={{fontFamily: "'JetBrains Mono', monospace", fontSize: '2.2rem'}}><a href="/">Manav Garg</a></h1>

      <div className="typing-container">
        <h2>I'm a passionate <span id="feature-text"></span><span className="input-cursor"></span> from India.</h2>
      </div>


      <Navbar />
      

      <div className="social-links">
        <a href="https://github.com/ManavvGarg" target="_blank" className="github" rel="noreferrer"><i className="bi bi-github"></i></a>
        <a href="https://twitter.com/manavvgarg__" target="_blank" className="twitter" rel="noreferrer"><i className="bi bi-twitter"></i></a>
        <a href="https://www.instagram.com/manavvgarg" target="_blank" className="instagram" rel="noreferrer"><i className="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/manavvgarg/" target="_blank" className="youtube" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UCNNWJbXYSnfiKr-uayTW-eA" target="_blank" className="youtube" rel="noreferrer"><i className="bi bi-youtube"></i></a>
      </div>

    </div>
    
  
    <div className="glassSpotifyUp" ref={mainComp}>
      <a href={songURL} target="_blank" rel="noreferrer">
      <h4>Currently listening to:</h4>
      <div className="glassSpotify" style={{paddingTop: "5%", marginLeft: "10%", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
      <img src={songImage} style={{display:'flex', justifyContent: "center", alignContent: "center", alignItems:"center", alignSelf:"center", margin: "2% auto 4% auto", position:"relative" }} alt="Song cover image" height="145vh" width="145vh" />
    <h6 style={{display:'flex', justifyContent: "center", alignContent: "center", alignItems:"center", alignSelf:"center", margin: "4% auto 0 auto", position:"relative", fontWeight: "600" }}><a href={songURL} target="_blank" rel="noreferrer" >{songName}</a></h6>
    <h6 style={{display:'flex', justifyContent: "center", alignContent: "center", alignItems:"center", alignSelf:"center", margin: "2% auto 0 auto", position:"relative", fontWeight: "400" }}>{songArtists}</h6>
    <h6 style={{display:'flex', justifyContent: "center", alignContent: "center", alignItems:"center", alignSelf:"center", margin: "4% auto 0 auto", position:"relative", opacity:"75%" }}><u><a href={albumURL} target='_blank' rel="noreferrer">{songAlbum}</a></u></h6>
    
      </div>
      
      </a>
      <button className="playlistBTN" onClick={() => playBtn()} ref={mainComp3}>My Playlists<i class='bx bxs-chevron-right-circle'></i></button>
      </div>

    <div className="glassSpotifyUp spotifyNoShow" ref={mainComp2}>
      <h4>Public Playlists</h4>
      <div className="glassSpotify2" style={{paddingTop: "5%", marginLeft: "10%", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
      
      <ul style={{marginLeft: "-2vh"}}>
        {playlists}
      </ul>
    
      </div>
      
      <button className="playlistBTN2 spotifyNoShow" onClick={() => playBtn()} ref={mainComp4}>Go Back<i class='bx bxs-chevron-left-circle'></i></button>
    </div>

  
  </header>

  <MobileNav />
      <Credits />
      </body>



  </html>
      

    );
  }
   
  export default Home;