import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/auth/Register'
import Home from './components/common/Home'
import NavBar from './components/common/NavBar'
import DinoIndex from './components/dinosaurs/DinoIndex'
import DinoShow from './components/dinosaurs/DinoShow'
import MiscIndex from './components/miscs/MiscIndex'
import MiscShow from './components/miscs/MiscShow'
import Login from './components/auth/Login'
import Basket from './components/common/Basket'
import DinoNew from './components/dinosaurs/DinoNew'
function App() {
  //React.useEffect(() => {
  //const getData = async () => {
  //const res = await fetch('/api/') // * <-- replace with your endpoint
  //const data = await res.json()
  // console.log(data)
  // }
  // getData()
  //})

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dinosaurs/new" component={DinoNew} />  
        
        <Route path="/dinosaurs/:id" component={DinoShow} />
        <Route path="/items/:id" component={MiscShow} />
        <Route path="/dinosaurs" component={DinoIndex} />             
        <Route path="/miscs" component={MiscIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/Basket" component={Basket} />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App
