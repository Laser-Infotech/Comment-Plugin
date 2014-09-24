

$('.click-to-comment').click(function(){

	var comment = $(this).prev('input').val();

	
	$.ajax({

			type:'POST',
			
			url: 'ajax.php',

			data:{

				 	comment: comment,
				 	is_ajax: 1

			} ,

			success: function(response){


				$(this).prev('input').remove();

				$(this).parent().append('<span class="after-comment"></span>');

				$(this).siblings('.after-comment').html(response);

				alert('here');

				$(this).parent().append('<input type="text" name="child_comment" class="first_child">');


			}


	});
	

});



