
import React, { useEffect } from 'react'
import './App.less';

import { Button } from 'antd'

import { getList } from '@/services/common'
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
      pgl <Button type='primary'>点击测试</Button>
    </div>
  );
}

export default App;
