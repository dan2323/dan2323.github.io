document.getElementById("id_logic_version").innerHTML = "Logic version:2018.11.13.0";

function on_ok(strem)

{
document.getElementById("id_video").srcObject=strem


}

//-----------------------------


function on_erorr(e)

{
//console.log("eroare camera");
alert("eroare camera");

}

//-------------------------

fuction start ()
{
    var p = {audio: true, video: true};
	
	navigator.mediaDevices.getUserMedia(p).then(on_ok).catch(on_erorr);
	
	}