import React, { FC } from 'react'

type Tpath = {
  path: string[] | [],
  setPath: (arg: any) => void,
  setId: (arg: number) => void,
}

const Path: FC<Tpath> = ({ path, setPath, setId }) => {

  const deleteElement = (path: string[] | [], setPath: (arg: any) => void, index: number) => {
    const copy = [...path]
    copy.splice(index + 1, path.length)
    setPath(copy)
  }

  const breadCrumbsFunc = (path: string[] | [], index: number) => {
    return index === path.length - 1 ? null : setId(index)
  }

  return (
    <div className='path_container' >
      {
        path.map<React.ReactNode>((elem, index) => (
          <span
            className='path_element'
            key={index}
            onClick={() => { deleteElement(path, setPath, index); breadCrumbsFunc(path, index) }}>
            <span>
              {elem}
            </span>
            <span className='path_slashSign' >
              {index === path.length - 1 ? null: '/' }
            </span>
          </span>
        ))
      }
    </div>
  )
}

export default Path