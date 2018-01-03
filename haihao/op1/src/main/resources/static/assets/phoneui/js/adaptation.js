


//适配

function plusReady(){  

	if(plus.navigator.isFullscreen()){//全屏
		
		
	}else{//不是全屏
		
		var topoffset=(Math.round(plus.navigator.getStatusbarHeight()));
		var oldheight = jQuery("header").height();
		var nowheight = parseInt(oldheight)+parseInt(topoffset);
		
		/*jQuery(".mui-bar-nav").css("height",nowheight+'px');
		
		jQuery(".mui-bar").css("height",nowheight+'px');
		jQuery(".mui-bar-nav").css("top",topoffset+'px');*/
		
		//jQuery(".mui-bar-nav").css("margin-top",topoffset+'px');
		
	//wc=plus.webview.create(null,'doccontent',{top:topoffset,bottom:'0px',bounce:'vertical',bounceBackground:'#FFFFFF'});
	}


}

if(window.plus){
	
	plusReady();
	
}else{  
	document.addEventListener("plusready",plusReady,false);  
} 