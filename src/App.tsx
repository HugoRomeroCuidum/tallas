import { useState } from 'react';
import './App.css';
import { SizeSelector } from './components/SizeSelector';

const App = () => {
  const [currentSize, setCurrentSize] = useState('none');

  const handleSizeChange = (size: string) => {
    setCurrentSize(size);
  };

  return (
    <div className='App App-header'>
      <h1>Talla seleccionada: {currentSize}</h1>
      <SizeSelector
        selectedSize={currentSize}
        onSizeChange={handleSizeChange}
      />
    </div>
  );
};

export default App;
