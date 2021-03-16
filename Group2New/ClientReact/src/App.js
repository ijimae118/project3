import Login from "./Component/Playout/Login";
import Home from "./Component/Playout/Home";
import Register from "./Component/Playout/Register";
import Header from "./Component/Playout/Header";
import Footer from "./Component/Playout/Footer";
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from "./Component/Playout/About";
import User from "./Component/Playout/User";
import Delivery from "./Component/Playout/Delivery";
import ProductsContainer from "./containers/ProductsContainer";
import BasketContainer from "./containers/BasketContainer";
import Music from './Component/Playout/Music'
//import { useEffect, useState } from "react";
//import axios from 'axios';

function App() {
  // fetch API:
  // const [List, setList] = useState([]);
  // const [loading,setloading] = useState(false);
  // useEffect(() => {
  //   const fetch = async ()=>{
  //   setloading(true);
  //     const res = await axios.get('http://localhost:65282/api/TbServices/');
  //     if (sessionStorage.getItem("AllSERVICES") === null) {
  //       sessionStorage.setItem("AllSERVICES",JSON.stringify(res.data)); //for start App =>send string
  //     }else{
  //       sessionStorage.setItem("AllSERVICES",JSON.stringify(res.data)); //for refresh App
  //     }
  //   setList(res.data);
  //   setloading(false);
  //   }
    
  //   fetch();
  // }, []);
 
  /*React-Router*/
  return (
  <div className="container-fluid">
    <Router>

    {/*--- Header-Navbar---- */}
        <Header/>
    
    {/*------ Body------- */}
   
    
    <Switch>
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route path="/login" component={({history})=><Login history={history}/>} />
          <Route path="/register" component={({history})=><Register history={history}/>} />   
          <Route path="/services">
            <section className="boder">
                {/* <Session/> */}
                <ProductsContainer/>
            </section>
                {/* Message */}
                {/* <MessageContainer/> in Cart */}
                {/*Cart*/}  
                <BasketContainer/>
          </Route>
          <Route path="/user" component={User} />
          <Route path="/delivery" component={Delivery}/>
          <Route path="/about" component={About} />
          <Route path=''>
          <div className="error">404</div>
          <Music/>
          <Link to="/">Home</Link>
          </Route> 
    </Switch>
    
 
 

    {/*----- Footer----- */}
        <Footer/>
        
    </Router>
  </div>
  );
}



export default App;
