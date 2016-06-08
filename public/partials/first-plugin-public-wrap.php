<?php

class wrap{
	
public function __construct(){



}


public function objectToArray($q,$dataItemIndex){
	//var_dump($dataItemIndex);

	$a=array();

	foreach(($q) as $user){
	    
	     array_push($a,$user->$dataItemIndex);
	 
	   }
	   //var_dump($a);
	return $a;

}



public function wrap($data){
	
	$clm=sizeof($data);
	$row=sizeof($data[0]);

	$options="";

	for($j=0;$j<$row;$j++) {
	


	
		$options=$options."<option";

		$options=$options." value='";
		$options=$options.$data[0][$j];
		$options=$options."'";
		
		$options=$options.">";

		$options1="";
		for($i=1;$i<$clm;$i++){

				$options1=$options1.$data[$i][$j];			
		}
		$options=$options.$options1;


		//$options=$options."<span style='color:blue;font-weight:bold'>blue</span>";
		$options=$options."</option>";

	}


	return ($options);

}





}