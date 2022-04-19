import { useState, useEffect } from 'react'
import { fetch } from '../../api/fetch'
import './App.css'

import Content from '../content/content/Content'
import Path from '../path/Path'

import { Tdata } from '../../types/Tdata'

function App() {

  const defaultState: Tdata = {
    id: 0,
    name: 'root',
    directories: [],
    files: [],
  }

  const [data, setData] = useState < Tdata > (defaultState)
  const [error, setError] = useState < string > ('')
  const [id, setId] = useState < number > (0)
  const [path, setPath] = useState < [string] > (['root'])// name of root (to change)

  useEffect(() => {
    fetch(setData, setError, id)
  }, [id])
  console.log(id);
  return (
    <div className='app_container'>
      <Path path={path} setPath={setPath} setId={setId} />
      <Content folders={data.directories} files={data.files} setId={setId} setPath={setPath} path={path} />
      {error}
    </div>
  );
}

export default App;