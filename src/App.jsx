import './App.scss';
import Header from './components/header/Header';
import Middleafter from './components/middleafter/Middleafter.jsx';
import Middle from "./components/middle/Middle.jsx"
import Navbar from './components/navbar/Navbar'
import pc1 from ".././src/assets/pc1.png"
import Card from './components/card/Card.jsx';
import Sign from "./components/sign/Sign.jsx";
import Footer from "./components/footer/Footer.jsx"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Middle  
        imageUrl={pc1}
        first_para="WixPro 72-Inch Responsive Website Builder-"
        firstParagraph=" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        secondParagraph="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        content="Excellent"
        buttonText="1"
        rate="9.5"
         />
         <Middle 
        imageUrl={pc1}
        first_para="SiteCraft 68-Inch Ultimate Web Design Studio-"
        firstParagraph="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        secondParagraph="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        content="Exceptional"
        buttonText="2"
        rate="9.8"
         />
         <Middle 
        imageUrl={pc1}
        first_para="WixPro 72-Inch Responsive Website Builder-"
        firstParagraph=" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        secondParagraph="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        content="Good"
        buttonText="3"
        rate="9.0"
        />
        <Middleafter />
        <Card/>
        <Sign/>
        <Footer/>
    </div>
  );
}

export default App;
