const receivesAFunction = (callback) => {
    callback(); 
}
const returnsANamedFunction = () => {
    return function namedFunction() {
        console.log();
    }
}
const returnsAnAnonymousFunction = () => {
    return () => {
        console.log();
    }
}