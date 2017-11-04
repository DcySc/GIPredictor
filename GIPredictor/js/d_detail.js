function getdata(){
    var getSearch = window.location.search;
    var oTable = document.getElementById("cont");
    var request = new XMLHttpRequest();
    request.open("GET","http://localhost/GIPredictor/data_detail.php"+getSearch);
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status === 200){
                var data = JSON.parse(request.responseText);
                var objA = Object.keys(data[0]);
                var objL = objA.length;
                for(var i=0,len=data.length;i<len;i++){
                    oTr = document.createElement("tr");
                    oTable.appendChild(oTr);
                    for(x in data[i]){
                        var oTd = document.createElement("td");
                        oTd.innerHTML = data[i][x];
                        oTr.appendChild(oTd);
                    }
                }	
            }
        }
    }
}