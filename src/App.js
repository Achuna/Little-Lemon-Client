import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import BookingPage from './components/BookingPage'; // you'll create this next
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
