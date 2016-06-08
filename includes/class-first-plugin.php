<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       isma
 * @since      1.0.0
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    First_Plugin
 * @subpackage First_Plugin/includes
 * @author     ismail hossain raju <ismailhossainraju74@gmail.com>
 */
class First_Plugin {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      First_Plugin_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		$this->plugin_name = 'first-plugin';
		$this->version = '1.0.0';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - First_Plugin_Loader. Orchestrates the hooks of the plugin.
	 * - First_Plugin_i18n. Defines internationalization functionality.
	 * - First_Plugin_Admin. Defines all hooks for the admin area.
	 * - First_Plugin_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-first-plugin-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-first-plugin-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-first-plugin-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-first-plugin-public.php';

		//require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/first-plugin-modals.php';

		$this->loader = new First_Plugin_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the First_Plugin_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new First_Plugin_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new First_Plugin_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
		////
		$this->loader->add_action( 'admin_menu', $plugin_admin, 'add_options_page' );
		$this->loader->add_action( 'admin_menu', $plugin_admin, 'add_top_menu' );

		
		////
		$this->loader->add_action( 'wp_ajax_my_action', $plugin_admin, 'my_action_db_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_join', $plugin_admin, 'my_action_db_join_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_stuff_schedule', $plugin_admin, 'my_action_db_schedule_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_stuffNameToId', $plugin_admin, 'my_action_db_stuffNameToId_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_customer_list', $plugin_admin, 'my_action_customer_list_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_add_appointment', $plugin_admin, 'my_action_add_appointment_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_add_appointment_update', $plugin_admin, 'my_action_add_appointment_update_callback' );

		$this->loader->add_action( 'wp_ajax_my_action_add_new_customer', $plugin_admin, 'my_action_db_new_customer_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_calender_event_update',$plugin_admin,'my_action_db_calender_event_update_callback' );
		////customer display php
		$this->loader->add_action( 'wp_ajax_my_action_customer_info',$plugin_admin,'my_action_db_customer_info_callback' );
		////appointment list display php
		
		$this->loader->add_action( 'wp_ajax_my_action_appointment_list_group',$plugin_admin,'my_action_db_appointment_list_group_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_same_appoint_customers_list',$plugin_admin,'my_action_same_appoint_customers_list_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_appointment_delete',$plugin_admin,'my_action_appointment_delete_callback' );
		 

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new First_Plugin_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

		////my action hooks
		$this->loader->add_action( 'wp_ajax_my_action_service_update', $plugin_public, 'service_update_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_catagory_update', $plugin_public, 'catagory_update_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_employee_update', $plugin_public, 'employee_update_callback' );
		$this->loader->add_action( 'wp_ajax_my_action_schedule_times', $plugin_public, 'schedule_times_callback' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    First_Plugin_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
