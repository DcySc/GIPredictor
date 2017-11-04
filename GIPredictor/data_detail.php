<?php
    require_once("config.php");

    $con = mysql_connect(HOST,USERNAME,PASSWORD);
    mysql_select_db("GIPredictor");
    mysql_query("set names utf8");
    
    if($_SERVER["REQUEST_METHOD"] == "GET"){ 
        if(isset($_GET['v'])|| !empty($_GET['v'])||isset($_GET['strain_name'])|| !empty($_GET['strain_name'])){
            $sql = "select strain_name,GI,range_h,range_l,size,insertion,DRs,mobileGenes from genomic_islands_data,strain_table
            where  GI like '".$_GET['v']."-".$_GET['strain_name']."%' and genomic_islands_data.strain_id = strain_table.strain_id";
            $query = mysql_query($sql);
            if($query && mysql_num_rows($query)){
                while($row = mysql_fetch_assoc($query)){
                    $data[] = $row;
                }
            }
            echo json_encode($data);
        }   
    }
    
?>