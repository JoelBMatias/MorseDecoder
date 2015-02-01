var morse = {
	A : "._",
	B : "_...",
	C : "_._.",
	D : "_..",
	E : ".",
	F :".._.",
	G : "__.",
	H : "....",
	I : ".___",
	J : ".___",
	K : "_._",
	L : "._..",
	M : "__",
	N : "_.",
	O : "___",
	P : ".__.",
	Q : "__._",
	R : "._.",
	S : "...",
	T : "_",
	U : ".._",
	V : "..._",
	W : ".__",
	X : "_.._",
	Y : "_.__",
	Z : "__.."
};
function vMorse(bla){
var teste =bla.toUpperCase();
var text ="";
for (var i = 0; i<teste.length;i++){
	if(teste[i]==="A"){
		text+=morse.A;
}
if(teste[i]==="B"){
	text+=morse.B;
}
if(teste[i]==="C"){
	text+=morse.C;
}
if(teste[i]==="D"){
	text+=morse.D;
}

if(teste[i]==="E"){
	text+=morse.E;
}

if(teste[i]==="F"){
	text+=morse.F;
}

if(teste[i]==="G"){
	text+=morse.G;
}

if(teste[i]==="H"){
	text+=morse.H;
}

if(teste[i]==="I"){
	text+=morse.I;
}

if(teste[i]==="J"){
	text+=morse.J;
}

if(teste[i]==="K"){
	text+=morse.K;
}

if(teste[i]==="L"){
	text+=morse.L;
}

if(teste[i]==="M"){
	text+=morse.M;
}

if(teste[i]==="N"){
	text+=morse.N;
}

if(teste[i]==="O"){
	text+=morse.O;
}

if(teste[i]==="P"){
	text+=morse.P;
}

if(teste[i]==="Q"){
	text+=morse.Q;
}

if(teste[i]==="R"){
	text+=morse.R;
}

if(teste[i]==="S"){
	text+=morse.S;
}

if(teste[i]==="T"){
	text+=morse.T;
}

if(teste[i]==="U"){
	text+=morse.U;
}

if(teste[i]==="V"){
	text+=morse.V;
}

if(teste[i]==="W"){
	text+=morse.W;
}

if(teste[i]==="X"){
	text+=morse.X;
}

if(teste[i]==="Y"){
	text+=morse.Y;
}

if(teste[i]==="Z"){
	text+=morse.Z;
}

}
document.getElementById("demo1").innerHTML = teste;
document.getElementById("demo2").innerHTML = text;
document.getElementById("demo3").innerHTML = text.length;


//console.log(teste);
//console.log(text);
//console.log(text.length);
return text;
}




function playMorse(func){
	var morseToPlay = func;
	for(var i=0;i<morseToPlay.length;i++){
		if(morseToPlay[i]=="."){
			setInterval(function dot(){
				var audio = document.getElementById("dot");
				audio.play();
			}, 3000);
		}else{
			setInterval(function dash(){
				var audio = document.getElementById("dash");
				audio.play();
			},3000);
		}
	}
}
