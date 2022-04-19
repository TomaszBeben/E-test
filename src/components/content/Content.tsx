import React, { FC } from 'react'
import Files from './Files'
import Directories from './Directories'

type Tcontent = {
  folders: Array<{ id: number, name: string }> | [],
  files: Array<{ name: string }> | [],
  setId: (arg: number) => void,
  setPath: (arg: any) => void,
  path: string[] | [],
}

const Content: FC<Tcontent> = ({ folders, files, setId, setPath, path }) => {

  return (
    <div>
      <Directories folders={folders} setId={setId} setPath={setPath} path={path} />
      <Files files={files} />
    </div>
  )
}

export default Content