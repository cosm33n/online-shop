// import './categories.styles.scss'
// import CategoryMenu from './components/category-menu/CategoryMenu'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Home from './routes/home/Home'
import SignIn from './routes/sign-in/SignIn'
const Shop = () => {
  return <h1>muie</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
