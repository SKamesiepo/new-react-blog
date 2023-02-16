import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentication from './components/container/Authentication/Authentication'
import Home from './pages/Home'
import ErrorPage from './pages/Error/ErrorPage'

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
          <Route path="Home" element={<Home />} />
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
  }


  export default RouteApp;
