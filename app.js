function tribonacci(signature, n) {
    var result = []
    var addMe = 0;
    //loop as many times as n
    for (var i = 0; i < n; i++) {
        if (result.length < signature.length) {
            result.push(signature[i])
        } else {
            for (var j = 0; j < 3; j++) {
                //update addMe with the last three numbers in the result array
                var index = result.length - 1 - j
                addMe += result[index]
            }
            //push addMe into result
            result.push(addMe)
            addMe = 0;
        }
    }
    return result
}
