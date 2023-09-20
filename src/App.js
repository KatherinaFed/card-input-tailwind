import { useState } from 'react';
import './App.css';
import CardForm from './components/CardForm/CardForm';
import SelectLanguage from './components/SelectLanguage/SelectLanguage';
import SentForm from './components/SentForm/SentForm';

function App() {
  const [isSend, setIsSend] = useState(false);

  return (
    <div>
      {isSend ? <SentForm /> : <CardForm handleSend={setIsSend} /> }
      
      <SelectLanguage />
    </div>
  );
}

export default App;
