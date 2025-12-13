import './App.css';
import Header from './components/header.jsx';
import Hero from './components/hero.jsx'
import Cards from './components/cards.jsx'
import Footer from './components/footer.jsx'



function App(){
  return(
    <div className="App">
      <Header />
      <Hero />
      <Cards/>
      <Footer />
    </div>
  )
}

export default App;