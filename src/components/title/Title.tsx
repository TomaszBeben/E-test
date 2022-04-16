import { FC } from 'react'

type Ttitle = {
  title: string,
}

const Title: FC<Ttitle> = ({title}) => {

  return (
    <h1>
        {title}
    </h1>
  )
}

export default Title