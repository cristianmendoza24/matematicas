

    function logueo(){
        let usuario=document.getElementById("usuario").value;
        let pass=document.getElementById("pass").value;
        if(usuario=="nombre" && pass=="1234"){
            //alert("ingreso autorizado");
            window.open("mate.html" , "_blank");
        }else{
            alert("contraseña incorrecta");
        }
    }
    
    function suma(){
        
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value);
        let sum=num1+num2
        document.getElementById("respuesta").innerHTML=sum; 

    }
    
    function resta(){

        let n1=parseInt(document.getElementById("n1").value);
        let n2=parseInt(document.getElementById("n2").value);
        let rest=n1-n2;
        document.getElementById("respuest").innerHTML=rest;
        
     }
     function multiplicar(){
        
        let m1=parseInt(document.getElementById("m1").value);
        let m2=parseInt(document.getElementById("m2").value);
        let mult=m1*m2;
        document.getElementById("resultado").innerHTML=mult;
        
     }
     function division(){
        
        let d1=parseInt(document.getElementById("d1").value);
        let d2=parseInt(document.getElementById("d2").value);
        let divi=d1/d2;
        document.getElementById("resulta").innerHTML=divi;
        
     }
    