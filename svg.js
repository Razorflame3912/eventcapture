var svg = document.getElementById("svg");
var clearbutton = document.getElementById("clear");


var clear = function(e){
    svg.innerHTML = "";
};


var addCircle = function(e){
    var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("r","25");
    dot.setAttribute("cx",e.offsetX);
    dot.setAttribute("cy",e.offsetY);
    dot.setAttribute("fill","#FF0000");
    dot.setAttribute("stroke","#000000");
    dot.setAttribute("clicked","0");
    dot.addEventListener("click",circleClick);
    svg.appendChild(dot);
    return dot;
};

var circleClick = function(e){
    e.stopPropagation();
    if(this.getAttribute("clicked") == "0"){
	r = Math.floor((255*Math.random()))
	g = Math.floor((255*Math.random()))
	b = Math.floor((255*Math.random()))
	this.setAttribute("fill","rgb(" + r + "," + g + "," + b + ")");
	this.setAttribute("clicked","1");
    }
    else{
	var created = addCircle(e)
	created.setAttribute("cx",Math.floor((500*Math.random())));
	created.setAttribute("cy",Math.floor((500*Math.random())));
	svg.removeChild(this);
    }
};


clearbutton.addEventListener("click",clear);
svg.addEventListener("click",addCircle);
