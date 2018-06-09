var btn = document.getElementById("btn"); 
var table = document.getElementById("tbl");

btn.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','https://sinchan0.github.io/AJAX-JSON/data.json');
    myRequest.onload = function(){
        var myData = JSON.parse(myRequest.responseText);
        renderHTML( myData );
    };
    myRequest.send();
} );

function renderHTML(data){
    var htmlString = "";
    var i = 0;
    
    for (i=0; i<data.length; i++)
    {
        htmlString += "<tr><td>" + data[i].Name + "</td><td>" + data[i].Version + "</td><td>" + data[i].API + " </td></tr>";
    }
    table.insertAdjacentHTML('beforeend', htmlString);
    if(i==data.length)
	{
		document.getElementById('count').innerHTML=i;
		document.getElementById('btn').style.display='none';
		document.getElementById('myInput').style.display='block';
    }
}

