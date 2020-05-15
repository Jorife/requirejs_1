define([
// 선언할 js파일의 경로를 지정
	'./work'
], function(
// 선언할 js파일의 명칭을 지정
	Work
){
	'use strict';
	// app.js
	var Control = {
		initialize: function(){
			this.btnListener1();
			this.btnListener2();
		},

		btnListener1: function(){
			$('#test1').on('click', function(){
				console.log('btn1 clicked');	
			});
		},

		btnListener2: function(){
			$('#test2').on('click', function(){
				Work.work();
				alert('btn2 clicked');
			});
		}
	};

	return Control;	
})