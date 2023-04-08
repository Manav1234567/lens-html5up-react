import React from 'react';

import logo from './logo.svg';
import './assets/css/main.css';
import './assets/sass/main.scss';

import images from "./content.json"

function App() {
  
  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "./assets/js/jquery.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);
  
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "./assets/js/browser.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "./assets/js/breakpoints.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "./assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
    <div id='main'>
      <header id="header">
				<h1>Lens</h1>
				<p>Just another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
				<ul className="icons">
					<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
					<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
					<li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
				</ul>
			</header>

      <section id='thumbnails'>
        {images.map(image => {
          return(
            <article>
            <a className='thumbnail' href={image.full_img_source} style={{textAlign: "left", verticalAlign: "center"}} onClick={(event) => event.preventDefault()}>
              <img src={image.thumb_img_source} alt={image.thumb_alternative_text} />
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </a>
            </article>
          )
        })}
      </section>

      
			<footer id="footer">
				<ul className="copyright">
					<li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a>.</li>
				</ul>
			</footer>
    </div>
    </>
  );
}

export default App;
