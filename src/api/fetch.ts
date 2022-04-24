import axios from 'axios'

export const fetch = (setData: (arg: any) => void, setError: (agr: string) => void, id: number) => {
    // url of api
    const url: string = `https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories/${id}`
    // definition of axios fetch
    axios
    .get(url)
    .then(({data}) => {
        setData(data)
    }).catch((err) => {
        err
            ? setError('resources not found')
            : setError('')
    })
}