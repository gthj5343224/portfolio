function affichagetab(){
    document.write('<table border=2px width=30%>');
    for (let i = 0 ; i <= 5 ; i++){
        document.write('<tr><td>* </td><td>*</td><td>*</td></tr></td></tr>');
    
    }
    document.write('</table>');
    
    }
    
    function affichagetab2(){
    var count = prompt("Combien de lignes souhaitez vous ?");
    document.write('<table border 2px width= 30%');
    for (let i = 0; i <= count; i++){
        document.write("<tr><td>"+i+"</td><td>*</td></tr>*</td></tr>");
    }
    document.write('</table>');
    
    
    }
    
    function seconnecter(){
    var login = prompt("Donnez votre nom d'utilisateur")
    var password = prompt("Donnez votre mot de passe")
     if (login == "admin" && password == "admin"){
     document.write('Bienvenue : '  +login)
    } 
    else{
        alert("Accès refusé")
    }
    }
    
    function seconnecter2(){
        window.location.href='identification.html'
    }
    function login(){
        var a = document.getElementById("h1").value;
        var b = document.getElementById("h2").value;
        if (a =="admin" && b == "admin"){
            window.location.href='yes.html'
        }
        else{
            window.location.href='non.html'
           
        }
    
    }
    
    
    function swich(){
        var color = prompt ("Entrez une couleur");
        switch(color)
        {  case"rouge" : document.body.style.background ="red";
          break;
          case"ROUGE" : document.body.style.background ="red";
          break;
          case"bleu" : document.body.style.background ="lightblue";
          break;
          case"BLEU" : document.body.style.background ="blue";
          break;
          case"vert" : document.body.style.background ="lightgreen";
          break;
          case"VERT" : document.body.style.background ="green";
          break;
               default:alert("couleur non definie");
            }
        }
        
        function cdc() {
            var chaine= prompt("Donnez un mot");
            document.write(chaine.toUpperCase()+"<br>");
            document.write(chaine.toLowerCase()+"<br>");
            document.write("la chaine contient   "+chaine.length+" caractères()"+"<br>");
            document.write("la première lettre est  " + chaine.substr(0,1)+"<br>");
        }
        

        function seconnecter3(){
            var i = 0;
            do{
            var login=prompt("Donner votre nom d'utilisateur");
            var password= prompt("Entrer votre mot de passe");
            if(login=="admin" && password=="admin"){
                document.write('Bienvenu:' +login);
                break;
            }
            else{
                alert("Accès refusé");
                i+=1;
            }}
            while(i<3);
            alert("Délai dépassé");
           
        
        
        
        }


function aj(){
    window.location.href='exo_2.html'

}

function bonus(){
    var testa = ""
    var Total = ""
    var prixttc = 0

    do{
        var article = prompt("votre article");
        var price = prompt("le prix");
        var qty = prompt("La quantité");

        alert("vos" +article "vous côuterons" +price * qty);
        prixttc += total;
        testa +=(Article : "+ar");

    }
