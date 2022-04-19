export type Tdata = {
    id: number,
    name: string,
    directories: Array<{ id: number, name: string }> | [],
    files: Array<{ name: string }> | [],
}