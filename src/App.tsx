import { useState ,useEffect } from 'react';
import { fetch } from './api/fetch';
import './App.css';

import Content from './components/content/Content';
import Title from './components/title/Title';

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
  const [id, setId] = useState<number>(0)

  useEffect(() => {
    fetch(setData, setError, setTitle, id)
  },[id])

  return (
    <div className='app_container'>
      <Title title={title}/>
      <Content folders={data.directories} files={data.files} setId={setId}/>
      {error}
    </div>
  );
}

export default App;
