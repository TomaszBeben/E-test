import React, { FC } from 'react'
import Files from './Files'
import Directories from './Directories'

type Tcontent = {
  folders: Array<{ id: number, name: string }> | [],
  files: Array<{ name: string }> | [],
  setId: (arg: number) => void,
}

const Content: FC<Tcontent> = ({ folders, files, setId }) => {

  return (
    <div>
      <button onClick={() => setId(0)}>root</button>
      <Directories folders={folders} setId={setId} />
      <Files files={files} />
    </div>
  )
}

export default Content