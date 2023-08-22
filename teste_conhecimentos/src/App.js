import './App.css';
import NavBar from './components/NavBar';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfileCard 
      user="Carlos Eduardo"
      cargo="DevPleno"
      salario="R$10.300,00"
      />
    </div>
  );
}

export default App;
