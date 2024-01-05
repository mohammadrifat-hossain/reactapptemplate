import './App.css';
import { useSelector} from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  // eslint-disable-next-line no-empty-pattern
  const {} = useSelector(state => state.auth)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
