import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Cats from "./Pages/Cats";
import Contactus from "./Pages/Contactus";
import About from "./Pages/About";
import Feedback from "./Pages/Feedback";
import Menu from "./Pages/Menu";
import Footer from "./Footer";
import "./App.css";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component=<Home/>
      break;
    case "/cats":
      component=<Cats/>
      break;
    case "/menu":
      component=<Menu/>
      break;
    case "/about":
      component= <About/>
      break;
    case "/feedback":
      component=<Feedback/>
      break;
    case "/contactus":
      component=<Contactus/>
      break;
    default:
        component = <Home/>;
  }

  return (
    <div>
      <Navbar />
      <div>{component}</div>
      <Footer />
    </div>
  );
}

export default App;
