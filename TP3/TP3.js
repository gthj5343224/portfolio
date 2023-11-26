function calcul(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t3").value;
    var c = document.getElementById("t5").value;

    var d = document.getElementById("t2").value;
    var e = document.getElementById("t4").value;
    var f = document.getElementById("t6").value;

    var s= Number(a)*Number(d) + Number(b)*Number(e) + Number(c)*Number(f);
    var sc=Number(d)+Number(e)+Number(f);
    var t= s/sc;

    t7.value=t;
    if(t<8)
       t8.value=("Redoublement...");
    else if (t<10)
       t8.value=("Rattrapages");
    else if (t<12)
       t8.value=("Admis Passable");
    else if (t<14)
       t8.value=("Admis Mention Assez bien");
    else if (t<16)
       t8.value=("Admis Mention bien");
    else if (t<=20)
       t8.value=("Admis Menion Très bien");
    else 
    alert ("Erreur");
} 

    