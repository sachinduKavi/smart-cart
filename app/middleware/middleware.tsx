const timeDelay = (miniSeconds: number) => {
    new Promise<void>(resolve => {
        setTimeout(() => {resolve()}, miniSeconds)
    })
} 

export {
    timeDelay
}