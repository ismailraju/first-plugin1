<?php 

$allQuery=new allQuery();
$wrapObj=new wrap();

?>

<div class="container">
  
	<nav>
	  <ul class="pagination1">
	    <li><a class="active" href="#">Service</a></li>
	    <li><a href="#">Time</a></li>
	    <li><a href="#">Detail</a></li>
	    <li><a href="#">Payment</a></li>
	  </ul>

  	</nav>
</div>

<div>
	
 		<form role="form">

        	 <div class="">
					<label for="catagory_name">Catagory:</label>
					
					<select class="form-control" id="catagory_name">
						<option value="-1">Select Catagory</option>

					<?php 
					

				        $q=$allQuery->category();

					 	$aaa=$wrapObj->objectToArray($q,"name");
					 	$id=$wrapObj->objectToArray($q,"id");
					 	
					 	echo $wrapObj->wrap([$id,$aaa]); 
					 	
					?>
 
		       		</select>

			 </div>

        	 <div class="form-group">
					 <label for="service_name">Service:</label>	

					 <select class="form-control" id="service_name">
					 	<option value="-1">Select Service</option>
			        		<?php 
						

				        $q=$allQuery->service();

					 	$aaa=$wrapObj->objectToArray($q,"title");
					 	$id=$wrapObj->objectToArray($q,"id");
					 	
					 	echo $wrapObj->wrap([$id,$aaa]); 
					 	
					?>
					</select>

			 </div>

			  <div class="form-group">
					 <label for="employee_name">Employee name:</label>	
					 				 
					 <select class="form-control" id="employee_name">
					 	<option value="-1">Select Employee</option>
			        		<?php 
						

				        $q=$allQuery->staff();

					 	$aaa=$wrapObj->objectToArray($q,"full_name");
					 	$id=$wrapObj->objectToArray($q,"id");
					 	
					 	echo $wrapObj->wrap([$id,$aaa]); 
					 	
					?>
					</select>

		       		

			 </div>

			  <div class="form-group">
					 <label for="date">Date:</label>	
					 <input  type="text" class="form-control" id="date"  value="
					 <?php
					 	echo date("d-M-Y");
					 ?>
					 ">
				
			 </div> 

			  <div class="form-group">
					 <label for="start">Start Time:</label>	
					 				 
					 <select class="form-control" id="start">
					 	<option value="-1">Select Time</option>
			        		<?php 
						

				        $q=$allQuery->MaxTimeRange();

					 	array_pop($q);
					 	
					 	echo $wrapObj->wrap([$q,$q]); 
					 	
					?>
					</select>

			  </div>

			   <div class="form-group">
					 <label for="end">End Time:</label>	
					 				 
					 <select class="form-control" id="end">
					 	<option value="-1">Select Time</option>
			        		<?php 
						

				        $q=$allQuery->MaxTimeRange();

					 	array_shift($q);
					 	
					 	echo $wrapObj->wrap([$q,$q]); 
					 	
					?>
					</select>

			  </div>

			  <div class="form-group">
					 <label>time slot:</label>	
					<!--  <div id="clm_container" class="clm_container">
					
												 <div id="buttons_1st_clm" class="clm_class btn-group"></div>
												 <div id="buttons_2nd_clm"  class="clm_class btn-group"></div>
												 				 
												 
					</div> -->
					

			  </div>

			   <div class="form-group">
					 <label for="customer_name">Customer name:</label>	
					 				 
					 
					 <input type="text" class="form-control" name="customer_name">
					

			  </div>

			  <div class="form-group">
					 <label for="customer_email">Customer email:</label>	
					 				 
					 
					 <input type="email" class="form-control" name="customer_email">
					

			 </div>

			 <div class="form-group">
					 <label for="customer_email">Customer email:</label>	
					 				 
					 
					 <input type="email" class="form-control" name="customer_email">
					

			 </div>

			 <div class="form-group">
					 <label for="phone">Phone Number:</label><br>	
					 				 
					 
				<!-- 	 <div id="country_code">
				
				
											<select class="form-control" id="country_code">
												
											</select>
				
											
				
				</div> -->

					 <input id="phone" class="form-control" type="tel">
					

			 </div>

			 <input type="submit" id="sendbutton" value="Take appintment" name="submit">

		</form>


			<div>
			
					<button id="slotshow">show time slot</button>
			</div>


</div>



<style>
ul.pagination1 {
    display: inline-block;
    padding: 0;
    margin: 0;
    /* background-color: red; */

}
ul.pagination1 li {display: inline;}
ul.pagination1 li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    
}
ul.pagination1 li a.active {background-color: green;}



</style>

