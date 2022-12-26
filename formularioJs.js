
var aux 

function validaNumericos(evt) {
    let valido=1
    let gul=0
    valido=GuionV()
    gul=UltimoG()
    /*aux=str.split(ndocu.value)*/

    var code = (evt.which) ? evt.which : evt.keyCode;

    if(code>=48 && code <=57 && valido>0){
      return true
     }else if(code==45 && valido >0&&gul==0){
        return true
     }
     else
        return false
    
}
function GuionV(){
    var ndocu=document.getElementById("NumeroDocu")
    aux=Array.from(ndocu.value)

    if(aux[aux.length-2]=="-"){
        return 0
    }else
        return 1
    //alert(aux[aux.length-1])
}
function UltimoG(){
    var ndocu=document.getElementById("NumeroDocu")
    aux=Array.from(ndocu.value)

    if(aux[aux.length-1]=="-")
        return 1
    else
    return 0
}