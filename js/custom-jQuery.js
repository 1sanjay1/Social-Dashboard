
$( window ).resize(function(event) {

	var sidebarOff = $('#sidebar').offset();
	var width = $('#sidebar').width();
	width = sidebarOff.left + width;

	// console.log("left positon " + width + " :  " + "right positon " + sidebarOff.top);

	var rightsidebarOff = $('#right-sidebar').offset();

	// console.log("rightsidebarOff positon " + rightsidebarOff.left + " :  " + "rightsidebarOff positon " + rightsidebarOff.top);

	if(rightsidebarOff.left <= width){
		$('#right-sidebar').hide();
		console.log('this is if');
	}
	else {
		$('#right-sidebar').show();
		console.log('this is else');
	}

});