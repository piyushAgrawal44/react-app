import './App.css';
import Navbar from "./myComponenets/navbar"; //jab rfc ka use krte hai to defult export hota hai or {} use ni krrte
import Main from "./myComponenets/main";
import Footer from "./myComponenets/footer";
import About from "./myComponenets/about";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (
 <>
    <Router>
       <Navbar />
       
      <Switch>
        <Route exact path="/" render={()=>{
           return(
           <>
            <h3 className="text-center my-4">Hello User</h3>
            <Main />
          </>)
        }}>
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

      </Switch>

      <Footer />

    </Router>
 </>

  );
}

export default App;
