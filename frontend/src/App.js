
import { Link } from 'react-router-dom';
import './App.css';
import AllRoutes from './components/AllRoutes';
import { BasicUsage } from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
     <h1>ModeSens</h1>
     {/* <Link to='/signup'>SignUp</Link> */}
     <SignUp/>
     {/* <AllRoutes/> */}
     {/* <BasicUsage/> */}
    </div>
  );
}

export default App;
