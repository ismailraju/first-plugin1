
<?php
?>

		<!-- ////////////////////////////////////customer add modals//////////////////////////////////////// -->

		<!-- Trigger the modal with day click-->
		<!--   <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> -->

		  <!-- Modal -->
		  <div class="modal fade" id="newCustomerModal" role="dialog">

			    <div class="modal-dialog">
			    
			      <!-- Modal content-->
			      <div class="modal-content">

				        <div class="modal-header">
				          <button type="button" class="close" data-dismiss="modal">&times;</button>
				          <h4 class="modal-title">New customer</h4>
				        </div>


				        <div class="modal-body">
					  

					        <form role="form">

					        	<div class="form-group">
		     						 <label for="customer_name">Name:</label>
		     						 <input type="text" class="form-control" id="customer_name" placeholder="Customer's Name">
		     						 <label id="customer_name_error" style="color:red;">*input name</label> 

		   						</div>

								<div class="form-group">
		     						 <label for="email_id">Email:</label>
		     						 <input type="email" class="form-control" id="email_id" placeholder="Customer's email">
		     						 <label id="email_id_error" style="color:red;">*Not a valid email address</label> 
		     						 <label id="email_id_input_error" style="color:red;">*input email address</label> 

		   						</div>

								<div class="form-group">
		     						 <label for="phn_number">Phone number:</label>
		     						<!--  <input type="text" class="form-control" id="phn_number" ng-model="form.phone" placeholder="Customer's Phone No."> -->

		     						 <div class="form-inline">

									    <select  class="form-control"  id="country_code">
										    <option>+880</option>
										    <option>+999</option>
										    <option>-5515</option>
										    <option>+5441</option>
										    <option>+881</option>
										    <option>+991</option>
										    <option>-5115</option>
										    <option>+5411</option>
										    <option>+880</option>
										    <option>+999</option>
										    <option>-5515</option>
										    <option>+5441</option>
										    <option>+881</option>
										    <option>+991</option>
										    <option>-5115</option>
										    <option>+5411</option>
										</select>

									  	<input type="text" id="phn_number" class="form-control" placeholder="Customer's Phone No.">

									</div>
									<label id="phn_number_error" style="color:red;">*input phone number</label> 
		     						 
		     						 <!-- <select class="form-control bfh-countries" data-country="US"></select> -->

		   						</div>

								<div class="form-group">
		     						 <label for="notes">Description:</label>
		     						 <textarea class="form-control" rows="5" id="notes"></textarea>

		   						</div>

			

							</form>

				        </div>



				        <div class="modal-footer">

				        	<div class="btn-group">
					          <button type="button" class="btn btn-primary" id="saveButtonCust">Save</button>
					          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					        </div>


				        </div>

			      </div>
			      
			    </div>


 		</div>