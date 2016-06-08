<?php ?>

<div class="panel panel-default">
    <div class="panel-heading">Appointments</div>
    <div class="panel-body">
 


		
		

			<table id="table2_AD"  class="display" cellspacing="0" width="100%" >
				
			      <thead>
			            <tr>
			                <th>Appointment Time</th>
			                <th>Customer Name</th>
			                <th>Stuff Name</th>
			                <th>Service</th>                
			                <th>Duration</th>
			                <th>button</th>
			               
			            </tr>
			        </thead>
			        <tfoot>
			            <tr>
			                <th>Appointment Time</th>
			                <th>Customer Name</th>
			                <th>Stuff Name</th>
			                <th>Service</th>                
			                <th>Duration</th>
			                <th>button</th>
			               
			            </tr>
			        </tfoot>


			</table> 
		
		<button id="testBtn_AD">testt</button>



  <!-- Modal  update -->
		  <div class="modal fade" id="ModalAppoint-appoint-dist-php" role="dialog">

			    <div class="modal-dialog">
			    
			      <!-- Modal content-->
			      <div class="modal-content">

				        <div class="modal-header">
				          <button type="button" class="close" data-dismiss="modal">&times;</button>
				          <h4 class="modal-title">New appointment</h4>
				        </div>


				        <div class="modal-body">
					  

					        <form role="form">

					        	
		     						

		     					<input  id="appoint_ID_AD">

					        	 <div class="form-group">
		     						 <label for="provider_name_AD">Provider:</label>
		     						<!--  <input type="text" class="form-control" id="provider_name_AD" placeholder="Service Provider's Name"> -->

		     						<select class="form-control" id="provider_name_AD">


							       	</select>

		   						 </div>

					        	 <div class="form-group">
		     						 <label for="service_name_AD">Service:</label>
		     						 <!-- <input type="text" class="form-control" id="service_name_AD" placeholder="Service Name"> -->
		     						 <select class="form-control" id="service_name_AD">
								        <option>--Select a service--</option>
		<!-- 						    <option>2</option>
								        <option>3</option>
								        <option>4</option> -->
							       	</select>
							       	<label id="service_error_AD" style="color:red;">*Select a service</label>

		   						 </div>

					        	 <div class="form-group">
		     						 <label for="date_field_AD">Date:</label>
		     						 <input type="text"  class="form-control" id="date_field_AD" value="<?php echo date("m/d/Y");?>">
		   						 </div>


					        	 <div class="form-group " >
					        	 		

				     					<label for="period_field_start_AD">Period</label>

				     					<div class="form-inline">
				     						 
				     						 <select class="form-control"  id="period_field_start_AD">
										        <option>--Start time--</option>
				<!-- 						    <option>2</option>
										        <option>3</option>
										        <option>4</option> -->

									       	</select>

									       	 <label for="period_field_end_AD">to</label>
				     						
				     						 <select class="form-control" id="period_field_end_AD">
										        <option>--End time--</option>
				<!-- 						    <option>2</option>
										        <option>3</option>
										        <option>4</option> -->
									       	</select>
									    </div> 

									    <label id="period_error_AD" style="color:red;">*Select starting time</label>  	
									    <label id="period_error_holiday_AD" style="color:red;">*Off day</label>  	

		   						</div>



		   						<div class="form-group">

		     						<label for="customer_field_AD">Customers</label>
		     						 
		     						<select  id="customer_field_AD" multiple></select>
		     						<label id="cust_error_AD"  style="color:red;">*Select customer</label>
		     						<label id="customer_create_AD"><a >New customer</a></label> 
			     			
		   						</div> 
		<!-- 

		 						<div class="form-group">

		     						<label id="customer_create_AD"><a >New customers</a></label> 	
		     			
			     			
		   						</div -->
			

							</form>

				        </div>



				        <div class="modal-footer">

				        	<div class="btn-group">
					          <button type="button" class="btn btn-primary" id="appointmentSaveButton_AD">Save</button>
					          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					        </div>


				        </div>

			      </div>
			      
			    </div>
		  </div>




		<!-- ////////////////////////////////////customer add modals//////////////////////////////////////// -->

		<!-- Trigger the modal with day click-->
		<!--   <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> -->

		  <!-- Modal -->
		  <div class="modal fade" id="newCustomerModal_AD" role="dialog">

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
		     						 <label for="customer_name_AD">Name:</label>
		     						 <input type="text" class="form-control" id="customer_name_AD" placeholder="Customer's Name">
		     						 <label id="customer_name_error_AD" style="color:red;">*input name</label> 

		   						</div>

								<div class="form-group">
		     						 <label for="email_id_AD">Email:</label>
		     						 <input type="email" class="form-control" id="email_id_AD" placeholder="Customer's email">
		     						 <label id="email_id_error_AD" style="color:red;">*Not a valid email address</label> 
		     						 <label id="email_id_input_error_AD" style="color:red;">*input email address</label> 

		   						</div>

								<div class="form-group">
		     						 <label for="phn_number_AD">Phone number:</label>
		     						<!--  <input type="text" class="form-control" id="phn_number" ng-model="form.phone" placeholder="Customer's Phone No."> -->

		     						 <div class="form-inline">

									    <select  class="form-control"  id="country_code_AD">
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

									  	<input type="text" id="phn_number_AD" class="form-control" placeholder="Customer's Phone No.">

									</div>
									<label id="phn_number_error_AD" style="color:red;">*input phone number</label> 
		     						 
		     						 <!-- <select class="form-control bfh-countries" data-country="US"></select> -->

		   						</div>

								<div class="form-group">
		     						 <label for="notes_AD">Description:</label>
		     						 <textarea class="form-control" rows="5" id="notes_AD"></textarea>

		   						</div>

			

							</form>

				        </div>



				        <div class="modal-footer">

				        	<div class="btn-group">
					          <button type="button" class="btn btn-primary" id="saveButtonCust_AD">Save</button>
					          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					        </div>


				        </div>

			      </div>
			      
			    </div>
		  </div>


	</div>

 </div>