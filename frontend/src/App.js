
import AllRoutes from "./AllRoutes/AllRoutes";
import Header from './Header';
import './App.css';
import Search from "./components/SearchComp/Search";
function App() {
  return (
    <div className="App">
    
    <Header/>
      <AllRoutes />
      {/* <Footer/> */}
    </div>
  );
}


export default App;
