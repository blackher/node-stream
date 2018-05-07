var esprima = require('esprima');
    var code = 'function ast(){}';
    var ast = esprima.parse(code);
    console.log(ast);


    //test ast 