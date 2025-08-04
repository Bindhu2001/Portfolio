import Navbar from './components/Navbar'
import About from './components/About'
import Techstack from './components/Techstack'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <About />
      <Experience/>
      <Techstack />
      <Footer />
    </div>
  );
}

export default App;
