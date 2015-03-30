define( function(require, exports, module) {
	
	exports.update = function ()
	{	
	
		$('.submit_btn').on("click", function() 
		{
			var text = $('textarea').val();

			$.post(//.php?submit=yes&&name=name&&content='+text
				'submit.php',
				{
					'submit' : 'yes',
					'name'   : 'name',
					'content': text
 				},
				function (res)
				{
					var clear_table = require('clear_table');
					clear_table.clear_table();
					var builder = require('builder');
					
					builder.create_table('container',res.content);
					
				},
				"json"

			)

		} );
		
	}

	
});