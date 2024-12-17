import './app.css';
import { useState } from 'react';

import FormComp from './components/front/FormComp.jsx' 
import ResultComp from './components/back/ResultComp.jsx'

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);
  


  return (
  <div className="App">
    <div className='main-wrap'>
      {didUserSubmit?(
        <ResultComp userChoice={userChoice}/>
      ) :(
        <FormComp
            setUserChoice111={setUserChoice}
            setDidUserSubmit={setDidUserSubmit}
        />
      )}
    </div>

  </div>

  );
}

export default App;
