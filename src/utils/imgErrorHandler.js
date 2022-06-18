function imgSrcHandleError(err) {
    if (err) {
        const { message, columnNumber, lineNumber, name } = err
        let url = 'http://localhost:3000/error'
        let img = new Image()
        img.src =
            url +
            `?message=${message}&name=${name}&column=${columnNumber}&line=${lineNumber}`
        // 加这个 console.error 是为了将错误抛出到控制台
        console.error(err)
    }
}
export function sum(a, b) {
    return a + b
}
export { imgSrcHandleError }
