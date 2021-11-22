
import Contact from './contact';
import Signup from './signup'
import Home from "./page1"
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import React, { useState ,useEffect} from "react";
import Login from "./login"
import Homeafterlogin from './home1';
import Update from './update';
import Changepass from './changeofpassword';
import Transfer from './transfer';
import Payment from './payment';
import About from './about';
import Benificaries from './beneficaries';


function App() {
 
  
  
  const [user, setLoginUser] = useState({})
 
  const [postsList,setPostsList]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/alldata")
    .then(res=> setPostsList(res.data))
    .catch(error=>console.log("not happening"))
  },[])


  return (
   
    <Router>
    <div className="App">
     
      <Switch>
      
        <Route exact path="/" render={()=><Home data={postsList}/>}></Route>

        <Route exact path="/Home">
            {
              user && user._id ?  <Route render={()=><Homeafterlogin data={user}/>}></Route>  : <Login setLoginUser={setLoginUser}/>
            }
          
          </Route>
          
          <Route excat path="/transfer" render={()=><Transfer data={user}/>}>
          
          </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route excat path="/signup">
          <Signup/>
        </Route>
        <Route excat path="/login">
        <Login setLoginUser={setLoginUser}/>
        </Route>
        <Route exact path="/update">
          <Update setLoginUser={setLoginUser}/>
        </Route>
        <Route exact path="/changepass">
          <Changepass/>
        </Route>
        <Route exact path="/payment" render={()=><Payment data={user}/>}>
        </Route>
        <Route exact path="/beneficaries" render={()=><Benificaries data={user}/>}>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
