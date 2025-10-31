import Header from './components/header/header'
import Footer from "./components/footer/footer";
import Body from "./components/body/body";
import DetailedServices  from "./components/detailedServices/detailedServices";
import ContactSection  from "./components/footer/contactSection";



function App() {
  return (
    <>
      <Header />
      <Body />
      <DetailedServices />
      <ContactSection/>
      <Footer />
      
    </>
  );
}

export default App;
