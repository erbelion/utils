// author Pavlo https://stackoverflow.com/a/43467144/5827880
export function isUrl(text: string): boolean {
    let url: URL
    try {
        url = new URL(text)
    } catch (_) {
        return false
    }
    return url.protocol === "http:" || url.protocol === "https:"
}

// get search params from url
// source Quentin https://stackoverflow.com/a/979995/5827880
export function urlParams(text?: string): object {
    if(typeof window !== 'undefined' && typeof text === 'undefined')
        text = window.location.href

    if(!isUrl(text))
        return {}

    const result = new Map()

    for (const p of new URL(text).searchParams) {
        result.set(p[0], p[1])
    }
    
    return Object.fromEntries(result)
}

// set search params to url or object
export function setUrlParams(newUrlParams: object, urlOrParams: string | object): object {
    if(typeof window !== 'undefined' && typeof urlOrParams === 'undefined')
        urlOrParams = window.location.href

    if(typeof urlOrParams === 'object')
        return { ...urlOrParams, ...newUrlParams}

    if(!isUrl(urlOrParams))
        return {}

    const params = new URL(urlOrParams).searchParams
    for (var key in newUrlParams)
    params.set(key, newUrlParams[key])

    let paramsWithoutEmpties = new URLSearchParams()
    for (const p of params)
        if(p[1] !== '')
            paramsWithoutEmpties.set(p[0], p[1])

    if(typeof window !== 'undefined' && urlOrParams === window.location.href){

        window.history.replaceState({}, '', Array.from(paramsWithoutEmpties).length > 0 ? `${window.location.pathname}?${paramsWithoutEmpties}` : window.location.pathname)
    }

    const result: Map<string, string> = new Map()
    for (const p of paramsWithoutEmpties)
        result.set(p[0], p[1])

    return Object.fromEntries(result)
}
