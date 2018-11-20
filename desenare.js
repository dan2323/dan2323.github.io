document.getElementById("id_logic_version").innerHTML = "Logic version = 2018.11.20.6";
var canvas = document.getElementById("id_canvas");
canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("touchmove", on_touch_move);

var rect = canvas.getBoundingClientRect();
//------------------------------------
var lastX = 0;
var lastY = 0;

function on_touch(e)

{
e.preventDefault
    for(var i = 0; i < e.changeTouches.lenght; i++);

    {
	
	 var context = canvas.getContext("2d");
	 context.beginPath();
	 context.arc(e.changedTouches.item(i).pageX - rect.left, e.changedTouches.item(i).pagesY - rect.right, 
	 20,
	 0, 2 * Math.PI
	 );
	 context.stroke();
	 
	 }
	 
	 
	 }

//--------------------------------
function  on_touch_move(e)

{
e.preventDefault
    for(var i = 0; i < e.changeTouches.lenght; i++);

    {
	 context.lineWith = 40;

	 var context = canvas.getContext("2d");
	 context.beginPath();
	 context.arc(e.changedTouches.item(i).pageX - rect.left, e.changedTouches.item(i).pagesY - rect.right, 
	 20,
	 0, 2 * Math.PI
	 );
	    context.lineWith = 40;
	    context.moveTo(lastX-rect.left, lastY-rect.top);
	    context.lineTo(e.changedTouches.item(i).pageY - rect.top);
 lastX = e.changeTouches.item(i)pageX;
 lastY = e.changeTouches.item(i)pageY;    
	    
	 context.stroke();
	   
lastX = e.changeTouches.item(i)pageX;
lastY = e.changeTouches.item(i)pageY;	 
	 }
	 
	 
	 }	 
