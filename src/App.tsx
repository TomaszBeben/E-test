import { useState, useEffect } from 'react';
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

  const [data, setData] = useState<Tdata>(defaultState)
  const [error, setError] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [id, setId] = useState<number>(0)
  const [path, setPath] = useState<any>(['root'])

  useEffect(() => {
    fetch(setData, setError, setTitle, id)
  }, [id])

  console.log(title);

  return (
    <div className='app_container'>
      <Title path={path} setPath={setPath} setId={setId} />
      <Content folders={data.directories} files={data.files} setId={setId} setPath={setPath} path={path} />
      {error}
    </div>
  );
}

export default App;