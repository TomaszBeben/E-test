import React, {FC} from 'react'

type Tcontent = {
  folders: Array<{id: number, name: string}> | [],
  files: Array<{name: string}> | [],
  setId: (arg: number) => void,
}

const Content:FC<Tcontent> = ({folders, files, setId}) => {

  return (
    <div>
      {folders.map((e) => (
        <div key={e.id}>
          {e.id} {e.name}
        </div>
      ))}
      {files.map((e, index) => (
        <div key={index}>
          {e.name}
        </div>
      ))}
      <button onClick={()=> setId(0)}>0</button>
      <button onClick={()=> setId(1)}>1</button>
      <button onClick={()=> setId(2)}>2</button>
      <button onClick={()=> setId(3)}>3</button>
    </div>
  )
}

export default Content