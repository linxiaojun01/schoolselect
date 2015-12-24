//工作信息中工作时间
window.onload = function() {
				 var today_year = new Date().getFullYear();//获取今年
				 for(var j=today_year;j>=1900;j--)
				{
					$('<option value="'+j+'">'+j+'</li>').appendTo("#sy");
				}
				
				for(var j=1;j<=12;j++)
				{
					$('<option value="'+j+'">'+j+'</option>').appendTo("#mm1");
				}
				for(var j=1;j<=12;j++)
				{
					$('<option value="'+j+'">'+j+'</option>').appendTo("#mm2");
				}
			   
				};
function year(str){
				var today_year = new Date().getFullYear();//获取今年
			   	var sele_day = $('#sy option:selected').text();
				var select=document.getElementById("ey");
    			select.length=0;
				$('<option>年</option>').appendTo("#ey");
				$('<option>至今</option>').appendTo("#ey");
				 for(var j=sele_day;j<=today_year;j++)
				{
					$('<option value="'+j+'">'+j+'</option>').appendTo("#ey");
				}
				}