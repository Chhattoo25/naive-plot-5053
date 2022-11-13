import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1><FontAwesomeIcon icon={faEnvelope} /></h1>
         <AllRoutes/>
         <Header/>
         <Body/>
        <Footer/>
   
       </div> 


 );
}

export default App;
