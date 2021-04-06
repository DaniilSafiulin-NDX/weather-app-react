//Показ дни недели
  function showDateTime() {


				var d = new Date();
				var n1, n2, n3, n4, n5;
				var weekday = new Array(7);
					weekday[0] = "Воскресенье";
					weekday[1] = "Понедельник";
					weekday[2] = "Вторник";
					weekday[3] = "Среда";
					weekday[4] = "Четверг";
					weekday[5] = "Пятница";
					weekday[6] = "Суббота";

					 if(d.getDay() >= 3){
						   n1 = weekday[(d.getDay()+1)];
						   n2 = weekday[(d.getDay()+2)];
						   n3 = weekday[(d.getDay()+3)];
						   n4 = weekday[7-(d.getDay()+4)];} if(d.getDay() >= 4)
					     {
						   n1 = weekday[(d.getDay()+1)];
						   n2 = weekday[(d.getDay()+2)];
						   n3 = weekday[7-(d.getDay()+3)];
						   n4 = weekday[9-(d.getDay()+4)];} if(d.getDay() >= 5)
					     {
						   n1 = weekday[(d.getDay()+1)];
						   n2 = weekday[7-(d.getDay()+2)];
						   n3 = weekday[9-(d.getDay()+3)];
						   n4 = weekday[11-(d.getDay()+4)];} if(d.getDay() >= 6)
					     {
						   n1 = weekday[7-(d.getDay()+1)];
						   n2 = weekday[9-(d.getDay()+2)];
						   n3 = weekday[11-(d.getDay()+3)];
						   n4 = weekday[13-(d.getDay()+4)];}  if(d.getDay() < 3)
						 {
					       n1 = weekday[(d.getDay()+1)];
						   n2 = weekday[(d.getDay()+2)];
						   n3 = weekday[(d.getDay()+3)];
						   n4 = weekday[(d.getDay()+4)];

					     }

								document.getElementById("day1").innerHTML = n1;
								document.getElementById("day2").innerHTML = n2;
								document.getElementById("day3").innerHTML = n3;
								document.getElementById("day4").innerHTML = n4;
			}
