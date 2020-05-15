(function(root){
	/* main.js */
	requirejs.config({
		shim: {
        	// 선언한 라이브러리가 의존하는 라이브러리를 선언
		},

		paths: {
        	// 사용할 js의 라이브러리의 경로를 지정
			"jquery" : "http://code.jquery.com/jquery-latest.min",
		}
	});

	require(['jquery'],function(){
		require(['./app'], function(App){
			App.initialize();
		});
	});
})();