var btn = document.getElementById("btn"); 
var table = document.getElementById("tbl");
document.getElementById('count').innerHTML=0;
document.getElementById("myInput").style.display = 'none';

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

function myFunction() {
    var input, filter, table, tr, td, td1, td2, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tbl");
    tr = table.getElementsByTagName("tr");
    var count=0;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
          if (td+td1) {
            if ((td.innerHTML.toUpperCase().indexOf(filter)+td1.innerHTML.toUpperCase().indexOf(filter)+td2.innerHTML.toUpperCase().indexOf(filter)) > -3) {
              tr[i].style.display = ""; 
              count++;
                 document.getElementById('count').innerHTML=count;
            } else {
              tr[i].style.display = "none";
              document.getElementById('count').innerHTML=count;
            }    
      }
    }
}
