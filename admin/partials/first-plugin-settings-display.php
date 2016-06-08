<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       isma
 * @since      1.0.0
 *
 * @package    First_Plugin
 * @subpackage First_Plugin/admin/partials
 */
?>
<?php
//Set all option 
if(isset($_POST['timeInterval'])){
	$time_interval = $_POST['timeInterval'];
	update_option( 'time_interval', $time_interval );
}

 ?>
<div class="panel panel-default">
    <div class="panel-heading">Settings</div>
    <div class="panel-body">


		<form role="form" method="post" action="#">

			<div class="form-group">
				<label for="timeInterval">Appointment Time Interval:</label>
				<!-- <input type="text" class="form-control" id="timeInterval"> -->
				<input type="text" name="timeInterval" value="<?php  echo esc_attr( get_option('time_interval') ); ?>" />



				    
    	<!-- 		<input type="submit" value="Save Setting" name="submit"> -->

			</div>
					
		
	</div>
	<div class="modal-footer">

		<?php submit_button(); ?>

       <!--  	<div class="btn-group">
       		          <button type="button" class="btn btn-primary"  id="settingSaveButton">Save</button>	
       				<input type="submit" value="Save Setting" name="submit">
       
       			</div> -->
	</form>
	        


	</div>

</div>
