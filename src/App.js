import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopPage from './pages/TopPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className='mx-auto max-w-7xl px-4 sm:px-6'>
                <div className='py-9'>
                    <Routes>
                        <Route index element={<TopPage />} />
                        <Route path='/signin' element={<Signin />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
