
import React, { useEffect } from 'react'
import './App.css';

import { getList } from '@/services'
// import request from '@/utils/request';
function App() {


  useEffect(() => {
    /** 
     * 示例：也可用async await
    */
    getList().then(res => {
      console.log(res, 'sss')
    })
  }, [])

  return (
    <div className="App">
      这是创建好的react项目
    </div>
  );
}

export default App;
