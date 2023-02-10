import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddCustomer from './customers/AddCustomer';
import ViewCustomer from './customers/ViewCustomer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditCustomer from './customers/EditCustomer';
function App() {
  return (
    <div className="App">
   <Router>
   <Navbar/> 
   <Routes>
    <Route exact path ="/" element = {<Home/>}/>
    <Route exact path ="/addCustomer" element={<AddCustomer/>}/>
    <Route exact path ="/customers/:id" element={<EditCustomer/>}/>
    <Route exact path ="/viewCustomer/:id" element={<ViewCustomer/>}/>
   </Routes>
   
   </Router>
   
    </div>
  );
}

export default App;
