import React, { FC } from 'react'
import { Link } from "react-router-dom";

type Tdirectories = {
  folders: Array<{ id: number, name: string }> | [],
  setId: (arg: number) => void,
}

const Directories: FC<Tdirectories> = ({ folders, setId }) => {



  return (
    <div>
      {folders.map((e) => (
        <div key={e.id}>
          <Link to={`/${e.name}`} onClick={() => setId(e.id)}>{e.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Directories