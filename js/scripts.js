
$(function(){
    var socket = io.connect();
	var lastCmd = "Stop"; //default

    //sending command to server
	function sendToServer( name ){
		socket.json.emit('emit_from_client', name);
	}

 // id�����l���uF�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonF�v�ɑ��
    var $buttonF = document.getElementById( "F" );
     // �}�E�X�_�E���C�x���g�i�{�^�������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonF.onmousedown = function ( $event ) {
         // �������{�^�������{�^���̏ꍇ�̏���
        if( $event.button == 0 ){
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#F').text(), $('#slideValue').val());
				   	 lastCmd = $('#F').text();
				   	 
                 },
                 100
             );
         }
     }

     // �}�E�X�A�b�v�C�x���g�i�{�^������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonF.onmouseup = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uF�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonF�v�ɑ��
    var $buttonF = document.getElementById( "F" );
     // �^�b�`�X�^�[�g�C�x���g�i��ʂ��^�b�`�������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonF.ontouchstart = function ( $event ) {
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#F').text(), $('#slideValue').val());
				   	 lastCmd = $('#F').text();
                 },
                 100
             );
     }

     // �^�b�`�G���h�C�x���g�i��ʂ��痣�ꂽ���̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonF.ontouchend = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uL�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonL�v�ɑ��
    var $buttonL = document.getElementById( "L" );
     // �}�E�X�_�E���C�x���g�i�{�^�������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonL.onmousedown = function ( $event ) {
         // �������{�^�������{�^���̏ꍇ�̏���
        if( $event.button == 0 ){
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#L').text(), $('#slideValue').val());
				   	 lastCmd = $('#L').text();
				   	 
                 },
                 100
             );
         }
     }

     // �}�E�X�A�b�v�C�x���g�i�{�^������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonL.onmouseup = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uL�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonL�v�ɑ��
    var $buttonL = document.getElementById( "L" );
     // �^�b�`�X�^�[�g�C�x���g�i��ʂ��^�b�`�������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonL.ontouchstart = function ( $event ) {
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#L').text(), $('#slideValue').val());
				   	 lastCmd = $('#L').text();
                 },
                 100
             );
     }

     // �^�b�`�G���h�C�x���g�i��ʂ��痣�ꂽ���̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonL.ontouchend = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uR�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonR�v�ɑ��
    var $buttonR = document.getElementById( "R" );
     // �}�E�X�_�E���C�x���g�i�{�^�������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonR.onmousedown = function ( $event ) {
         // �������{�^�������{�^���̏ꍇ�̏���
        if( $event.button == 0 ){
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#R').text(), $('#slideValue').val());
				   	 lastCmd = $('#R').text();
				   	 
                 },
                 100
             );
         }
     }

     // �}�E�X�A�b�v�C�x���g�i�{�^������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonR.onmouseup = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uR�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonR�v�ɑ��
    var $buttonR = document.getElementById( "R" );
     // �^�b�`�X�^�[�g�C�x���g�i��ʂ��^�b�`�������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonR.ontouchstart = function ( $event ) {
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#R').text(), $('#slideValue').val());
				   	 lastCmd = $('#R').text();
                 },
                 100
             );
     }

     // �^�b�`�G���h�C�x���g�i��ʂ��痣�ꂽ���̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonR.ontouchend = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uB�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonB�v�ɑ��
    var $buttonB = document.getElementById( "B" );
     // �}�E�X�_�E���C�x���g�i�{�^�������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonB.onmousedown = function ( $event ) {
         // �������{�^�������{�^���̏ꍇ�̏���
        if( $event.button == 0 ){
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#B').text(), $('#slideValue').val());
				   	 lastCmd = $('#B').text();
				   	 
                 },
                 100
             );
         }
     }

     // �}�E�X�A�b�v�C�x���g�i�{�^������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonB.onmouseup = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uB�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonB�v�ɑ��
    var $buttonB = document.getElementById( "B" );
     // �^�b�`�X�^�[�g�C�x���g�i��ʂ��^�b�`�������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonB.ontouchstart = function ( $event ) {
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#B').text(), $('#slideValue').val());
				   	 lastCmd = $('#B').text();
                 },
                 100
             );
     }

     // �^�b�`�G���h�C�x���g�i��ʂ��痣�ꂽ���̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonB.ontouchend = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uU�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonU�v�ɑ��
    var $buttonU = document.getElementById( "U" );
     // �}�E�X�_�E���C�x���g�i�{�^�������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonU.onmousedown = function ( $event ) {
         // �������{�^�������{�^���̏ꍇ�̏���
        if( $event.button == 0 ){
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#U').text(), $('#slideValue').val());
				   	 lastCmd = $('#U').text();
				   	 
                 },
                 100
             );
         }
     }

     // �}�E�X�A�b�v�C�x���g�i�{�^������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonU.onmouseup = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uU�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonU�v�ɑ��
    var $buttonU = document.getElementById( "U" );
     // �^�b�`�X�^�[�g�C�x���g�i��ʂ��^�b�`�������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonU.ontouchstart = function ( $event ) {
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#U').text(), $('#slideValue').val());
				   	 lastCmd = $('#U').text();
                 },
                 100
             );
     }

     // �^�b�`�G���h�C�x���g�i��ʂ��痣�ꂽ���̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonU.ontouchend = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

 // id�����l���uD�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonD�v�ɑ��
    var $buttonD = document.getElementById( "D" );
     // �}�E�X�_�E���C�x���g�i�{�^�������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonD.onmousedown = function ( $event ) {
         // �������{�^�������{�^���̏ꍇ�̏���
        if( $event.button == 0 ){
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#D').text(), $('#slideValue').val());
				   	 lastCmd = $('#D').text();
				   	 
                 },
                 100
             );
         }
     }

     // �}�E�X�A�b�v�C�x���g�i�{�^������������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonD.onmouseup = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }


 // id�����l���uD�v�ł���v�f�ւ̎Q�Ƃ�ϐ��u$buttonD�v�ɑ��
    var $buttonD = document.getElementById( "D" );
     // �^�b�`�X�^�[�g�C�x���g�i��ʂ��^�b�`�������̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
    $buttonD.ontouchstart = function ( $event ) {
             // 100�~���b���ƂɁucountUpDown()�v�֐����Ăяo���J��Ԃ��^�C�}�[
            $intervalID = setInterval(
                 function(){
                     sendToServer($('#D').text(), $('#slideValue').val());
				   	 lastCmd = $('#D').text();
                 },
                 100
             );
     }

     // �^�b�`�G���h�C�x���g�i��ʂ��痣�ꂽ���̃C�x���g�j�ɃC�x���g�n���h�����o�C���h
     $buttonD.ontouchend = function ( $event ) {
              // �J��Ԃ��^�C�}�[�𒆎~
             clearInterval( $intervalID );
      }

    $('#stop').click(function(){
		sendToServer($('#stop').text(), $('#slideValue').val());
		lastCmd = $('#stop').text();
		
		 // �J��Ԃ��^�C�}�[�𒆎~
		clearInterval( $intervalID );
    });

});

