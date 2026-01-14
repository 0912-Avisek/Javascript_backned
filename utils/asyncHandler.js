
const asyncHandler = (requestHandler) => (req, res, next) => {
   return Promise.resolve(requestHandler(req, res, next))
    .catch((error)=> next(error));
};


export  { asyncHandler } 



// asynchandler =() =>{}
// ayncHandler  =(step) =>{}
// ayncHandler  =(avi) => {()={}}   
// aynchandler  =(avi) => () => {}   