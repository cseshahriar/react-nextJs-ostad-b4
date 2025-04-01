import { useEffect } from 'react';
import cardList from './Api/ApiRequest';

function App() {

  useEffect(() => {
    async function fetchData() {
      let res = await cardList();  // Wait for the data
      console.log(res.data);  // Now logs the resolved data
    }

    fetchData();  // Call the async function inside useEffect
  }, []);

  return (
    <>
    </>
  )
}

export default App
