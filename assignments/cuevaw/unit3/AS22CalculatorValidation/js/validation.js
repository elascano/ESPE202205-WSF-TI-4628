let op;
document.querySelector('#addition').addEventListener('click', () =>{
    op = '+';
});
document.querySelector('#subtraction').addEventListener('click', () =>{
    op = '-';
});
document.querySelector('#multiplication').addEventListener('click', () =>{
    op = '*';
});

document.querySelector('#calculate').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = parseInt(document.querySelector('#n2').value);
    //const op = document.querySelector('#op').value;
    let result;
    if(op == '+'){
        result = n1 + n2;
    }else if( op == '-'){
        result = n1 - n2;
    }else if(op == '*'){
        result = n1 * n2;
    }
    document.querySelector('#result').innerHTML = result;
});