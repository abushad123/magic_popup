import { useState, useEffect } from 'react'

import Alert from './components/Alert';
import Title from './components/Title';
import Button from './components/Button';

function App() {
const [alert, setAlert] = useState(false);

let clickToCutPopup = () => {
  console.log("test");
  setAlert(false);
}

let handleButton = () => {
  console.log("button");
  setAlert(true);
}
useEffect(() => {
    setTimeout(() => {
      setAlert(true);
    }, 5000);
});


  return (
    <>
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center mt-5'>
         <Title/>
      </div>
      <div  className='flex justify-center mt-5'>
         <Button remove={handleButton} message={alert ? true : false} />
      </div>
      <div  className='flex justify-center mt-5'>
         { alert ? (<Alert cut={clickToCutPopup} />) : null} 
      </div>
    </div>
    </>
  )
}

export default App
