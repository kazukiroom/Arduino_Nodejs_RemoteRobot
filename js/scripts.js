
$(function(){
    var socket = io.connect();
	var lastCmd = "Stop"; //default

    //sending command to server
	function sendToServer( name ){
		socket.json.emit('emit_from_client', name);
	}

 // id属性値が「F」である要素への参照を変数「$buttonF」に代入
    var $buttonF = document.getElementById( "F" );
     // マウスダウンイベント（ボタンを押した時のイベント）にイベントハンドラをバインド
    $buttonF.onmousedown = function ( $event ) {
         // 押したボタンが左ボタンの場合の処理
        if( $event.button == 0 ){
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#F').text(), $('#slideValue').val());
				   	 lastCmd = $('#F').text();
				   	 
                 },
                 100
             );
         }
     }

     // マウスアップイベント（ボタンを放した時のイベント）にイベントハンドラをバインド
     $buttonF.onmouseup = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「F」である要素への参照を変数「$buttonF」に代入
    var $buttonF = document.getElementById( "F" );
     // タッチスタートイベント（画面をタッチした時のイベント）にイベントハンドラをバインド
    $buttonF.ontouchstart = function ( $event ) {
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#F').text(), $('#slideValue').val());
				   	 lastCmd = $('#F').text();
                 },
                 100
             );
     }

     // タッチエンドイベント（画面から離れた時のイベント）にイベントハンドラをバインド
     $buttonF.ontouchend = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「L」である要素への参照を変数「$buttonL」に代入
    var $buttonL = document.getElementById( "L" );
     // マウスダウンイベント（ボタンを押した時のイベント）にイベントハンドラをバインド
    $buttonL.onmousedown = function ( $event ) {
         // 押したボタンが左ボタンの場合の処理
        if( $event.button == 0 ){
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#L').text(), $('#slideValue').val());
				   	 lastCmd = $('#L').text();
				   	 
                 },
                 100
             );
         }
     }

     // マウスアップイベント（ボタンを放した時のイベント）にイベントハンドラをバインド
     $buttonL.onmouseup = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「L」である要素への参照を変数「$buttonL」に代入
    var $buttonL = document.getElementById( "L" );
     // タッチスタートイベント（画面をタッチした時のイベント）にイベントハンドラをバインド
    $buttonL.ontouchstart = function ( $event ) {
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#L').text(), $('#slideValue').val());
				   	 lastCmd = $('#L').text();
                 },
                 100
             );
     }

     // タッチエンドイベント（画面から離れた時のイベント）にイベントハンドラをバインド
     $buttonL.ontouchend = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「R」である要素への参照を変数「$buttonR」に代入
    var $buttonR = document.getElementById( "R" );
     // マウスダウンイベント（ボタンを押した時のイベント）にイベントハンドラをバインド
    $buttonR.onmousedown = function ( $event ) {
         // 押したボタンが左ボタンの場合の処理
        if( $event.button == 0 ){
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#R').text(), $('#slideValue').val());
				   	 lastCmd = $('#R').text();
				   	 
                 },
                 100
             );
         }
     }

     // マウスアップイベント（ボタンを放した時のイベント）にイベントハンドラをバインド
     $buttonR.onmouseup = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「R」である要素への参照を変数「$buttonR」に代入
    var $buttonR = document.getElementById( "R" );
     // タッチスタートイベント（画面をタッチした時のイベント）にイベントハンドラをバインド
    $buttonR.ontouchstart = function ( $event ) {
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#R').text(), $('#slideValue').val());
				   	 lastCmd = $('#R').text();
                 },
                 100
             );
     }

     // タッチエンドイベント（画面から離れた時のイベント）にイベントハンドラをバインド
     $buttonR.ontouchend = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「B」である要素への参照を変数「$buttonB」に代入
    var $buttonB = document.getElementById( "B" );
     // マウスダウンイベント（ボタンを押した時のイベント）にイベントハンドラをバインド
    $buttonB.onmousedown = function ( $event ) {
         // 押したボタンが左ボタンの場合の処理
        if( $event.button == 0 ){
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#B').text(), $('#slideValue').val());
				   	 lastCmd = $('#B').text();
				   	 
                 },
                 100
             );
         }
     }

     // マウスアップイベント（ボタンを放した時のイベント）にイベントハンドラをバインド
     $buttonB.onmouseup = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「B」である要素への参照を変数「$buttonB」に代入
    var $buttonB = document.getElementById( "B" );
     // タッチスタートイベント（画面をタッチした時のイベント）にイベントハンドラをバインド
    $buttonB.ontouchstart = function ( $event ) {
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#B').text(), $('#slideValue').val());
				   	 lastCmd = $('#B').text();
                 },
                 100
             );
     }

     // タッチエンドイベント（画面から離れた時のイベント）にイベントハンドラをバインド
     $buttonB.ontouchend = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「U」である要素への参照を変数「$buttonU」に代入
    var $buttonU = document.getElementById( "U" );
     // マウスダウンイベント（ボタンを押した時のイベント）にイベントハンドラをバインド
    $buttonU.onmousedown = function ( $event ) {
         // 押したボタンが左ボタンの場合の処理
        if( $event.button == 0 ){
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#U').text(), $('#slideValue').val());
				   	 lastCmd = $('#U').text();
				   	 
                 },
                 100
             );
         }
     }

     // マウスアップイベント（ボタンを放した時のイベント）にイベントハンドラをバインド
     $buttonU.onmouseup = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「U」である要素への参照を変数「$buttonU」に代入
    var $buttonU = document.getElementById( "U" );
     // タッチスタートイベント（画面をタッチした時のイベント）にイベントハンドラをバインド
    $buttonU.ontouchstart = function ( $event ) {
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#U').text(), $('#slideValue').val());
				   	 lastCmd = $('#U').text();
                 },
                 100
             );
     }

     // タッチエンドイベント（画面から離れた時のイベント）にイベントハンドラをバインド
     $buttonU.ontouchend = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

 // id属性値が「D」である要素への参照を変数「$buttonD」に代入
    var $buttonD = document.getElementById( "D" );
     // マウスダウンイベント（ボタンを押した時のイベント）にイベントハンドラをバインド
    $buttonD.onmousedown = function ( $event ) {
         // 押したボタンが左ボタンの場合の処理
        if( $event.button == 0 ){
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#D').text(), $('#slideValue').val());
				   	 lastCmd = $('#D').text();
				   	 
                 },
                 100
             );
         }
     }

     // マウスアップイベント（ボタンを放した時のイベント）にイベントハンドラをバインド
     $buttonD.onmouseup = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }


 // id属性値が「D」である要素への参照を変数「$buttonD」に代入
    var $buttonD = document.getElementById( "D" );
     // タッチスタートイベント（画面をタッチした時のイベント）にイベントハンドラをバインド
    $buttonD.ontouchstart = function ( $event ) {
             // 100ミリ秒ごとに「countUpDown()」関数を呼び出す繰り返しタイマー
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#D').text(), $('#slideValue').val());
				   	 lastCmd = $('#D').text();
                 },
                 100
             );
     }

     // タッチエンドイベント（画面から離れた時のイベント）にイベントハンドラをバインド
     $buttonD.ontouchend = function ( $event ) {
              // 繰り返しタイマーを中止
             clearInterval( $intervalID );
      }

    $('#stop').click(function(){
		sendToServer($('#stop').text(), $('#slideValue').val());
		lastCmd = $('#stop').text();
		
		 // 繰り返しタイマーを中止
		clearInterval( $intervalID );
    });

});

