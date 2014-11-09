$(function(){
	$('#login').on('submit', function(event){
		event.preventDefault();
		var $username = $('#username').val(),
		$password = $('#password').val();
		console.log('username', $username);
		var data = {

		};

		$.ajax({
			url: '/admin/login',
			type: 'POST',
			data: {data:data},
			success: function(data){
				window.location.href = data.redirect;
			}
		})
	});
});