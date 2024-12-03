import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
