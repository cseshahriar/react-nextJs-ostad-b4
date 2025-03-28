import './App.css';
import Searchable from './components/Searchable';
import FormInputs from './components/FormInputs';
import ListView from './components/ListView';

function App() {
  return (
    <div id='app' className="flex flex-col items-center justify-center">
        <h1 className='font-bold text-xl mb-3 mt-3'>Module-07 - Admin Panel</h1>
        <h1 className='font-bold text-xl mb-3'>Searchable</h1>
        <Searchable/>
        <FormInputs/>
        <ListView/>
    </div>
  );
}

export default App;
