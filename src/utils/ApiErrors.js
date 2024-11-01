class ApiErrors extends Error {
    constructor(
        stateCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.stateCode = stateCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiErrors}