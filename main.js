function calcularN() {
var n = parseInt(document.getElementById('n').value);
s=0;
e4=Math.pow(Math.PI,3)/32;
for( i = 0;i<=n ;i++){
    pi1= Math.pow(-1,i);
    pi2=(2*i)+1;
    pi3=Math.pow(pi2,3);
    s=s+(pi1/pi3);
}
document.getElementById('result').innerHTML = ("La aproximacion es "+e4+" y "+s+"")
}

