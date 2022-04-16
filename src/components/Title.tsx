import { FC } from 'react'

type props = {
  title: string,
}

const Title: FC<props> = ({title}) => {
  return (
    <h1>
        {title}
    </h1>
  )
}

export default Title