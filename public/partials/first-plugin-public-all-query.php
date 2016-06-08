<?php
class allQuery extends allTableName{

/*SELECT //SUM(column_name)
FROM   //table_name
WHERE  //CONDITION
GROUP BY //column_name
HAVING //(arithematic function condition);
ORDER BY
ASC|DESC 	
INNER JOIN*/

public function __construct(){

	parent::__construct();

}


public function category(){


	//var_dump($this->categories);
	$table=$this->categories;

    global $wpdb;
	$sql = "SELECT id,name FROM ".$table."  ORDER BY id;";
	$results = $wpdb->get_results($sql);
	
	return ($results);
	wp_die();


}



public function service(){


	//var_dump($this->categories);
	$table=$this->services;

    global $wpdb;
	$sql = "SELECT id,title FROM ".$table."  ORDER BY id;";
	$results = $wpdb->get_results($sql);
	
	return ($results);
	wp_die();


}


public function staff(){


	//var_dump($this->categories);
	$table=$this->staff;

    global $wpdb;
	$sql = "SELECT id,full_name FROM ".$table."  ORDER BY id;";
	$results = $wpdb->get_results($sql);
	
	return ($results);
	wp_die();


}

public function MaxTimeRange(){

 
	$table=$this->staff_schedule_items;

    global $wpdb;
	$sql = "SELECT MIN(start_time) as start_time,MAX(end_time) as end_time FROM ".$table.";";
	$results = $wpdb->get_results($sql);

	//return $results[0]->start_time;

	$timeClass=new timeClass();
	return $timeClass->generalTimeIntrvl($results[0]->start_time,$results[0]->end_time);

	//return ($results);
	wp_die();


}
/*public function Timeslot(){

 
	$table=$this->staff_schedule_items;

    global $wpdb;
	$sql = "SELECT MIN(start_time) as start_time,MAX(end_time) as end_time FROM ".$table.";";
	$results = $wpdb->get_results($sql);

	//return $results[0]->start_time;

	$timeClass=new timeClass();
	return $timeClass->generalTimeIntrvl($results[0]->start_time,$results[0]->end_time);

	//return ($results);
	wp_die();


}*/

/*
//function select($table,$target,$From,$where,$GroupBy,$having,$orderby,$AscDesc){
public function select($table,$joinType,$target,$where){

$query="SELECT ";



//target coloums name
if(is_array($target)){

$tar=join(",",$target);

}else if($target=="*"){

$tar="*";
}
$query=$query.$tar." ";



//tables name
if(is_array($table)){

$tables=join(" INNER JOIN ",$table);

}else {

$tables=$table;
}

$query=$query." FROM ".$tables." ";


//WHERE condition
if(is_array($where)){
	$wheres="";

	for(int i=1;i<sizeof($table);i++){

		$wheres=$table[i].".".$wheres[i]."="$table[i+1].".".$wheres[i+1];

	}

}else {

$wheres=$where;

}

$query=$query." WHERE ".$wheres." ";




return $query;
}

*/



}


?>