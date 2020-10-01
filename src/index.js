
exports.min = function min (array) { 
    if(!Array.isArray(array) || array.length === undefined || array[0] === undefined){
        return 0; 
    }
return min = Math.min.apply(null, array);
},

exports.max = function max (array) {
    if(!Array.isArray(array) || array === null || array[0] === null){
        return 0; 
    }
    return max = Math.max.apply(null, array);
  },

exports.avg = function avg (array) {
    if(!Array.isArray(array) || array === null || array[0] === null){
        return 0; 
    }
    return array.reduce((a, b) => (a + b)) / array.length;
}
