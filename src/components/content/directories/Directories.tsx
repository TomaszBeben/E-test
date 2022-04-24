import { FC } from 'react'
import { iconSelect } from '../../../utils/iconSelect'

type Tdirectories = {
  folders: Array<{ id: number, name: string }> | [],
  setId: (arg: number) => void,
  setPath: (arg: any) => void,
  path: string[] | [],
}

const Directories: FC<Tdirectories> = ({ folders, setId, setPath, path }) => {

  const pathChange = (elem: string[] | [], name: string) => {
    setPath((elem: string[] | []) => [...elem, name])
  }

  return (
    <>
      {folders.map((e) => (
            <div
            className='content_element'
            key={e.id}
            onClick={()=>{setId(e.id); pathChange(path, e.name)}}
            data-testid='directories'>
              <img className='content_icon' src={iconSelect(e.name)} alt={e.name} />
              <p className='content_text' >{e.name}</p>
            </div>
      ))}
    </>
  )
}

export default Directories