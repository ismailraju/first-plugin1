<?php

/**
 * Fired during plugin activation
 *
 * @link       isma
 * @since      1.0.0
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    First_Plugin
 * @subpackage First_Plugin/includes
 * @author     ismail hossain raju <ismailhossainraju74@gmail.com>
 */
class First_Plugin_Activator {////activation such as creating custom tables or saving default options.

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {

		update_option( 'time_interval', 15 );
	}

}
