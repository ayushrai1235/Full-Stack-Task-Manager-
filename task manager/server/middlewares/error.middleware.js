const routeNotFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    return next(error);
};

const errorHandler = (error, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = error.message;
    if(error.name === "CastError" && error.kind === "ObjectId") {
        statusCode = 404;
        message = "Resource not found";
    }

    return res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV !== "production" ?null : error.stack 
    })

}

export {routeNotFound, errorHandler}