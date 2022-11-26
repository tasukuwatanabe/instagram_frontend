import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopPage from './pages/TopPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className='flex min-h-screen justify-between'>
                <div className='w-1/6 py-10 px-6 fixed h-screen border-r-2'>
                  <Header />
                </div>
                <div className='w-5/6 ml-auto py-10'>
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
