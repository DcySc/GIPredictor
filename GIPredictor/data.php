<?PHP
    require_once("config.php");
    //连库
    $con = mysql_connect(HOST,USERNAME,PASSWORD);
    mysql_select_db("gipredictor");
    mysql_query("set names utf8");

    //从数据库获取数据$data
    $sql = "select strain_name from strain_table";
    $query = mysql_query($sql);
    if($query && mysql_num_rows($query)){
        while($row = mysql_fetch_assoc($query)){
            $data[] = $row;
        }
    }

    //拼接数据为json格式
    $result = '{"num":"'.mysql_num_rows($query).'","msg":';
    $msg = '{';
    $i = 0;
    foreach($data as $value){
        foreach($value as $sn){
            $msg = $msg."'".$i."'".':'."'".$sn."'";
            $i++;
        }
        $msg = $msg.",";
    }
    $msg ='"'.$msg.'}'.'"';
    $result = $result.$msg.'}';

    //将数据$result给前端
    if($_SERVER["REQUEST_METHOD"] == "GET"){
        echo $result;
    }
?>