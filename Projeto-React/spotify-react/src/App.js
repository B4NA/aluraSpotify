import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav/Nav';

function App() {
  document.getElementById('favicon').href = './assets/icons/favicon.png';
  return (
    <>
      <Header/>
      <Nav/>
      <main class="main">
        <Main/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
