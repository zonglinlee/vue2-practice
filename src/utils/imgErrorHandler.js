function imgSrcHandleError(err) {
    if (err) {
        const { message, columnNumber, lineNumber, name } = err
        let url = 'http://localhost:3000/error'
        let img = new Image()
        img.src =
            url +
            `?message=${message}&name=${name}&column=${columnNumber}&line=${lineNumber}`
    }
}

export { imgSrcHandleError }
