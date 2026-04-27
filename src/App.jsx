import Navbar from './components/Navbar'
import About from './components/About'
import Techstack from './components/Techstack'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />
      <Experience />
      <Techstack />
      <Footer />
    </div>
  );
}

export default App;

