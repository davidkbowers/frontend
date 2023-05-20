import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Tours from "./pages/Tours";
import About from "./pages/About";
import Contact from "./pages/Contact";


import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const list = [
    {
        "id": 1,
        "date_published": "2023-02-19T00:00:00Z",
        "description": "Photo Credit: Rene Huemer Yesterday, Feb. 18, Dave Matthews and Tim Reynolds continued their destination concert event at Moon Palace Hotel in Cancún,",
        "headline": "Dave Matthews and Tim Reynolds Debut Led Zeppelin’s “D’yer Mak’er” in Mexico",
        "url": "https://jambands.com/news/2023/02/19/dave-matthews-and-tim-reynolds-debut-led-zeppelins-dyer-maker-in-mexico/",
        "main_image": "https://jambands.com/wp-content/uploads/2023/02/Promo-Facebook-Facebook-link-image-64.jpeg",
        "tags": "#man#war"
    },
    {
        "id": 2,
        "date_published": "2023-02-19T00:00:00Z",
        "description": "Photo via Tom Marshall's Official Twitter On Feb. 17, Pink Talking Fish took the stage at The Vogel in Red Band, N.J. During their two-set performance,",
        "headline": "Tom Marshall Joins Pink Talking Fish on “Run Like An Antelope” in New Jersey",
        "url": "https://jambands.com/news/2023/02/19/tom-marshall-joins-pink-talking-fish-on-run-like-an-antelope-in-new-jersey/",
        "main_image": "https://jambands.com/wp-content/uploads/2023/02/Promo-Facebook-Facebook-link-image-3.jpeg",
        "tags": "#elo#kingfish#man#phish#the band"
    },
];

function App() {
  return (
      <div>
      <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/news' element={<News />} />
              <Route path='/tours' element={<Tours />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
      </Router>
      </div>
  );
}

export default App;
