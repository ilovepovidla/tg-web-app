import './App.css';
// import {useEffect} from "react";

const tg = window.Telegram.WebApp = App;

function App() {
    // useEffect(() => {
    //     tg.ready();
    //     console.log('App mounted');
    // }, []);
    const onClose = () => {
        tg.close();
        console.log('onClosed');
    }

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
