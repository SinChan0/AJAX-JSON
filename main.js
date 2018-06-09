var data = document.getElementById("tbl");
var btn = document.getElementById("btn");
document.getElementById('count').innerHTML=0;
document.getElementById("myInput").style.display = 'none';``

btn.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','https://sinchan0.github.io/AJAX-JSON/data.json', true);
    myRequest.onload = function(){
        var myObject = JSON.parse(myRequest.responseText);
        console.log(myObject);
        renderHTML(myObject);
    };
    myRequest.send();
});

function renderHTML(myObject){
    var htmlString = "";
    data.insertAdjacentHTML('beforeend' , htmlString);
    var i = 0;
    for(i=0; i<myObject.lenght; i++){
        htmlString += "<tr><td>" + myObject[i].Name + "</td><td>" + myObject[i].Version + "</td></tr>" + myObject[i].API;
    }
    if(i==myObject.length)
	{
		document.getElementById('count').innerHTML=i;
		document.getElementById('btn').style.display='none';
		document.getElementById('myInput').style.display='block';
    }
}

function myFunction() {
    var input, filter, table, tr, td, i,j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("info");
    tr = table.getElementsByTagName("tr");
    var count=0;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
          td1 = tr[i].getElementsByTagName("td")[1];
          if (td+td1) {
            if ((td.innerHTML.toUpperCase().indexOf(filter)+td1.innerHTML.toUpperCase().indexOf(filter)) > -2) {
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

