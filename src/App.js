import ButtonAppBar from './component/navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Register from './component/Register'
import Login from './component/Login'


function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Routes>
        <Route  path='/home' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
