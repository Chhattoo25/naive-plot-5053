import AllRoutes from "./AllRoutes/AllRoutes";
import Search from "./components/SearchComp/Search";
import Header from './Header';
function App() {
  return (
    <div className="App">
    {/* <Header/> */}
    <Search/>
      <AllRoutes />
      {/* <Footer/> */}
    </div>
  );
}




export default App;
