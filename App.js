import { Routes, Route } from 'react-router-dom'
import { NavbarComp } from './components/NavbarComp';
import { Fragment, useRef } from 'react';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Catalog } from './components/Catalog';
import { Login } from './components/Login';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { getStorage, ref} from "firebase/storage"
import handleSubmit from './handleSubmit';
import Firestore from './basicUI';

const storage = getStorage();
const storageRef = ref(storage);



function App() {
  return (
    <Fragment>
      <NavbarComp />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/catalog' element ={<Catalog />}/>
        <Route path='/about' element ={<About />}/>
        <Route path='/login' element ={<Login />}/>
        <Route path='/register' element ={<Register />}/>
      </Routes>
      <Firestore />
      <Footer />
    </Fragment>
  );
}

export default App;
