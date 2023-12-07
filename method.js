function f() {
  var x = document.getElementById("select1");
  var y = document.getElementById("select2");
  var ix = x.selectedIndex;
  var iy = y.selectedIndex;
  var r;
  var result;
  var input = parseInt( document.getElementById("input").value)
  if(ix===0 && iy===0){
	  r=input;
	  result= r + " °C";
	  document.getElementById("result").value = result 
	  }
  	else if(ix===0 && iy===1){
		r=input * 9/5 + 32;
		result= r + " °F";
	  	//result="Celsius to Fahrenheit: " +r+ "°F";
		document.getElementById("result").value = result
	  }
	else if(ix===0 && iy===2){
		r=input + 273.15;
		result= r + " °K";
		//result="Celsius to Kelvin: " +r;
		document.getElementById("result").value = result
		}
	else if(ix===1 && iy===0){
		r=(input - 32) * 5/9;
		result= r + " °C";
		//result="Fahrenheit to Celsius: " +r;
		document.getElementById("result").value = result
		}
	else if(ix===1 && iy===1){
		r=input;
		result= r + " °F";
		//result="Fahrenheit to Fahrenheit: " +r;
		document.getElementById("result").value = result
		}
	else if(ix===1 && iy===2){
		r=(input - 32) / 1.8 + 273.15
		result= r + " °K";
		//result="Fahrenheit to Kelvin: " +r;
		document.getElementById("result").value = result
		}
	else if(ix===2 && iy===0){
		r=input - 273.15;
		result= r + " °C";
		//result="Kelvin to Celcius: " +r;
		document.getElementById("result").value = result
		}
	else if(ix===2 && iy===1){
		r=(input - 273.15) * 1.8 + 32;
		result= r + " °F";
		//result="Kelvin to Fahrenheit: " +r;
		document.getElementById("result").value = result
		}
	else if(ix===2 && iy===2){
		r=input;
		result= r + " °K";
		//result="Kelvin to Kelvin: " +r;
		document.getElementById("result").value = result
		}
}
 