function getdata(){
    var request = new XMLHttpRequest();
    var oTable = document.getElementById("cont");
    request.open("GET","http://localhost/GIPredictor/data.php");
    request.send();
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status === 200){
                var data = JSON.parse(request.responseText);
                var msg = data.msg;
                while(msg.indexOf('\'') >= 0){
                    msg = msg.replace('\'','\"');
                }
                msg = JSON.parse(msg.substring(0,msg.length-2)+"}");
                for(var i=0,len=data.num;i<len;i++){
                    var oTr = document.createElement("tr");
                    var oTd_1 = document.createElement("td");
                    var oTd_2 = document.createElement("td");
                    var oTd_3 = document.createElement("td");
                    oTable.appendChild(oTr);
                    oTr.appendChild(oTd_1);
                    oTr.appendChild(oTd_2);
                    oTr.appendChild(oTd_3);
                    oTd_1.innerHTML = msg[i];
                    oTd_2.innerHTML = "<a href ='data_detail.html?strain_name="+msg[i]+"&v=v1'>v1</a>";
                    oTd_3.innerHTML = "<a href ='data_detail.html?strain_name="+msg[i]+"&v=v2'>v2</a>";
                }
            }
        }
    }
}