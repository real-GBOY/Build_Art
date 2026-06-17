/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { FormPage } from './pages/FormPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-body antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
