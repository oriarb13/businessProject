import './App.css';
import { useState } from 'react';

import FormComp from './components/FormComp.jsx' 
import ResultComp from './components/ResultComp.jsx'

function App() {
  const [userChoice, setUserChoice] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);
  


  return (
    <div className="App">
      choose a number
      {didUserSubmit?(
        <ResultComp userChoice={userChoice}/>
      ) :(
        <FormComp
            setUserChoice111={setUserChoice}
            setDidUserSubmit={setDidUserSubmit}
        />
      )}
    </div>

  );
}

export default App;
