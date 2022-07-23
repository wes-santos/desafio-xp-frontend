import { useSelector } from 'react-redux';
import './App.css';
import Router from './components/Router/router';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  const { fetchApiError } = useSelector((state) => state.user);

  return fetchApiError ? ErrorModal() : Router();
}

export default App;
