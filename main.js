
var sec = 0, t;


function starte(){

sec++;
	
	document.getElementById("god").innerHTML = Math.floor(sec/3600%60);
	document.getElementById("hv").innerHTML = Math.floor(sec/60%60);
	document.getElementById("sc").innerHTML = (sec%60);

	t = setTimeout(starte, 100);

	document.getElementById("str").disabled = true;	

}
function pause(){
    clearTimeout(t);

	document.getElementById("str").disabled = false;	

}

function stope(){
    clearTimeout(t);
    wywid();
	document.getElementById("str").disabled = false;	
		

    sec = 0; 
}    
function wywid(){
	document.getElementById("god").innerHTML = "00";
	document.getElementById("hv").innerHTML = "00";
	document.getElementById("sc").innerHTML = "00";

}