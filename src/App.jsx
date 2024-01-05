import './App.css';
import { useSelector} from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  // eslint-disable-next-line no-empty-pattern
  const {} = useSelector(state => state.auth)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
