/*

1
	1.1
	1.2
		1.2.1
	1.3
2	

图书目录结构格式化  test


*/



var fs = require('fs');
var data = fs.readFileSync('123.txt', 'utf8');

var lines = data.split("\r\n");
let a = [];
let b =[];

for (let i = 0; i <= lines.length-1; i++) {
	
		//章节空格数目
		let c = getkg(lines[i]);
		if(a[c] === undefined){
			//第一章
			a[c] = 1;
		}else{
			a[c] = a[c]+1;
			a.splice(c+1, a.length);
		}
		b[i] = a.join(".")+lines[i];
		
	
}
//获取空格数目
function getkg(str){
	let times =0;
	for (var i = 0; i < str.length; i++) {
		if(str[i] ==' '){
			times++;
		};
		
	}
   
	return times;
}

console.log(b);