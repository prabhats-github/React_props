import logo from './logo.svg';
import './App.css';
import Home from './compo/Home'


function App() {
  let p=[{"Name":"Amit"},{"Name":"Ramit"},{"Name":"Sumit"}]
  return (
    <div>
      
     
     <Home p1={p}/>
     
    </div>
  );
}

export default App;
