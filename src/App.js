import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
