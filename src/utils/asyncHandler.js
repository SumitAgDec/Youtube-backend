const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(req,res,next).catch((err)=> next(err))
    }

}

// const asyncHandler = (fu) = async (req,res,next) => {
//     try {
//         await res(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message: err.message,
//         })
//     }
// }

export {asyncHandler}