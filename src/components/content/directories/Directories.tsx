import React, { FC } from 'react'
import './directories.css'

type Tdirectories = {
  folders: Array<{ id: number, name: string }> | [],
  setId: (arg: number) => void,
  setPath: (arg: any) => void,
  path: string[] | [],
}

const Directories: FC<Tdirectories> = ({ folders, setId, setPath, path }) => {

  const pathChange = (elem: string[] | [], name: string) => {
    setPath((elem: any) => [...elem, `/${name}`])
  }

  return (
    <>
      {folders.map((e) => (
            <div
            className='directories_element'
            key={e.id}
            onClick={()=>{setId(e.id); pathChange(path, e.name)}}>
              <div>Folder</div>
              <p>{e.name}</p>
            </div>
      ))}
    </>
  )
}

export default Directories