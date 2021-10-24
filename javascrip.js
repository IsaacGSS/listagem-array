var fnum = document.getElementById('numeros')
var flist = document.getElementById('lista')
var res = document.getElementById('res')
var vetor = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
   }else{
       return false
   }
}

function isLista(n, l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(vetor.includes(fnum.value)){
        alert('valor ja adicionado, tente outro...')
    } else if(isNumero(fnum.value) && isLista(fnum.value, vetor)){
        flist.innerHTML += `<option>O valor ${fnum.value} foi add.</option>`
        vetor.push(fnum.value)
        res.innerHTML = ``
    }else{
        alert('valor invalido ou ja encontrado na lista')
    }
}

function fim(){
    
    var v = vetor.sort()
    res.innerHTML = ``
    
    res.innerHTML += `<p>O menor valor é <strong>${v[0]}</strong></p>`
    res.innerHTML += `<p>O maior é <strong>${Math.max.apply(null, v )}</strong></p>`
    res.innerHTML += `<p>Foi adicionado <strong>${v.length}</strong> valores </p>`
    
}