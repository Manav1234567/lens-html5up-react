import logo from './logo.svg';
import './assets/css/main.css';
import './assets/sass/main.scss';
import images from "./content.json"

function App() {
  return (
    <div className="App">
      <header id="header">
				<h1>Lens</h1>
				<p>Just another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
				<ul className="icons">
					<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
					<li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
				</ul>
			</header>

      <section id='thumbnails'>
        {images.map(image => {
          return(
            <article>
            <a className='thumbnail' href={image.full_img_source} style={{textAlign: "left", verticalAlign: "center"}}>
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
  );
}

export default App;
