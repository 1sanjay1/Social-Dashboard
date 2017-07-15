
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


//show more tab in right-sidebar after clicking 
$('#tab-content-id #top ul li.see-more a').on('click',function(){
    $('#tab-content-id #top ul li.see-more').remove();
    $('#tab-content-id #top ul li').removeClass('disappear');
});
$('#tab-content-id #politics ul li.see-more a').on('click',function(){
    $('#tab-content-id #politics ul li.see-more').remove();
    $('#tab-content-id #politics ul li').removeClass('disappear');
});
$('#tab-content-id #science ul li.see-more a').on('click',function(){
    $('#tab-content-id #science ul li.see-more').remove();
    $('#tab-content-id #science ul li').removeClass('disappear');
});
$('#tab-content-id #sports ul li.see-more a').on('click',function(){
    $('#tab-content-id #sports ul li.see-more').remove();
    $('#tab-content-id #sports ul li').removeClass('disappear');
});
$('#tab-content-id #entertainment ul li.see-more a').on('click',function(){
    $('#tab-content-id #entertainment ul li.see-more').remove();
    $('#tab-content-id #entertainment ul li').removeClass('disappear');
});

//fixed suggested posts container after scrolling 

       

//var offset = $('#fixed').offset();
//$(window).scroll(function() {                  
//    var fixmeTop = offset.top;
//    var left = offset.left;
//    
//    var currentScroll = $(window).scrollTop();
//
//    if (currentScroll + 58 >= fixmeTop) {           
//        $('#fixed').css({                      
//            position: 'fixed',
//            top: '0',
//            marginTop: '58',
//            left: left
//        });
//    } else {                                  
//        $('#fixed').css({                     
//            position: 'static'
//        });
//    }
//
//});