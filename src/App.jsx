import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Product/>
      </div>
      <Footer/>

    </>
  );
}

export default App;
