cmdshell.cmd.cat = {
	help : 'concatenate files and print on the standard output',
	run : function(res){
		cmdshell.debuger('[CMD] Cat is running');
		
		var arr = res.split(" ");
		
		if(!arr[1]){
			return 'please try cat readme.txt';
		}else{
			if(arr[1]=="readme.txt"){
				return 'About\n====================================\nMy name is Cristian Cortez I am a Professional \nWeb Developer &amp; Programmer from  Rosario, Argentina.\n\n\nI have a particular passion for coding and automation wich I have share with the world around me.\n\n\nOver the years I have mastered several programming languages and participated in various courses \nand conferences related to software design, web coding and new technologies.\n\n\nI love what I do, and that is my spirit!\n\n\nWherever there is a regular expression that seems to be unattended... I will ll be there.\n\n\nI know it sounds like a fanaticism, but it still is my way of living\n\n\nActually, I am listening The Ruby Show. What a Show! highly recommended!\n\n\nEnjoy my new site, I am still working on it to add more JavaScript functionality... We will see what I can do...';
			}else{
				return 'please try cat readme.txt';			
			}
		}
	}
}

