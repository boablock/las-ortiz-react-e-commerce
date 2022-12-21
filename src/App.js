
import './App.css';
import Navbar from './Components/Nabvar/Navbar';
import Card from './Components/Card/Card';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route,Switch, Link } from 'react-router-dom'


function App() {


  const products = [
    {
      title: 'Rouses',
      img :'./Assets/ramo1.webp',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
    {
      title: 'Milley',
      img :'./Assets/suscri8.jpg',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
    {
      title: 'Flower-box',
      img :'./Assets/flowerbox1.PNG',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
    {
      title: 'Ashton',
      img :'./Assets/body.jpg',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
    {
      title: 'Rouses',
      img :'./Assets/ramo1.webp',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
    {
      title: 'Milley',
      img :'./Assets/suscri8.jpg',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
    {
      title: 'Flower-box',
      img :'./Assets/flowerbox1.PNG',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
    {
      title: 'Ashton',
      img :'https://static.wixstatic.com/media/9c7380_5e7e8ed4e84d40ae9a7794a52e48a2c4~mv2.jpg/v1/fill/w_317,h_257,al_c,q_80,usm_0.66_1.00_0.01/9c7380_5e7e8ed4e84d40ae9a7794a52e48a2c4~mv2.webp',
      btnText: 'Encargar',
      btnClassName:'btn btn-primary'
    },
  ]


  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer
        greeting={'Los ramos se entregan dentro del plazo de 48 hs luego del encargue'}
      />
        <div className='wrapper mt-5' >

        { products.map(({title,img,btnText,btnClassName},index) => (
            <Card
            key ={index} // atributo unico para identificar el objeto en el arreglo (posicion en el caso de index); tmb se puede generar un atributo id en cada uno de ellos. 
            title={title}
            img={img}
            btnText ={btnText}
            btnClassName ={btnClassName}
            />)
        )}




      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
