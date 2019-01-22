// alert('ứng dụng thông báo');
// var isconfirm=confirm('nội dung trang web');
// console.log(isconfirm);
//3.prompt
// var name=prompt('Enter your name');
// if(name=='null'|| name==false)
// {
// 	alert('bạn chưa nhập tên');
// }
// else{
// 	alert('chào mừng' + name);
// }
// 4.if...else
// 
//5 
// var isConfirm = confirm('bạn chắc chắn đã trên 18 tuổi?');
// if(isConfirm == false){
// 	// console.log('Người dùng chưa đủ 18 tuổi');
// 	window.location.assign('gioithieu.html');
// }
//  else{
// 	window.location.assign('18cong.html');
// }

// var isConfirm = confirm('bạn chắc chẵn đã trên 18 tuổi?');
// if (isConfirm == false) {
// 	thong_bao_va_chuyen_trang('bạn chưa đủ 18 tuổi','gioithieu.html');
// }
// else{
// 	thong_bao_va_chuyen_trang('bạn đã đủ 18 tuổi','18cong.html');
// }
// function thong_bao_va_chuyen_trang(msg,url){
// 	alert(msg);
// 	window.location.assign(url);
// }

// 
// 5.Return trong hàm javascript

// function confirm_18cong() {
// 	var result = confirm('bạn chắc chắn đã trên 18 tuổi');
// 	if(result){
// 		return('bạn đã đủ 18 tuổi');
// 	}
// 	else{
// 		return('bạn chưa đủ 18 tuổi');
// 	}
// }
// var msg=confirm_18cong();
// console.log(msg);

//6 SetTimeout
// var isConfirm=confirm('bạn chắc chắn 18 tuổi');
// if(isConfirm){
// 	var delay_thongbao = setInterval(function(){ 
// 		cosole.log ('bạn đã đủ 18 tuổi' +Math.random());
// 	},1000);
// 	clearTimeout(delay_thongbao);
// 	console.log('đã clearTimeout');
// }

// 7.setInterval
// var isConfirm =confirm('bạn chắc chắn đủ 18 tuổi');

// if(isConfirm){

// 	var second =5;
// 	var delay_thongbao=setInterval(function(){
	
// 		var second_tag =document.getElementById('timer');
// 		// console.log(second_tag);
// 		second_tag.innerHTML=second;
// 		second = second-1;
// 		second++;
// 	},1000);
// }