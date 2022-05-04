function calculer(){
    
    let N1 = parseFloat(document.getElementById("num1").value);
    let N2 = parseFloat(document.getElementById("num2").value);
    let oper = document.getElementById("operators").value;

     if(oper === "+"){
         document.getElementById("result").value = N1 +N2;
         
     }
      if(oper === "-"){
        document.getElementById("result").value = N1 -N2;
     }
      if(oper === "*"){
        document.getElementById("result").value = N1 *N2;
    }
     if(oper === "/"){
        document.getElementById("result").value = N1 /N2;
    }
        
}
