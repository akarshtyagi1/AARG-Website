import './App.css';
import {useState} from 'react';
import Header from './components/Header/header';
import MainSection from './components/MainSection/main-section';
import GetQuote from './components/GetQuoteForm/GetQuote';

function App() {

  const [showGetQuote, setShowGetQuote] = useState(false);

  return (
    <>
      <div className='App'>
        <Header setShowGetQuote={setShowGetQuote} />
        <MainSection setShowGetQuote={setShowGetQuote} />
        <GetQuote showGetQuote={showGetQuote} setShowGetQuote={setShowGetQuote} />
      </div>
    </>
  );
}

export default App;
