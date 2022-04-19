import axios from 'axios'

export const fetch = (setData: (arg: any) => void, setError: (agr: string) => void, setTitle: (arg: string) => void, id: number) => {

    const url: string = `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/${id}`

    axios
    .get(url)
    .then(({data}) => {
        setData(data)
        setTitle(data.name)
    }).catch((err) => {
        err
            ? setError('resources not found')
            : setError('')
    })
}