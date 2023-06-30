let num = Number(prompt('Digite seu número'))
let cont = 1
while((cont-1) != num){
    if(num < 0){
        alert("Apenas Números Positivos")
        break;
    }
    if(!Number(num)){
        alert("Apenas Números")
        break;
    }
    console.log(cont)
    cont++
}