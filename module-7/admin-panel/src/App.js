import './App.css';
import Searchable from './components/Searchable';

function App() {
  return (
    <div id='app' className="flex flex-col items-center justify-center">
        <h1 className='font-bold text-xl mb-3 mt-3'>Module-07 - Admin Panel</h1>
        <h1 className='font-bold text-xl mb-3'>Searchable</h1>
        <Searchable/>
    </div>
  );
}

export default App;
