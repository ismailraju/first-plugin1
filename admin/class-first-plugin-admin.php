<?php


/**
 * The admin-specific functionality of the plugin.
 *
 * @link       isma
 * @since      1.0.0
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/admin
 * @author     ismail hossain raju <ismailhossainraju74@gmail.com>
 */
class First_Plugin_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in First_Plugin_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The First_Plugin_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/first-plugin-admin.css', array(), $this->version, 'all' );

		////fullcalender
		wp_enqueue_style( $this->plugin_name.'fullcalendar.css', plugin_dir_url( __FILE__ ) . 'css/fullcalendar.css', array(), $this->version, 'all' );
		wp_enqueue_style( $this->plugin_name.'fullcalendar.print.css', plugin_dir_url( __FILE__ ) . 'css/fullcalendar.print.css', array(), $this->version, 'print' );

		wp_enqueue_style( $this->plugin_name.'first-plugin-fullcalendar.css', plugin_dir_url( __FILE__ ) . 'css/first-plugin-fullcalendar.css', array(), $this->version, 'all' );


		////bootstrap-3.3.6-dist

		wp_enqueue_style( $this->plugin_name.'bootstrap.min.css', plugin_dir_url( __FILE__ ) . 'bootstrap-3.3.6-dist/css/bootstrap.min.css', array(), $this->version, 'all' );

		////jquery-ui -for datepicker
		wp_enqueue_style( $this->plugin_name.'jquery-ui.min.css', plugin_dir_url( __FILE__ ) . 'css/jquery-ui.min.css', array(), $this->version, 'all' );
		////selectize plugin
		wp_enqueue_style( $this->plugin_name.'selectize.default.css', plugin_dir_url( __FILE__ ) . 'selectize/css/selectize.default.css', array(), $this->version, 'all' );

		////customer display php

		wp_enqueue_style( $this->plugin_name.'first-plugin-customers.css', plugin_dir_url( __FILE__ ) . 'css/first-plugin-customers.css', array(), $this->version, 'all' );

		////datatable show
		wp_enqueue_style( $this->plugin_name.'jquery.dataTables.min.css', plugin_dir_url( __FILE__ ) . 'DataTables-1.10.11/media/css/jquery.dataTables.min.css', array(), $this->version, 'all' );

		wp_enqueue_style( $this->plugin_name.'buttons.dataTables.min.css', plugin_dir_url( __FILE__ ) . 'DataTables-1.10.11/extensions/Buttons/css/buttons.dataTables.min.css', array(), $this->version, 'all' );

		wp_enqueue_style( $this->plugin_name.'select.dataTables.min.css', plugin_dir_url( __FILE__ ) . 'DataTables-1.10.11/extensions/Select/css/select.dataTables.min.css', array(), $this->version, 'all' );


		////appointment list display php

		wp_enqueue_style( $this->plugin_name.'first-plugin-appointment.css', plugin_dir_url( __FILE__ ) . 'css/first-plugin-appointment.css', array(), $this->version, 'all' );

		////toastr add
		wp_enqueue_style( $this->plugin_name.'toastr.min.css', plugin_dir_url( __FILE__ ) . 'toastr/css/toastr.min.css', array(), $this->version, 'all' );


	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in First_Plugin_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The First_Plugin_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/first-plugin-admin.js', array( 'jquery' ), $this->version, false );

		////fullcalender
		wp_enqueue_script( $this->plugin_name.'moment', plugin_dir_url( __FILE__ ) . 'js/moment.min.js', array( 'jquery' ), $this->version, false );

		wp_enqueue_script( $this->plugin_name.'fullcalendar.min.js', plugin_dir_url( __FILE__ ) . 'js/fullcalendar.min.js', array( 'jquery' ), $this->version, false );


		wp_enqueue_script( $this->plugin_name.'first-plugin-fullcalender.js', plugin_dir_url( __FILE__ ) . 'js/first-plugin-fullcalender.js', array( 'jquery' ), $this->version, true );


		//wp_enqueue_script( $this->plugin_name.'jquery.min.js', plugin_dir_url( __FILE__ ) . 'js/jquery.min.js', array( 'jquery' ), $this->version, false );

		////bootstrap-3.3.6-dist

		wp_enqueue_script( $this->plugin_name.'bootstrap.min.js', plugin_dir_url( __FILE__ ) . 'bootstrap-3.3.6-dist/js/bootstrap.min.js', array( 'jquery' ), $this->version, false );

		////jquery-ui -for datepicker
		wp_enqueue_script( $this->plugin_name.'jquery-ui.min.js', plugin_dir_url( __FILE__ ) . 'js/jquery-ui.min.js', array( 'jquery' ), $this->version, true );
		////selcetize plugin add
		wp_enqueue_script( $this->plugin_name.'selectize.min.js', plugin_dir_url( __FILE__ ) . 'selectize/js/standalone/selectize.min.js', array( 'jquery' ), $this->version, true );

		////

		// in JavaScript, object properties are accessed as ajax_object.ajax_url, ajax_object.we_value
		wp_localize_script( $this->plugin_name.'first-plugin-fullcalender.js', 'ajax_object',
	            array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

		////customer display php

		wp_enqueue_script( $this->plugin_name.'first-plugin-customers.js', plugin_dir_url( __FILE__ ) . 'js/first-plugin-customers.js', array( 'jquery' ), $this->version, true );

		////datatable show 		
		wp_enqueue_script( $this->plugin_name.'jquery.dataTables.min.js', plugin_dir_url( __FILE__ ) . 'DataTables-1.10.11/media/js/jquery.dataTables.min.js', array( 'jquery' ), $this->version, true );

		wp_enqueue_script( $this->plugin_name.'dataTables.buttons.min.js', plugin_dir_url( __FILE__ ) . 'DataTables-1.10.11/extensions/Buttons/js/dataTables.buttons.min.js', array( 'jquery' ), $this->version, true );

		wp_enqueue_script( $this->plugin_name.'dataTables.select.min.js', plugin_dir_url( __FILE__ ) . 'DataTables-1.10.11/extensions/Select/js/dataTables.select.min.js', array( 'jquery' ), $this->version, true );
	



		////appointment list display php

		wp_enqueue_script( $this->plugin_name.'first-plugin-appointment.js', plugin_dir_url( __FILE__ ) . 'js/first-plugin-appointment.js', array( 'jquery' ), $this->version, true );
		

		////toastr add
		wp_enqueue_script( $this->plugin_name.'toastr.min.js', plugin_dir_url( __FILE__ ) . 'toastr/js/toastr.min.js', array( 'jquery' ), $this->version, true );

	 

	}



	////
	/**
	 * Add an options page under the Settings submenu
	 *
	 * @since  1.0.0
	 */
	public function add_options_page() {
	
		$this->plugin_screen_hook_suffix = add_options_page(
			__( 'Outdated Notice Settings', 'outdated-notice' ),
			__( 'Outdated Notice', 'outdated-notice' ),
			'manage_options',
			$this->plugin_name,
			array( $this, 'display_options_page' )
		);
	
	}



	/**
	 * Render the options page for plugin
	 *
	 * @since  1.0.0
	 */
	public function display_options_page() {
		include_once 'partials/outdated-notice-admin-display.php';
	}

	////
	/**
	 * Add an top menu and  all submenus
	 *
	 *
	 */
	public function add_top_menu(){


		//add an item to the menu
	    add_menu_page (
	        '--Appointment--', 			//tab  title

	        'Appointment',        		//menu name

	        'read',						//Capabilities are a security feature

	        'AS_top_menus_slug',		//$menu_slug // unique name used by WordPress to refer to this menu page.

	       	'AS_Top_Menus_callback', 	//function name which draw page
	       								//'my-plugin/my-plugin-form.php',//not working

	        //plugin_dir_url( __FILE__ ).'icons/hero_icon.png',
	        'dashicons-shield',			//icon name of wordpress

	        '1' 						//position of the menu in the menu herarchy
	    );


			/////////////////////////////////////
	    	//add submenu to a menu
	        add_submenu_page( 
	    	'AS_top_menus_slug', 			//Top-Level Menu's slug name

	    	'--Calander--',  				//tab  title

	    	'Calander',						//sub menu name //show up in the dashboard side menu.

	    	'manage_options', 				//Capabilities are a security feature

	    	'AS_calander_slug', 			//$menu-slug 

	    	array( $this, 'display_calander_page' )		//creates your options page
	     );

  			add_submenu_page('AS_top_menus_slug','--Customar--', 'Customar',	'manage_options', 'AS_customar_slug',array( $this, 'display_customers_page' ) );


  			add_submenu_page('AS_top_menus_slug','--Appointment--', 'Appointment',	'manage_options', 'AS_appointment_slug',array( $this, 'display_appointment_page' )	 );
  			add_submenu_page('AS_top_menus_slug','--Settings--', 'Settings',	'manage_options', 'AS_settings_slug',array( $this, 'display_settings_page' )	 );





  			//remove top-menu's submenu
			global $submenu;
            unset( $submenu['AS_top_menus_slug'][0] );


	}




	///////////////////////////////////submenu function////////////////////////////////////////////

		public function display_calander_page() {
		include_once 'partials/first-plugin-calander-display.php';

	}


		public function display_settings_page() {
		include_once 'partials/first-plugin-settings-display.php';

	}



		public function display_customers_page() {
		include_once 'partials/first-plugin-customers-display.php';

	}

		public function display_appointment_page() {
		include_once 'partials/first-plugin-appointment-display.php';

	}


//////////////////////////////////////ajax example//////////////////////

		// Same handler function...
		//add_action( 'wp_ajax_my_action', 'my_action_callback' );
		function my_action_db_callback() {
		/*	global $wpdb;
			$whatever = intval( $_POST['whatever'] );
			$whatever += 10;
		    echo $whatever;*/

		    
		    global $wpdb;
  			$sql = "SELECT full_name,id FROM wp_ab_staff ORDER BY id;";
  			$results = $wpdb->get_results($sql);
  			//echo "Parsed results go here"+$results;
  			echo json_encode($results);
			wp_die();
		}



		//SELECT  wp_ab_services.title FROM wp_ab_staff INNER JOIN wp_ab_staff_services INNER JOIN wp_ab_services ON wp_ab_staff.id=wp_ab_staff_services.staff_id AND wp_ab_services.id=wp_ab_staff_services.service_id WHERE wp_ab_staff.id=5

		function my_action_db_join_callback() {
			//global $wpdb;
			//$whatever = intval( $_POST['value1'] );
			//$whatever += 10;
		    //echo $whatever;
		    //echo  $_POST['value1'];

		    $fullname=$_POST['stuffname'];
		    //echo json_encode( $fullname);
		    //echo gettype($fullname);

		    global $wpdb;

  			$sql = "SELECT  wp_ab_staff.id,wp_ab_services.title ,wp_ab_services.duration FROM wp_ab_staff INNER JOIN wp_ab_staff_services INNER JOIN wp_ab_services ON wp_ab_staff.id=wp_ab_staff_services.staff_id AND wp_ab_services.id=wp_ab_staff_services.service_id WHERE wp_ab_staff.full_name='$fullname'";

  			$results = $wpdb->get_results($sql);
  			//echo "Parsed results go here"+$results;
  			echo json_encode($results);
			wp_die();
		}

function my_action_db_schedule_callback() {
			//global $wpdb;
			//$whatever = intval( $_POST['value1'] );
			//$whatever += 10;
		    //echo $whatever;
		    //echo  $_POST['value1'];

		    $stuffName=$_POST['stuff_name'];
		    //echo json_encode( $fullname);
		    //echo gettype($fullname);

		    global $wpdb;

  			$sql = "SELECT  wp_ab_staff_schedule_items.start_time , wp_ab_staff_schedule_items.end_time FROM wp_ab_staff_schedule_items INNER JOIN wp_ab_staff ON wp_ab_staff.id=wp_ab_staff_schedule_items.staff_id  WHERE wp_ab_staff.full_name='$stuffName' ORDER BY day_index";

  			$results = $wpdb->get_results($sql);
  			//echo "Parsed results go here"+$results;
  			echo json_encode($results);
			wp_die();
		}

function my_action_db_stuffNameToId_callback() {
			//global $wpdb;
			//$whatever = intval( $_POST['value1'] );
			//$whatever += 10;
		    //echo $whatever;
		    //echo  $_POST['value1'];

		    $stuffName=$_POST['stuffname'];
		    //echo json_encode( $stuffName);
		    //echo gettype($stuffName);

		   

		    global $wpdb;
  			$sql = "SELECT id FROM wp_ab_staff WHERE wp_ab_staff.full_name ='$stuffName';";
  			$results = $wpdb->get_results($sql);
  			//echo "Parsed results go here"+$results;
  			echo json_encode($results);
			wp_die();
		}


function my_action_customer_list_callback() {

		    global $wpdb;
  			$sql = "SELECT id, name, phone, email, notes FROM wp_ab_customers ORDER BY wp_ab_customers.name desc;";
  			$results = $wpdb->get_results($sql);
  			echo json_encode($results);
			wp_die();
		}


function my_action_add_appointment_callback() {


		$p_name=$_POST['provider_name'];
		$s_name=$_POST['service_name'];
		$date=$_POST['date'];
		$start_time=$_POST['time_start'];
		$end_time=$_POST['time_end'];
		$cust_emails=$_POST['cust_names'];
		    //echo json_encode( $stuffName);
		   //echo gettype($stuffName);
		 //echo $p_name+" "+$s_name+" "+$date+" "+$start_time+" "+$end_time+" "+$cust_name;
		//echo json_encode($cust_name);

		   

		    global $wpdb;

  			$sql = "SELECT id  FROM wp_ab_staff WHERE wp_ab_staff.full_name ='$p_name';";
  			$stuff_id = $wpdb->get_results($sql);
  			//echo $stuff_id[0]->id;
  			$stuf_id=$stuff_id[0]->id;




			/* foreach($stuff_id as $row)
			 {echo $row->id;}*/


  			$sql = "SELECT id FROM wp_ab_services WHERE wp_ab_services.title ='$s_name';";
  			$service_id = $wpdb->get_results($sql);
  			//echo $service_id[0]->id;
  			$servic_id=$service_id[0]->id;
  			

			$start_tim="$date"." "."$start_time";
			$end_tim="$date"." "."$end_time";


  			$sql = "INSERT INTO wp_ab_appointments( staff_id, service_id, start_date, end_date) VALUES ('$stuf_id','$servic_id','$start_tim=','$end_tim') ";

  			$r_id = $wpdb->get_results($sql);
  			//echo json_encode($r_id);
  			//echo json_encode($wpdb->insert_id);
  			$appoint_id= $wpdb->insert_id;


  			foreach($cust_emails as $cust_email){

  			$sql = "SELECT id FROM wp_ab_customers WHERE wp_ab_customers.email ='$cust_email';";
  			$cust_id = $wpdb->get_results($sql);
  			//echo json_encode($cust_id);
  			$cus_id=$cust_id[0]->id;


  			$sql = "INSERT INTO wp_ab_customer_appointments(customer_id, appointment_id, number_of_persons,custom_fields,token) VALUES ('$cus_id','$appoint_id','1','[]',REPLACE(UUID(),'-',''))";

  			$r_id = $wpdb->get_results($sql);

			

  			}

  			echo json_encode($wpdb->insert_id);

  			/*$sql = "SELECT id FROM wp_ab_staff WHERE wp_ab_staff.full_name ='$stuffName';";
  			$results = $wpdb->get_results($sql);*/
  			//echo "Parsed results go here"+$results;
  			//echo json_encode($results);
			wp_die();
		}






function my_action_add_appointment_update_callback() {
			//global $wpdb;
			//$whatever = intval( $_POST['value1'] );
			//$whatever += 10;
		    //echo $whatever;
		    //echo  $_POST['value1'];


		$app_id=$_POST['appointment_id'];
		$p_name=$_POST['provider_name'];
		$s_name=$_POST['service_name'];
		$date=$_POST['date'];
		$start_time=$_POST['time_start'];
		$end_time=$_POST['time_end'];
		$cust_emails=$_POST['cust_names'];
		    //echo json_encode( $stuffName);
		   //echo gettype($stuffName);
		 //echo $p_name+" "+$s_name+" "+$date+" "+$start_time+" "+$end_time+" "+$cust_name;
		//echo json_encode($app_id);

		   

		    global $wpdb;


  			$sql = "DELETE FROM wp_ab_appointments  WHERE id='$app_id';";
  			$stuff_id = $wpdb->get_results($sql);
  			
  			$sql = "DELETE FROM wp_ab_customer_appointments WHERE appointment_id='$app_id';";
  			$stuff_id = $wpdb->get_results($sql);

		   

		    global $wpdb;
  			$sql = "SELECT id  FROM wp_ab_staff WHERE wp_ab_staff.full_name ='$p_name';";
  			$stuff_id = $wpdb->get_results($sql);
  			//echo $stuff_id[0]->id;
  			$stuf_id=$stuff_id[0]->id;


			/* foreach($stuff_id as $row)
			 {echo $row->id;}*/


  			$sql = "SELECT id FROM wp_ab_services WHERE wp_ab_services.title ='$s_name';";
  			$service_id = $wpdb->get_results($sql);
  			//echo $service_id[0]->id;
  			$servic_id=$service_id[0]->id;
  			

			$start_tim="$date"." "."$start_time";
			$end_tim="$date"." "."$end_time";


  			$sql = "INSERT INTO wp_ab_appointments( id,staff_id, service_id, start_date, end_date) VALUES ('$app_id','$stuf_id','$servic_id','$start_tim=','$end_tim')";

  			$r_id = $wpdb->get_results($sql);
  			//echo json_encode($r_id);
  			echo json_encode($wpdb->insert_id);
  			$appoint_id= $wpdb->insert_id;


  			foreach($cust_emails as $cust_email){

  			$sql = "SELECT id FROM wp_ab_customers WHERE wp_ab_customers.email ='$cust_email';";
  			$cust_id = $wpdb->get_results($sql);
  			//echo json_encode($cust_id);
  			$cus_id=$cust_id[0]->id;


  			$sql = "INSERT INTO wp_ab_customer_appointments(customer_id, appointment_id, number_of_persons,custom_fields,token) VALUES ('$cus_id','$appoint_id','1','[]',REPLACE(UUID(),'-',''))";

  			$r_id = $wpdb->get_results($sql);

  			//echo json_encode($r_id);

  			

  			}

  		
  			/*$sql = "SELECT id FROM wp_ab_staff WHERE wp_ab_staff.full_name ='$stuffName';";
  			$results = $wpdb->get_results($sql);*/
  			//echo "Parsed results go here"+$results;
  			//echo json_encode($results);
			wp_die();
		}







function my_action_db_new_customer_callback() {

			$current_user_id=get_current_user_id();
			$cust_name=$_POST['cust_name'];
			$emailAddress=$_POST['email'];
			$phn_num=$_POST['phn_num'];
			$notes=$_POST['descript'];

		    echo json_encode( array($current_user_id,$cust_name,$emailAddress,$phn_num,$notes));
		    //echo gettype($stuffName);

		   	

		    global $wpdb;
  			$sql = "INSERT INTO wp_ab_customers( wp_user_id,name, phone, email, notes) VALUES ('$current_user_id','$cust_name','$phn_num','$emailAddress','$notes')";
  			$results = $wpdb->get_results($sql);
  			//echo "Parsed results go here"+$results;
  			//echo json_encode($results);
  			if ($result) {
			    die('Invalid query: ' . mysql_error());
			}else echo "Saved";
			wp_die();
		}





function my_action_db_calender_event_update_callback() {


		    //echo gettype($stuffName);

		    global $wpdb;


/*  			$sql = "SELECT  ac.appointment_id ,c.name, c.phone, c.email , a.start_date, a.end_date ,s.title
  					FROM wp_ab_appointments  a INNER JOIN wp_ab_customer_appointments ac INNER JOIN wp_ab_customers c INNER JOIN wp_ab_services s
  					ON a.id=ac.appointment_id  AND  c.id=ac.customer_id AND  s.id=a.service_id 
  					ORDER BY ac.appointment_id"; */

  					$sql = "SELECT  ac.appointment_id ,GROUP_CONCAT(c.name) as name, GROUP_CONCAT(c.phone) as phone, GROUP_CONCAT(c.email ) as email, a.start_date, a.end_date ,s.title
  					FROM wp_ab_appointments  a INNER JOIN wp_ab_customer_appointments ac INNER JOIN wp_ab_customers c INNER JOIN wp_ab_services s
  					ON a.id=ac.appointment_id  AND  c.id=ac.customer_id AND  s.id=a.service_id 
  					GROUP BY ac.appointment_id";
  			$results = $wpdb->get_results($sql);
  			echo json_encode($results);
			wp_die();
		}




////////////////////////////////////////////customer display php///////////////////////



function my_action_db_customer_info_callback() {


		    //echo gettype($stuffName);
			
		    global $wpdb;
  			$sql = "SELECT id, name, phone, email, notes FROM wp_ab_customers";
  			$results = $wpdb->get_results($sql);
  			echo json_encode($results);
  			//echo gettype($results);
			wp_die();
		}



////////////////////////////////////////////Appointment list display php///////////////////////





function my_action_db_appointment_list_group_callback() {


		    //echo gettype($stuffName);

		    global $wpdb;

  			//$sql = "SELECT id, staff_id, service_id, start_date, end_date, google_event_id FROM wp_ab_appointments";

  			$sql = "SELECT  a.id,a.start_date , a.end_date ,GROUP_CONCAT(c.name) as name,GROUP_CONCAT(c.email) as email,s.title, s.duration,sf.full_name
  					FROM wp_ab_appointments  a INNER JOIN wp_ab_customer_appointments ac INNER JOIN wp_ab_customers c INNER JOIN wp_ab_services s  INNER JOIN  wp_ab_staff sf
  					ON a.id=ac.appointment_id  AND  c.id=ac.customer_id AND  s.id=a.service_id   AND  sf.id=a.staff_id 
  					group by a.id";

  			$results = $wpdb->get_results($sql);
  			echo json_encode($results);
			wp_die();
		}


function my_action_same_appoint_customers_list_callback() {



			$appoint_id=$_POST['appointmentID'];
		    

		   // echo json_encode( $appoint_id);
		    
		    global $wpdb;

  			

  			$sql = "SELECT  c.email
  					FROM wp_ab_appointments  a INNER JOIN wp_ab_customer_appointments ac INNER JOIN wp_ab_customers c 
  					ON a.id=ac.appointment_id  AND  c.id=ac.customer_id 
  					 WHERE a.id ='$appoint_id'";

  			$results = $wpdb->get_results($sql);
  			echo json_encode($results);
			wp_die();
		}



function my_action_appointment_delete_callback() {



			$app_id=$_POST['appointmentID'];
		    

		    echo json_encode( $app_id);
		    
		    global $wpdb;

			$sql = "DELETE FROM wp_ab_appointments  WHERE id='$app_id';";
  			$stuff_id = $wpdb->get_results($sql);
  			
  			$sql = "DELETE FROM wp_ab_customer_appointments WHERE appointment_id='$app_id';";
  			$stuff_id = $wpdb->get_results($sql);

  			//echo json_encode($stuff_id);
			wp_die();
		}


////////////////////////////////////////////add meta box////////////////////////



}


