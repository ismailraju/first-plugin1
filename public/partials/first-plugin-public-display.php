<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       isma
 * @since      1.0.0
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/public/partials
 */


/**
* 
*/
class Appoint_BookingShortCode
{
	
	function __construct()
	{
		
	}



	public function appoint_shortcode_callback()
	    {
	        $assets = '';

	        ob_start();

	        // The styles and scripts are registered in AB_Frontend.php
	        //wp_print_styles( 'selectize.default.css' );
	        wp_print_styles( 'bootstrap.min.css' );
	        //wp_print_styles( 'flags.css');
	        wp_print_styles( 'intlTelInput.css');	        
	        wp_print_styles( 'jquery-ui.min.css');

	        wp_print_styles( 'appointment.css' );
	        
	        
	        //wp_print_scripts( 'selectize.min.js' );
	        wp_print_scripts( 'bootstrap.min.js' );
	        wp_print_scripts( 'intlTelInput.js' );
	        wp_print_scripts( 'utils.js' );
	        wp_print_scripts( 'jquery-ui.min.js' );

	        wp_print_scripts( 'appointment.js' );
	        
	        
	        

	        $assets = ob_get_clean();


	        
	        ob_start();
	        $config = include_once("template/first-plugin-public-service-from.php");
			//var_dump($config);
	        $content = ob_get_clean();



	        $allQuery=new allQuery();
	        //$realName=new allTableName();
	        $q=$allQuery->category();
	        $q=$allQuery->MaxTimeRange();

	        //var_dump($q);
	        //echo "<br>";
	        //var_dump((array)$q);
/*
	        $aa=array();

	        foreach(($q) as $user){
			   
			     array_push($aa,$user->name);
			    
			   }*/
			//var_dump($aa);

			//$wrapObj=new wrap();
			//var_dump($wrapObj->objectToArray($q,"name"));
			//$aa=$wrapObj->objectToArray($q,"name");
			//var_dump($wrapObj->wrap([$aa,$aa]));

	        return $assets.$content ;


	       
	    }




}

//add_shortcode( 'apbooking', 'appointment_shortcode_callback' );