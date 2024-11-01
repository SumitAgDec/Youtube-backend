class ApiErrors extends Error {
    constructor(
        stateCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.stateCode = stateCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(statck){
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiErrors}