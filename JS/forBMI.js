
// $(document).ready(function() {
//    $('.showmenu').on('click',  function(e){
//       e.preventDefault();
//       $('body').toggleClass('menu-show');
//   });




// 設定變數


var heigh

var weight




var list=document.querySelector('.list');

var resultButton=document.querySelector('.result');

var BMIarray=JSON.parse(localStorage.getItem('ListBody')) || [];

updatalist(BMIarray)





// 函數 更新資料庫 頁面 刪除



// 增加項目 更新localstorage
function addData(e){

	e.preventDefault();

		 height=document.querySelector('.height').value;

		 weight=document.querySelector('.weight').value;

	var d = new Date();

	var month = d.getMonth()+1;
	var day   = d.getDate();
	var year  = d.getFullYear();


	var time =d.getMonth()+1+'-'+ d.getDate()+'-'+d.getFullYear();

	

	
	var hh=height*height/10000;

	var BMIvalue= weight/hh

	var num =BMIvalue.toFixed(2);


	var bodydata ={
		BMII:num,
		heightt:height,
		weightt:weight,
		date:time
	};

	

	BMIarray.push(bodydata);


	localStorage.setItem('ListBody',JSON.stringify(BMIarray));

	updatalist(BMIarray);
	
}



// 更新頁面
function updatalist(e){
	var str='';
	var len=BMIarray.length;

	for(var i=0;i<len;i++){

		var bm=BMIarray[i].BMII;
		var hi=BMIarray[i].heightt;
		var wg=BMIarray[i].weightt;
		var dt=BMIarray[i].date;
		
		if(bm<18.5)
		{str+='<li data-num=' + i + '><span class="blue"></span><span class="all"><h3>過輕體態</h3>'+'<span class="tiny">BMI</span><span class="big">'+bm+'</span><span class="tiny">weigh</span><span class="big">'+wg+'kg </span><span class="tiny">height</span><span class="big">'+hi+'cm</span>'+dt+'</span></li>';}
		else if(bm>=18.5 && bm<25)
		{str+='<li data-num=' + i + '><span class="green"></span><span class="all"><h3>理想體態</h3>'+'<span class="tiny">BMI</span><span class="big">'+bm+'</span><span class="tiny">weigh</span><span class="big">'+wg+'kg </span><span class="tiny">height</span><span class="big">'+hi+'cm</span>'+dt+'</span></li>';}
		else if(bm>=25 && bm<30)
		{str+='<li data-num=' + i + '><span class="orange"></span><span class="all"><h3>輕度過胖</h3>'+'<span class="tiny">BMI</span><span class="big">'+bm+'</span><span class="tiny">weigh</span><span class="big">'+wg+'kg </span><span class="tiny">height</span><span class="big">'+hi+'cm</span>'+dt+'</span></li>';}
		else	
		{str+='<li data-num=' + i + '><span class="red"></span><span class="all"><h3>嚴重過胖</h3>'+'<span class="tiny">BMI</span><span class="big">'+bm+'</span><span class="tiny">weigh</span><span class="big">'+wg+'kg </span><span class="tiny">height</span><span class="big">'+hi+'cm</span>'+dt+'</span></li>';}
	}
		

	list.innerHTML=str;
	}

	


// 減少項目

function Lesslist(e){
	e.preventDefault();
	if(e.target.nodeName!=="LI"&&e.target.nodeName!=="SPAN"){return};
	var num=e.target.dataset.num;
	BMIarray.splice(num,1);
	localStorage.setItem('ListBody',JSON.stringify(BMIarray));

	updatalist(BMIarray);
}







// 監聽事件

resultButton.addEventListener('click',addData,false)

list.addEventListener('click',Lesslist,false);





$(document).ready(function() {
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });

});

