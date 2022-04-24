import { FC } from 'react';

type Tpath = {
  path: string[] | [],
  setPath: (arg: any) => void,
  setId: (arg: number) => void,
};

const Path: FC<Tpath> = ({ path, setPath, setId }) => {
  // function to delete roots from path
  const deleteElement = (path: string[] | [], setPath: (arg: any) => void, index: number) => {
    const copy = [...path];
    copy.splice(index + 1, path.length);
    setPath(copy);
  };
  //function that prevent to change path if user is on current location
  const lastPathOff = (path: string[] | [], index: number) => {
    return index === path.length - 1 ? null : setId(index)
  };

  return (
    <div className='path_container' >
      {
        path?.map((elem, index) => (
          <span
            className='path_element'
            key={index}
            onClick={() => { deleteElement(path, setPath, index); lastPathOff(path, index) }}
            >
            <span data-testid='path'>
              {elem}
            </span>
            <span className='path_separator' >
              {index === path.length - 1 ? null: '/' }
            </span>
          </span>
        ))
      }
    </div>
  );
};

export default Path;