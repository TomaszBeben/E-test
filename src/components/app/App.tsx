import { useState, useEffect } from 'react';

import Content from '../content/content/Content';
import Path from '../path/Path';

import { fetch } from '../../api/fetch';
import { Tdata } from '../../types/Tdata';

function App() {

  // default state of data
  const defaultState: Tdata = {
    id: 0,
    name: 'root',
    directories: [],
    files: [],
  };

  const [data, setData] = useState < Tdata > (defaultState);
  const [error, setError] = useState < string > ('');
  const [id, setId] = useState < number > (0);
  const [path, setPath] = useState < [string] > ([defaultState.name]);

  // useEffect to react on changeable id
  useEffect(() => {
    fetch(setData, setError, id)
  }, [id]);

  return (
    <div className='app_container'>
      <Path path={path} setPath={setPath} setId={setId} />
      <Content path={path} setPath={setPath} setId={setId} folders={data.directories} files={data.files} />
      {error}
    </div>
  );
};

export default App;