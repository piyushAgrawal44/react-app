import './App.css';
import Navbar from "./myComponenets/navbar"; //jab rfc ka use krte hai to defult export hota hai or {} use ni krrte
import Main from "./myComponenets/main";
import Footer from "./myComponenets/footer";
import About from "./myComponenets/about";
import Navbar2 from "./myComponenets/navbar2";
import Navbar3 from "./myComponenets/navbar3.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (
 <>
    <Router>
       
       
      <Switch>
        <Route exact path="/react-app">
           <>
           <Navbar />
           <h3 className="text-center my-4">Hello User</h3>
            <Main />
          </>
        </Route>
        <Route exact path="/">
           <>
           <Navbar2 />
           <h3 className="text-center my-4">Hello User</h3>
            <Main />
          </>
        </Route>

        <Route exact path="/about">
          <>
          <Navbar3 />
          <About />
          </>
        </Route>

      </Switch>

      <Footer />

    </Router>
 </>

  );
}

export default App;
