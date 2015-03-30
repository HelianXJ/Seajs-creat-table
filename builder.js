define( function (require, exports, module)
{
    exports.create_table = function (container, table_cell) {
		
		var table = document.getElementsByTagName('table')[0];
		var th_data = ['标题','内容','操作'];
		var title_data = table_cell;
		
		//创建表头
		
		var o_th = document.getElementsByTagName('th');
		
		if ( typeof o_th == 'undefined' || o_th.length <1 )
		{
			var table = document.createElement('table');
			var r = document.createElement('tr');
			table.appendChild(r);
			for(var i=0; i<3; i++) 
			{
				var th = document.createElement('th');
				var th_tex = document.createTextNode(th_data[i]);

				th.appendChild(th_tex);
				r.appendChild(th);
			}
		}
		//创建表格
		for(var i=1 ;i <= title_data.length; i++)
		{
			r = document.createElement('tr');
			var m = document.createTextNode(i);
			
			table.appendChild(r);

			for(var j=0; j<3; j++)
			{	
			    var c = document.createElement('td');
				r.appendChild(c);
				if( j==0 ) 
				{
					c.appendChild(m);
				}
				 else if( j==1 )
				 {
					var td_tex = document.createTextNode(title_data[i-1]);
					c.appendChild(td_tex);
				 }
				 else
				{
					var link_a = document.createElement('a');
					link_a.setAttribute('href',"javascript:void(0)");
					link_a.appendChild(document.createTextNode('删除'));
					c.appendChild(link_a);
				}
			}
		}

		
		document.getElementById(container).appendChild(table);
		
		table.setAttribute('width','300');
		
		var select = document.getElementById('select');

		select.onchange = function () 
		{
			_fun( this.value );
		}

		function _fun(param) 
		{

			if( param == 1) 
			{
				$(".wrap_info").show();
			}
			else if( param == 2) 
			{
				$(".wrap_info").hide();
			}
			
		}
		
		$('a').on("click", function() 
		{
			var index = $(this).closest('tr').index();
			
			$(this).closest('tr').remove();
			var table = $('table');
			
			for(var i=index; i<table.find('tr').length; i++)
			{	
				table.find('tr').eq(i).find('td:first').html(i);
				console.log(i);
				
			}
			
		});

	}
	
});