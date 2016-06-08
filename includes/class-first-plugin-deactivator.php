<?php

/**
 * Fired during plugin deactivation
 *
 * @link       isma
 * @since      1.0.0
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    First_Plugin
 * @subpackage First_Plugin/includes
 * @author     ismail hossain raju <ismailhossainraju74@gmail.com>
 */
class First_Plugin_Deactivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate() {

		delete_option( 'time_interval' );

	}

}
