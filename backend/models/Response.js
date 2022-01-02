class Response {

    constructor(content, status = 200, hasError = false, errorMessage = null) {
        this.content = content;
        this.status = status;
        this.hasError = hasError;
        this.errorMessage = errorMessage;
    }
}

export default Response