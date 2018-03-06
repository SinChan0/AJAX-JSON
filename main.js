var data = document.getElementById("tbl");
var btn = document.getElementById("btn");
var conter = document.getElementById("count")

btn.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','https://thakersamveg608.github.io/ajax-implementation/data.json', true);
    myRequest.onload = function(){
        var myObject = JSON.parse(myRequest.responseText);
        renderHTML(myObject);
    };
    myRequest.send();
    
}
);

count = data.lenght;

function renderHTML(data){
    var htmlString = "";
    for(i=0; i<data.lenght; i++){
        html += "<tr><td>" + data[i].Name + "</td><td>" + data[i].Version + "</td></tr>" + data[i].API;
    }
}


/*function loadData(){
    var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
	    if (xhttp.readyState == 4 && xhttp.status == 200){
		    var myObject = JSON.parse(xhttp.responseText);
		    console.log(myObject);
        renderHTML(myObject)
        }
    };
}
*/

