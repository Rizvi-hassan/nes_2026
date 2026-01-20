import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Registration from './pages/Registration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
