import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nabvar/Navbar';
import Card from './Components/Card/Card';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Card
      cardTitle={'Benetton'}
      img={'./Assets/flowerbox2.jpg'}
      desctription={'lalala'}
      btnText={'Comprar'}
    
    />



    </div>
  );
}

export default App;
