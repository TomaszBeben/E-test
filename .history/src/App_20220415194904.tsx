import React, { useState ,useEffect } from 'react';
import { fetch } from './api/fetch';

import './App.css';

import Content from './components/content/Content';
import Title from './components/Title';
import { Tdata } from './types/Tdata';

function App() {

  const defaultState: Tdata = {
    id: 0,
    name: '',
    directories: [],
    files: [],
  }
  const [data, setData] = useState< Tdata >(defaultState)
  const [error, setError] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    fetch(setData, setError, setTitle)
  },[])

  return (
    <div className='app_container'>
      <Title title={title}/>
      <Content directories={data.directories} files={data.files} />
      {error}
    </div>
  );
}

export default App;
