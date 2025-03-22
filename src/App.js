import logo from './logo.svg';
import './App.css';
import Loginform from './components/loginForm';

function App() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
        <a href="#" className="navbar-brand">React Props Example</a>
    </div>
  </nav>
  <section>
  <Loginform/>
  </section>
  </>

  );
}

export default App;
