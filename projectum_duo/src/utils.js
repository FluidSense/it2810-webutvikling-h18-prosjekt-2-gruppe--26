export function cloneObject(obj) {
    // Recursively deep clone object to avoid object pointer problems.
    var clone = {};
    for(var i in obj) {
        if(obj[i] !== null &&  typeof(obj[i])==="object")
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}