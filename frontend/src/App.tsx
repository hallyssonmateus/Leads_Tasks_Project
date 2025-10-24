import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LeadsPage from './pages/LeadsPage';
import LeadsDetailsPage from './pages/LeadsDetailsPage';
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/leads" replace />} />
        <Route path='/leads' element={<LeadsPage />}/>
        <Route path='/leads/:id' element={<LeadsDetailsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
