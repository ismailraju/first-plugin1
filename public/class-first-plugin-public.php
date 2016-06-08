<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       isma
 * @since      1.0.0
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/public
 * @author     ismail hossain raju <ismailhossainraju74@gmail.com>
 */
class First_Plugin_Public {

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
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		include_once 'partials/first-plugin-all-tablename.php';		
		include_once 'partials/first-plugin-public-time-class.php';		
		include_once 'partials/first-plugin-public-all-query.php';
		include_once 'partials/first-plugin-public-wrap.php';
		include_once 'partials/first-plugin-public-display.php';
		

		$this->plugin_name = $plugin_name;
		$this->version = $version;

		////table name
		$this->tableNames = new allTableName();

		////shortcode
		$this->bookingControl = new Appoint_BookingShortCode();

		add_shortcode( 'apbooking', array($this->bookingControl,'appoint_shortcode_callback'));



	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
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

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/first-plugin-public.css', array(), $this->version, 'all' );

		wp_register_style( 'appointment.css', plugin_dir_url( __FILE__ ) . 'css/first-plugin-public-appointment.css', array(), $this->version, 'all' );

		////bootstrap-3.3.6-dist

		wp_register_style('bootstrap.min.css', plugin_dir_url( __FILE__ ) . 'bootstrap-3.3.6-dist/css/bootstrap.min.css', array(), $this->version, 'all' );

		//wp_register_style('bootstrap.min.css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', array(), $this->version, 'all' );

		//wp_enqueue_style( 'bootstrap.min.css' );

		//wp_register_style( 'selectize.default.css', plugin_dir_url( __FILE__ ) . 'selectize/css/selectize.default.css', array(), $this->version, 'all' );
		//flag
		//wp_register_style( 'flags.css', plugin_dir_url( __FILE__ ) . 'flags/flags.css', array(), $this->version, 'all' );
		//International Telephone Input
		wp_register_style( 'intlTelInput.css', plugin_dir_url( __FILE__ ) . 'intl-tel-input-master/build/css/intlTelInput.css', array(), $this->version, 'all' );

		//wp_register_style( 'intlTelInput.css', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.5.2/css/intlTelInput.css', array(), $this->version, 'all' );

		

		//jquery-ui -for datepicker
		wp_register_style('jquery-ui.min.css', plugin_dir_url( __FILE__ ) . 'css/jquery-ui.min.css', array(), $this->version, 'all' );

		//wp_register_style('jquery-ui.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.css', array(), $this->version, 'all' );

		//wp_register_style( 'my-plugin', plugins_url( 'first-plugin-public-appointment.css' ) );
    	//wp_enqueue_style( 'my-plugin' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
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

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/first-plugin-public.js', array( 'jquery' ), $this->version, false );

		wp_register_script( 'appointment.js', plugin_dir_url( __FILE__ ) . 'js/first-plugin-public-appointment.js', array( 'jquery' ), $this->version, false );

		// in JavaScript, object properties are accessed as ajax_object.ajax_url
		wp_localize_script( 'appointment.js', 'ajax_object',
	            array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

		////bootstrap-3.3.6-dist

		wp_register_script( 'bootstrap.min.js', plugin_dir_url( __FILE__ ) . 'bootstrap-3.3.6-dist/js/bootstrap.min.js', array( 'jquery' ), $this->version, true );

		//wp_register_script( 'bootstrap.min.js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js', array( 'jquery' ), $this->version, false );

		//wp_enqueue_script( 'bootstrap.min.js');

		////selcetize plugin add
		//wp_register_script( 'selectize.min.js', plugin_dir_url( __FILE__ ) . 'selectize/js/standalone/selectize.min.js', array( 'jquery' ), $this->version, true );
		
		////International Telephone Input
		wp_register_script( 'intlTelInput.js', plugin_dir_url( __FILE__ ) . 'intl-tel-input-master/build/js/intlTelInput.min.js', array( 'jquery' ), $this->version, true );
		
		//wp_register_script( 'intlTelInput.js', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.5.2/js/intlTelInput.min.js', array( 'jquery' ), $this->version, true );

		wp_register_script( 'utils.js', plugin_dir_url( __FILE__ ) .'intl-tel-input-master/build/js/utils.js', array( 'jquery' ), $this->version, true );

		//wp_register_script( 'utils.js', 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.5.2/js/utils.js', array( 'jquery' ), $this->version, true );

		//jquery-ui -for datepicker
		wp_register_script('jquery-ui.min.js', plugin_dir_url( __FILE__ ) . 'js/jquery-ui.min.js', array( 'jquery' ), $this->version, true );

		//wp_register_script('jquery-ui.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js', array( 'jquery' ), $this->version, true );


	}

	////

	function service_update_callback(){

			
		    $id=$_POST['cat_id'] ;

		    $table=$this->tableNames->services; 

		    global $wpdb;
		   
  			$sql = "SELECT id FROM $table WHERE category_id=$id";
  			//echo $sql;
  			$results = $wpdb->get_results($sql);
  			
  			
  			echo json_encode($results);
  			
			wp_die();

	}



	function catagory_update_callback(){

			
		    $id=$_POST['service_id'] ;

		    $t_service=$this->tableNames->services; 
		    $t_catagory=$this->tableNames->categories; 

		    global $wpdb;
		   
  			$sql = "SELECT sr.category_id FROM $t_service sr INNER JOIN $t_catagory ct ON sr.category_id=ct.id WHERE sr.id=$id";
  			//echo $sql;
  			$results = $wpdb->get_results($sql);
  			
  			
  			echo json_encode($results);
  			
			wp_die();

	}

	function employee_update_callback(){

			
			
		    $id=$_POST['service_id'] ;

		    //$t_service=$this->tableNames->services; 
		    $t_ser_emp=$this->tableNames->staff_services; 
		    $t_employ=$this->tableNames->staff; 

		    global $wpdb;
		   
  			$sql = "SELECT em.full_name,srem.staff_id,srem.price FROM $t_ser_emp srem INNER JOIN $t_employ em ON srem.staff_id=em.id WHERE srem.service_id=$id";
  			//echo $sql;
  			$results = $wpdb->get_results($sql);
  			
  			
  			echo json_encode($results);
  			
			wp_die();

	}

	function schedule_times_callback(){

			
			
		    $id=$_POST['employ_id'] ;

		    //$t_service=$this->tableNames->services; 
		    $t_emp_schedl=$this->tableNames->staff_schedule_items; 
		    $t_emp_schedl_break=$this->tableNames->schedule_item_breaks; 
		    

		    global $wpdb;
		   
  			//$sql = "SELECT emsh.day_index,emsh.start_time,emsh.end_time FROM $t_emp_schedl emsh WHERE emsh.staff_id=$id";
  			$sql = "SELECT emsh.day_index,emsh.start_time,emsh.end_time,shbk.start_time as bk_s_time,shbk.end_time as bk_e_time FROM $t_emp_schedl emsh LEFT JOIN $t_emp_schedl_break shbk ON emsh.id=shbk.staff_schedule_item_id  WHERE emsh.staff_id=$id AND emsh.start_time IS NOT NULL";
  			//$sql = "SELECT em.full_name,srem.staff_id,srem.price FROM $t_ser_emp srem INNER JOIN $t_employ em ON srem.staff_id=em.id WHERE srem.service_id=$id";
  			
  			//echo $sql;
  			$results = $wpdb->get_results($sql);
  			
  			
  			echo json_encode($results);
  			
			wp_die();

	}
}
