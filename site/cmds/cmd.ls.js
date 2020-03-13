cmdshell.cmd.ls = {
	help : 'list files and folders',
	run : function(res){
		cmdshell.debuger('[CMD] LS is running');
		
		var arr = res.split(" ");
		
		if(!arr[1]){
			return 'readme.txt';
		}else{
			if(arr[1]=="-l"){
				return '-rw-r--r-- 1 crisboot crisboot     236 2011-04-29 02:19 readme.txt';
			}else if(arr[1]=="-a"){
				return ". .. readme.txt";
			}else{
				return 'try ls -a or ls -l';			
			}
		}
	}
}

