//## IMPORTS --- --- ---
// time function from the timelord -- rename this module


//## FUNCTIONS --- --- ---
const requestsLog = (req, res, next) => { // Middleware to log requests
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

//## EXPORTS --- --- ---
export default requestsLog 