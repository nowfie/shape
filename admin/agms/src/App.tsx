import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Client from './pages/client/Client'
import Food from './pages/food/Food'
import NavBar from './components/items/NavBar'
import Workout from './pages/workout/Workout'
import Equiment from './pages/equipment/Equiment'
import Revenue from './pages/revenue/Revenue'
import Dashboard from './pages/Dashboard'
import MainScreen from './pages/MainScreen'
import FoodDetail from './pages/food/FoodDetail'

function App() {

  return (
  <main className='background'>
  <Routes>
    <Route path='/' element={<MainScreen/>}/>
    <Route path='/food/:name' element={<FoodDetail/>}/>
  </Routes>
  </main>
  )
}

export default App
