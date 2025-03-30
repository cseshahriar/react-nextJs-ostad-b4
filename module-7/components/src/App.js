import './App.css';
import Searchable from './components/Searchable';
import FormInputs from './components/FormInputs';
import ListView from './components/ListView';
import AuthForm from './components/AuthForm';
import PaymentForm from './components/PaymentForm';
import OtpForm from './components/OtpForm';
import PriceCard from './components/PriceCard';
import RatingCard from './components/RatingCard';

function App() {
  return (
    <div id='app' className="flex flex-col gap-4">
        {/**
        <h1 className='font-bold text-xl mb-3 mt-3'>Module-07 - Admin Panel</h1>
        <h1 className='font-bold text-xl mb-3'>Searchable</h1>
        <Searchable/>
        <FormInputs/>
        <ListView/>
        <AuthForm/>
        <PaymentForm/>
        <OtpForm/>
        <PriceCard />
        */}
        <RatingCard/>
    </div>
  );
}

export default App;
