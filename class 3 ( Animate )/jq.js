// AnimateNow
// Preview

$(document).ready(function(){
	$("#AnimateNow").click(function(){
		$("#Preview").animate({ 
			margin:"100px",
			opacity:"0.3",
			width:"+=10px",
			left:"50px"
		});
	});
});

