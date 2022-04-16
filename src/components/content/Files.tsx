import React, { FC } from 'react'

type Tfiles = {
  files: Array<{ name: string }> | [],
}

const Files: FC<Tfiles> = ({ files }) => {
  return (
    <div>
      {files.map((e, index) => (
        <div key={index}>
          {e.name}
        </div>
      ))}
    </div>
  )
}

export default Files