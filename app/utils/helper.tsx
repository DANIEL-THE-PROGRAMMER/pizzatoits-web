


export const Sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}


export const GetPageNumber = (page: string) => {
    const pages  = ['/', 'about']
    return {
        index: `00${pages.indexOf(`${page}`) + 1}`,
        name: page
    }
}   