import React from 'react';
import Home from './Comp/Home';
import './App.css';
import { PlayProvider, usePlay } from './PlayProvider';
import FxHangman from './Comp/FxHangman';
const AppContent = () => {
  const { play } = usePlay();

  return play ? <FxHangman /> : <Home />;
};

function App() {
return (
  <PlayProvider>
    <div className="App">
      <AppContent />
    </div>
  </PlayProvider>
);
}


export default App;
