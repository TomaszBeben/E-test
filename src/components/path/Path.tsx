import { FC } from 'react'
import './path.css'

type Tpath = {
  path: string[] | [],
  setPath: (arg: any) => void,
  setId: (arg: number) => void
}

const Path: FC< Tpath > = ({ path, setPath, setId }) => {

  const deleteElement = (path: string[] | [], setPath: (arg: any) => void, index: number) => {
    const copy = [...path]
    copy.splice(index + 1, path.length)
    setPath(copy)
  }

  //need to have last index
  return (
    <div className='path_container' >
      {
        path.map((elem, index) => (
          <span
          className='path_element'
          key={index}
          onClick={() => { deleteElement(path, setPath, index); setId(index) }}>
            {elem}
          </span>
        ))
      }
    </div>
  )
}

export default Path