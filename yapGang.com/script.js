setTimeout(function(){
	for(var i of [...document.querySelectorAll(".point")]){
		i.style.top = document.querySelector("#dragInterface").getBoundingClientRect().y + "px";
		i.style.opacity = 1;
	}
}, 10);