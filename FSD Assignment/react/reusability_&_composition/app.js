// App.js
import React from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  const handleInputChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  return (
    <div>
      <Button onClick={handleButtonClick} label="Click Me" />
      <Input value="" onChange={handleInputChange} />
      <Card title="Example Card" content="This is a sample card component." />
    </div>
  );
};

export default App;