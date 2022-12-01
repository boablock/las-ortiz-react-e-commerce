import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Nabvar/Navbar';
import Card from './Components/Card/Card';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer
        greeting={'Los ramos se entregan dentro del plazo de 48 hs luego del encargue'}
      />
        <div className='d-flex justify-content-around mt-5' >
          <Card
            cardTitle={'Rouses'}
            img={'./Assets/ramo1.webp'}
            desctription={'lalala'}
            btnText={'Agregar'}
          
          />
              <Card
            cardTitle={'Miley'}
            img={'./Assets/suscri8.jpg'}
            desctription={'lalala'}
            btnText={'Agregar'}
          
          />
              <Card
            cardTitle={'Flower-box'}
            img={'./Assets/flowerbox1.PNG'}
            desctription={'lalala'}
            btnText={'Encargar'}
          
          />
              <Card
            cardTitle={'Ashton'}
            img={'./Assets/body.jpg'}
            desctription={'lalala'}
            btnText={'Agregar'}
          
          />
      </div>
    </div>
  );
}

export default App;
