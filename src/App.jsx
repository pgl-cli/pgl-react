
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import './App.less';

import { Button } from 'antd'

function App() {


  const handleClick = () => {
    console.log('pgl')
  }

  return (
    <div className="App">
     <Button type='primary' onClick={handleClick}>点击测试</Button>
    </div>
  );
}

export default App;
