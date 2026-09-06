/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FormPage } from './pages/FormPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-page font-body antialiased">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
