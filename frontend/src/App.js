
import AllRoutes from "./AllRoutes/AllRoutes";

import './App.css';

import Search from "./components/SearchComp/Search";

import Footer from "./components/Navbar_Components/Footer";
import Header from "./components/Navbar_Components/Header";
function App() {
  return (
    <div className="App">
       <Header/>

      <AllRoutes />
      <Footer/>

    </div>
  );
}


export default App;
