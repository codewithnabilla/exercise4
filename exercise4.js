function trianglePattern(n){
    var output = " ";
    for(var i = 1; i <= n; i++){
        for(var j = 1; j <= i; j++){
            output += j + " ";
        }
        console.log(output);
        output = " ";
    }
}

trianglePattern(5)
