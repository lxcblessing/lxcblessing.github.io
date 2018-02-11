new Vue({
	el:'#waibox',
	data:{
		bool:0,
		zibool1:0,
		zibool2:0,
		zibool3:0,
		zibool4:0,
		zibool5:0,
		zibool6:0,
		zibool7:0,
		zibool8:0,
		zibool9:0,
		zibool10:0,
		zibool11:0
		
	},
	mounted(){
		var _this=this
		document.documentElement.style.fontSize=document.documentElement.clientWidth/18+'px';        
			window.onresize = function() {            			document.documentElement.style.fontSize=document.documentElement.clientWidth/18+'px';        
			}; 
			
			
		var boxheight=document.getElementById("boxheight")
		var gao=window.innerHeight;
	    boxheight.style.height=gao+'px';  
	    onresize=function(){
	    	boxheight.style.height=gao+'px'; 
	    }
	    //开
	    setTimeout(()=>{
	    	_this.bool=1
	    },0);
	    
	    var swiper = new Swiper('.swiper-container',{ 
	    	direction: 'vertical',
			nextButton:'.swiper-button-next',
			height: gao,
			onSlideChangeEnd: function(swiper){
	    	  //console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide 
		      if(swiper.activeIndex>0){
		      	_this.bool=0
		      }else if(swiper.activeIndex==0){
		      	_this.bool=1
		      }
		      
		      if(swiper.activeIndex==1){
		      	_this.zibool1=1
		      	setTimeout(()=>{
		      		_this.zibool2=1;
		      	},500);
		      	
		      	setTimeout(()=>{
		      		_this.zibool3=1;
		      	},1000);
		      	
		      	setTimeout(()=>{
		      		_this.zibool4=1;
		      	},1500);
		      	
		      	setTimeout(()=>{
		      		_this.zibool5=1;
		      	},2000);
		      	
		      	setTimeout(()=>{
		      		_this.zibool6=1;
		      	},2500);
		      	
		      	setTimeout(()=>{
		      		_this.zibool7=1;
		      	},3000);
		      	
		      	setTimeout(()=>{
		      		_this.zibool8=1;
		      	},3500);
		      	
		      	setTimeout(()=>{
		      		_this.zibool9=1;
		      	},4000);
		      	
		      	setTimeout(()=>{
		      		_this.zibool10=1;
		      	},4500);
		      	setTimeout(()=>{
		      		_this.zibool11=1;
		      	},5000);
		      }else{
		      	_this.zibool1=0;
		      	_this.zibool2=0;
		      	_this.zibool3=0;
		      	_this.zibool4=0;
		      	_this.zibool5=0;
		      	_this.zibool6=0;
		      	_this.zibool7=0;
		      	_this.zibool8=0;
		      	_this.zibool9=0;
		      	_this.zibool10=0;
		      	_this.zibool11=0; 
		      }
		   	} 
	    });
	}
})
