import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Registration from './pages/Registration';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const changeLoading = () => {
    setTimeout(() => setIsLoading(false), 2000);
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      // setIsLoading(false);
      changeLoading();
      return;
    }
    // const handleLoad = () => setIsLoading(false);
    const handleLoad = () => changeLoading();
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if( isLoading ) {
    return <Loader/> 
  }

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
