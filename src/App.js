import ButtonAppBar from './component/navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Register from './component/Register'
import Login from './component/Login'
import Logout from './component/Logout'
import { createContext, useReducer } from 'react'
import {initialState,reducer} from './ruducer/UseReducer'

export const Usercontext = createContext();

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <Usercontext.Provider value={{state,dispatch}}>
    <div className="App">
      <ButtonAppBar/>
      <Routes>
        <Route  path='/home' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
      </Routes>
    </div>
    </Usercontext.Provider>
  );
}

export default App;
