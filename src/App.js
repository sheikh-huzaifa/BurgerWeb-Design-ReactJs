import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Herosection from "./Pages/Landing Page/herosection"
import Ourchef from './Pages/Landing Page/ourchef';
import Bestburger from './Pages/Landing Page/bestburger';
import Bigburger from './Pages/Landing Page/bigburger';
import Statics from './Pages/Landing Page/statics';
import Popularpakages from './Pages/Landing Page/popularpakages';
import Barry from './Pages/Landing Page/barry';
import Update from './Pages/Landing Page/update';
import Footer from './components/footer';
import ".//Style.css"


function App() {
  return (
    <div>
    <div className="container-fluid nav_head">
      <Header />
      <Herosection />
    </div>
    <Ourchef />
    <Bestburger />
    <Bigburger />
    <Statics />
    <Popularpakages />
    <Barry />
    <Update />
    <Footer />
    </div>

  );
}

export default App;
