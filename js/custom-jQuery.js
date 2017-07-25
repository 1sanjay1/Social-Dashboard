
$(window).resize(function(event) {

	var sidebarOff = $('.connect').offset();
	var width = $('.connect').width();
	var rightOffset = sidebarOff.left + width;

	// console.log("left positon " + width + " :  " + "right positon " + sidebarOff.top);

    var screenWidth = screen.width;
    var remaining = screenWidth - 250;
    
//	var rightsidebarOff = $('#right-sidebar').offset();
    
    console.log(rightOffset);
    console.log(remaining);
	// console.log("rightsidebarOff positon " + rightsidebarOff.left + " :  " + "rightsidebarOff positon " + rightsidebarOff.top);

	if(remaining <= rightOffset || screenWidth < 992){
        console.log('overlap')
        $('#right-sidebar').hide();
	}
	else {
		console.log('separate');
        $('#right-sidebar').show();
	}

});


//js code to fix sidebar suggested pages after scrolling.
//page will be fixed when it will go upto top.
var offset;
var clickFlag = 0;
//show more tab in right-sidebar after clicking 
$('#tab-content-id #top ul li.see-more a').on('click',function(){
    $('#tab-content-id #top ul li.see-more').remove();
    $('#tab-content-id #top ul li').removeClass('disappear');
    clickFlag = 1;
});
$('#tab-content-id #politics ul li.see-more a').on('click',function(){
    $('#tab-content-id #politics ul li.see-more').remove();
    $('#tab-content-id #politics ul li').removeClass('disappear');
    clickFlag = 1;
});
$('#tab-content-id #science ul li.see-more a').on('click',function(){
    $('#tab-content-id #science ul li.see-more').remove();
    $('#tab-content-id #science ul li').removeClass('disappear');
    clickFlag = 1;
});
$('#tab-content-id #sports ul li.see-more a').on('click',function(){
    $('#tab-content-id #sports ul li.see-more').remove();
    $('#tab-content-id #sports ul li').removeClass('disappear');
    clickFlag = 1;
});
$('#tab-content-id #entertainment ul li.see-more a').on('click',function(){
    $('#tab-content-id #entertainment ul li.see-more').remove();
    $('#tab-content-id #entertainment ul li').removeClass('disappear');
    clickFlag = 1;
});

//fixed suggested posts container after scrolling 
$('#rightsideicon ul>li i').on('click',function(){
    clickFlag = 1;
});

offset = $('.fixed').offset();

$(window).scroll(function() {  
    
    if(clickFlag == 1)
    {    
        offset = $('.fixed').offset();
        clickFlag = 0;
    }
    var fixmeTop = offset.top;
    
//    console.log('div offset = ' + fixmeTop);
    
    var currentScroll = $(window).scrollTop();

//    console.log('current scroll = ' + currentScroll);
    
    if (currentScroll + 66 > fixmeTop) {           
        $('#fixed-sidebar').addClass('affix');
    } else {                                  
        $('#fixed-sidebar').removeClass('affix');
    }

});