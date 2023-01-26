// source Dan Dascalescu https://stackoverflow.com/a/39914235/5827880
export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
