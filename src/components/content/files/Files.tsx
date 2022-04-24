import { FC } from 'react';

import { iconSelect } from '../../../utils/iconSelect';
import { nameCut } from '../../../utils/nameCut';

type Tfiles = {
  files: Array<{ name: string }> | [],
};

const Files: FC<Tfiles> = ({ files }) => {
  return (
    <>
      {files.map((e, index) => (
        <div
        className='content_element'
        key={index}
        title={e.name}
        data-testid='files'>
          <img className='content_icon' src={iconSelect(e.name)} alt={e.name} />
          <p className='content_text' >{nameCut(e.name)}</p>
        </div>
      ))}
    </>
  );
};

export default Files;