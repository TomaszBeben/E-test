import React, { FC } from 'react'

type Tdirectories = {
  folders: Array<{ id: number, name: string }> | [],
  setId: (arg: number) => void,
  setPath: (arg: any) => void,
  path: string[] | [],
}

const Directories: FC<Tdirectories> = ({ folders, setId, setPath, path }) => {

  const pathChange = (elem: string[] | [], name: string) => {
    setPath((elem: any) => [...elem, name])
  }

  return (
    <>
      {folders.map((e) => (
            <div key={e.id}>
              <button onClick={()=>{setId(e.id); pathChange(path, e.name)}} >{e.name}</button>
            </div>
      ))}
    </>
  )
}

export default Directories