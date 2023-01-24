// import './categories.styles.scss'
// import CategoryMenu from './components/category-menu/CategoryMenu'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Home from './routes/home/Home'
import Authentication from './routes/authentication/Authentication'
const Shop = () => {
  return <h1>test1</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
