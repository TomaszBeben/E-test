import React, { FC } from 'react'
import './files.css'

type Tfiles = {
  files: Array<{ name: string }> | [],
}

const iconSelect = (arg: string | undefined) =>{
  switch (arg){
    case 'jpg':
    return 'zdjecie'
    case 'txt':
      return 'tekst'
    default:
      return 'folder'
  }
}

const Files: FC<Tfiles> = ({ files }) => {
  return (
    <>
      {files.map((e, index) => (
        <div className='directories_element' key={index}>
          {e.name}
          <h2>{iconSelect(e.name.split('.').pop())}</h2>
          <h2>{}</h2>
        </div>
      ))}
    </>
  )
}

export default Files