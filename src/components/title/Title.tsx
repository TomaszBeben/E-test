import { FC } from 'react'

type Ttitle = {
  path: string[] | [],
  setPath: (arg: any ) => void,
  setId: (arg: number) => void
}

const Title: FC<Ttitle> = ({ path, setPath, setId }) => {

  const deleteElement = (path: (string[] | []), setPath: (arg: any)=>void, index: number ) => {
    const copy = [...path]
    copy.splice(index+1, path.length)
    setPath(copy)
}
console.log(path);

  return (
    <>
    {
      path.map((element, index)=>(
        <h1 onClick={()=>{deleteElement(path, setPath, index); setId(index)}} key={index} >
          {element}
        </h1>
      ))
    }
    </>
  )
}

export default Title