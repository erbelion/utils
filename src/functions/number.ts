// author erbelion https://stackoverflow.com/a/74112691/5827880
export function compactNumber(number: number): string {
    return Intl.NumberFormat('en', { notation: 'compact' }).format(number)
}

export function random(min: number = 1, max: number): number {
    if (max == null) {
        max = min
        min = 0
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min
}
