cmdshell.cmd['clear'] = {
	help : 'Clear the terminal screen',
	run : function(res){
		cmdshell.debuger('[CMD] Clear is running');
		
		$('.mod-console .content span').remove();
		$('.cmdout').html('');
		$('.cmdin').val('');
		
		return false;
	}
}

