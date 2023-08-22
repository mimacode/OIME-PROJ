import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {GestionInformacion} from './components/views/GestionInformacion';

function App() {
  return (
    <BrowserRouter basename='OIME'>
      <Routes>
        <Route path='/gestion' element={<GestionInformacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
