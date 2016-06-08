


jQuery(document).ready(function($) {

toastr.options = {
					  "closeButton": true,
					  "debug": false,
					  "newestOnTop": false,
					  "progressBar": true,
					  "positionClass": "toast-top-right",
					  "preventDuplicates": false,
					  "onclick": null,
					  "showDuration": "300",
					  "hideDuration": "1000",
					  "timeOut": "5000",
					  "extendedTimeOut": "1000",
					  "showEasing": "swing",
					  "hideEasing": "linear",
					  "showMethod": "fadeIn",
					  "hideMethod": "fadeOut"
					}

	//////////////////////////////function/////////////////////////////

	//customerListDBFunction_AD();
function emailverification_AD(email){

	var regEx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	if (email== '' || !regEx.test(email))
	{ return false; }
	else { return true; }

}



function addNewCustomerFunction_AD(cust_name,emailAddress,phn_num,descript) {

	console.log("addNewCustomerFunction_AD()");

	var data  = {
		'action': 'my_action_add_new_customer',
		'cust_name':cust_name,
		'email':emailAddress,
		'phn_num':phn_num,
		'descript':descript

	};



	$.ajax({
		url:ajax_object.ajax_url,
		type:'POST',
		//dataType: "json",
		//dataType: "Array",
		data:data,
		success:function(response1) {
				console.log(response1);
				//alert(response1);

				 $('#newCustomerModal_AD').modal('hide');


					

				}

		})
		.done(
			function( response1 ) {

			    console.log(">>done<<");


			    customerListDBFunction_AD();
				
			}
	  	)
	  
	  	.fail(
	  			function( xhr, status, errorThrown ) {
				    alert( "Sorry, there was a problem!" );
				    console.log( "Error: " + errorThrown );
				    console.log( "Status: " + status );
				    console.dir( xhr );
				  }
	  	)
	  
	  	.always(
	  			function( xhr, status ) {
	  				console.log(">>always<<");
	  				//customerListDBFunction_AD();
				    //alert( "The request is complete!" );





				  }
	  	);

}



function saveButtonNewCustomer_AD(){

		console.log("saveButtonNewCustomer_AD()");


		$("#email_id_error_AD").hide();
		$("#email_id_input_error_AD").hide();
		$("#customer_name_error_AD").hide();
		$("#phn_number_error_AD").hide();


		var cust_name=$( "#customer_name_AD" ).val();
		if(cust_name==""){
			$("#customer_name_error_AD").show();
			return;
		}



		var emailAddress=$( "#email_id_AD" ).val();
		if(emailAddress==""){
			$("#email_id_input_error_AD").show();
			return;
		}else
		if(!emailverification_AD(emailAddress)){
			$("#email_id_error_AD").show();
			return;
		}

		var country_cod=$( "#country_code_AD" ).val();
		var phn_num=$( "#phn_number_AD" ).val();
		if(phn_num==""){
			$("#phn_number_error_AD").show();
			return;
		}
		phn_num=country_cod+phn_num;

		var descript=$( "#notes_AD" ).val();


		console.log(cust_name,emailAddress,phn_num,descript);

		addNewCustomerFunction_AD(cust_name,emailAddress,phn_num,descript);

}




	function databaseTIme2DateObj(DB_date){
		//console.log(DB_date);

		var parts=DB_date.split(' ');
		var date=parts[0];
		var time=parts[1];
		//console.log(date);
		//console.log(time);

		var dateparts=date.split('-');
		var timeparts=time.split(':');


		var year=parseInt(dateparts[0]);
		var month=parseInt(dateparts[1]-1);
		var day=parseInt(dateparts[2]);
		var hours=parseInt(timeparts[0]);
		var minutes=parseInt(timeparts[1]);
		var seconds=parseInt(timeparts[2]);
		var milliseconds=parseInt('0');
		//console.log(year, month, day, hours, minutes, seconds, milliseconds);



		return new Date(year, month, day, hours, minutes, seconds, milliseconds);


	}






	function providerNameUpdate(p_name){

		console.log("providerNameUpdate()");

			var data = {
							'action': 'my_action',
							'whatever': ajax_object.we_value      // We pass php values differently!
						};

			$.ajax({
				url:ajax_object.ajax_url,
				type:'GET',
				dataType: "json",
				 data:data,
				success:function(response) {

						//alert('Got this from the server: ' + response);
						//console.log(response[0].id);
						var option_string='';

						for(var i=0;i<response.length;i++){

							option_string+="<option value='";
							option_string+=response[i].full_name;
							option_string+="' ";


							if(response[i].full_name==p_name){	option_string+="selected='selected' ";  }



							option_string+=">";
							option_string+=response[i].full_name;
							//option_string+="(id:"+response[i].id+")";
							option_string+="</option>";					      
					    }






						$("#provider_name_AD").html(option_string);

				}			
			});


	}







	function ServiceUpdateFunction_AD(fname,serv_name) {

		console.log("function ServiceUpdateFunction_AD(fname,serv_name)");

		var data1 = {
			'action': 'my_action_join',
			'stuffname':fname,
		};


		/////////////////join///
		$.ajax({
			url:ajax_object.ajax_url,
			type:'POST',
			dataType: "json",
			data:data1,
			success:function(response1) {

					//alert('Got this from the server: ' + response1);
					// console.log(response1[2].id,response1.length);
					var service_string="<option>--Select a service--</option>";

					for(var i=0;i<response1.length;i++){
						service_string+="<option value='";
						service_string+=response1[i].title;
						service_string+="' ";


						if(response1[i].title==serv_name){	service_string+="selected='selected' ";  }



						service_string+=">";
						service_string+=response1[i].title;
						service_string+="( "+response1[i].duration/60 +"min )";
						service_string+="</option>";					      
				    }

					$("#service_name_AD").html(service_string);


				}

		});

	}



	function DateToWeakFromDateField(temp){

		console.log("function DateToWeakFromDateField()");
		//var temp= $("#date_field_AD").val();
		//console.log(temp);
		parts=temp.split('/');
		
		var d = new Date();
		d.setFullYear(parts[2],parts[0], parts[1]);

		//   fri sat sun mon tus wed thus
		//my  0   1	  2   3   4    5  6 
		//bly 6   7   1   2   3    4  5  

		var dayIndex=[6,7,1,2,3,4,5];

		//console.log(d.getDay());
		//console.log(dayIndex[d.getDay()]);

		return dayIndex[d.getDay()];

	}



	function stuffScheduleRequestDbFunction_AD(stuffname,s_time,e_time) {

		console.log("function stuffScheduleRequestDbFunction_AD(stuffname)");
		//console.log(s_time);
		//console.log("<<");
		var data1 = {
			'action': 'my_action_stuff_schedule',
			'stuff_name':stuffname,
		};


		/////////////////join///
		$.ajax({
			url:ajax_object.ajax_url,
			type:'POST',
			dataType: "json",
			data:data1,
			success:function(response1) {
					//console.log(response1);
					var day=DateToWeakFromDateField($("#date_field_AD").val())-1;
					//console.log(day);

					var str=response1[day].start_time;
					//console.log(str);
					if(str!=null){

							var parts=str.split(':');
							var start_time=parseInt(parts[0]*60)+parseInt(parts[1]);
							//console.log(" ",parts[0]," ",parts[1],"\n");

							str=response1[day].end_time;
							parts=str.split(':');
							var end_time=parseInt(parts[0]*60)+parseInt(parts[1]);
							 //alert('Got this from the server: ' + response1);
							//console.log(" ",parts[0]," ",parts[1]);

							//console.log(response1[3].start_time,response1[3].end_time);
							//console.log(start_time,"\n",end_time);

							var time_start_string="<option>--Select time--</option>";

							for(var i=start_time;i<=end_time;i+=15 ){
				
								time_start_string+="<option value='";
								time_start_string+=i;

								time_start_string+="' ";


								if(i==s_time){	time_start_string+="selected='selected' ";  }



								time_start_string+=">";

								var h=parseInt(i/60)%12;
								var m=parseInt(i%60);

								if(h==0){ time_start_string+=12; }
								else{ time_start_string+=h; }

								time_start_string+=":";
								time_start_string+=((m<10) ? '0'+m :m);

								if(i>719){ time_start_string+=" pm"; }
								else { time_start_string+=" am"; }

								time_start_string+="</option>";					      
						    }

							$("#period_field_start_AD").html(time_start_string);
							


							/////////////////////////////////////////////////////////////
							var time_start_string="<option>--Select time--</option>";

							for(var i=start_time;i<=end_time;i+=15 ){
				
								time_start_string+="<option value='";
								time_start_string+=i;

								time_start_string+="' ";


								if(i==e_time){	time_start_string+="selected='selected' ";  }



								time_start_string+=">";

								var h=parseInt(i/60)%12;
								var m=parseInt(i%60);

								if(h==0){ time_start_string+=12; }
								else{ time_start_string+=h; }

								time_start_string+=":";
								time_start_string+=((m<10) ? '0'+m :m);

								if(i>719){ time_start_string+=" pm"; }
								else { time_start_string+=" am"; }

								time_start_string+="</option>";					      
						    }

							
							$("#period_field_end_AD").html(time_start_string);





					}
					else{

						$("#period_field_start_AD").html("<option>"+"--Holiday--"+"</option>");
						$("#period_field_end_AD").html("<option>"+"--Holiday--"+"</option>");
					}

				}

		});

	}










		function customerListDBFunction_AD() {

			console.log("customerListDBFunction_AD()_AD");

			var data1 = {
				'action': 'my_action_customer_list',
				
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				data:data1,
				success:function(response1) {

						//console.log(response1);
						//alert('Got this from the server: ' + response1);
						//var $select = $('select#customer_field_AD').selectize();
						//var control = $select[0].selectize;

						//control.renderCache = {};
						//control.clearOptions();
										
						//control.clear();
						/*control.load(function(callback) {
						    callback(selectOptions);
						 });*/

						$('select#customer_field_AD').selectize({

							plugins: ['remove_button'],
							persist: false,
						    maxItems: null,
						    valueField: 'email',
						    labelField: 'name',
						    searchField: ['name', 'email'],
						    options:response1,
						    render: {
						        item: function(item, escape) {
						            return '<div>' +
						                (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +"("+
						                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
						                (item.phone ? '<span class="phone">' + escape(item.phone) + '</span>' : '') +")"+
						            '</div>';
						        },
						        option: function(item, escape) {
						            var label = item.name || item.email;
						            var caption = item.name ? item.email : null;
						            var phn = item.name ? item.phone : null;
						            return '<div>' +
						                '<span style="color:blue;font-weight:bold" >' + escape(label) + '</span>' +"("+
						                (caption ? '<span style="color:darkolivegreen;font-weight:bold" >' + escape(caption) + '</span>' : '') +
						                (phn ? '<span style="color: green;font-weight:bold" >' + escape(phn) + '</span>' : '') +")"+
						            '</div>';
						        }
						    }


						});


				/*		selectOptions=[];

						selectOptions.push({
				            text: 'helw',
				            value: 'HLW'
				          });

						control.load(function(callback) {
				          callback(selectOptions);
				        });
*/
										/*var control = $select[0].selectize;

						control.renderCache = {};
						control.clearOptions();*/
						//control.clear();






					}

			})
			.done(
				function( response1 ) {

				    //console.log("jsondata d0ne customer info:",response1);

				    
					/*	$('select#customer_field_AD').selectize({

							plugins: ['remove_button'],
							persist: false,
						    maxItems: null,
						    valueField: 'email',
						    labelField: 'name',
						    searchField: ['name', 'email'],
						    options:response1,
						    render: {
						        item: function(item, escape) {
						            return '<div>' +
						                (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +"("+
						                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
						                (item.phone ? '<span class="phone">' + escape(item.phone) + '</span>' : '') +")"+
						            '</div>';
						        },
						        option: function(item, escape) {
						            var label = item.name || item.email;
						            var caption = item.name ? item.email : null;
						            var phn = item.name ? item.phone : null;
						            return '<div>' +
						                '<span style="color:blue;font-weight:bold" >' + escape(label) + '</span>' +"("+
						                (caption ? '<span style="color:darkolivegreen;font-weight:bold" >' + escape(caption) + '</span>' : '') +
						                (phn ? '<span style="color: green;font-weight:bold" >' + escape(phn) + '</span>' : '') +")"+
						            '</div>';
						        }
						    }


						});*/

					
				}
		  	)
		  
		  	.fail(
		  			function( xhr, status, errorThrown ) {
					    alert( "Sorry, there was a problem!" );
					    console.log( "Error: " + errorThrown );
					    console.log( "Status: " + status );
					    console.dir( xhr );
					  }
		  	)
		  
		  	.always(
		  			function( xhr, status ) {
		  				console.log(">>always<<");
					    //alert( "The request is complete!" );





					  }
		  	);

				}





		function sameAppointmentCustomersListDBFunction(appointmentID,control) {

			console.log("sameAppointmentCustomersListDBFunction()");



			var data1 = {
				'action': 'my_action_same_appoint_customers_list',
				'appointmentID':appointmentID,
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				data:data1,
				success:function(response1) {

						  //console.log(response1);
						  //alert('Got this from the server: ' + response1);

						  for (var i=0; i <response1.length; i++) {


		    				control.addItem(response1[i].email);
		    				//console.log(response1[i].email);
							
						}

					}

			});

		}



		function AppointmentDeleteDBFunction(appointmentID) {

			console.log("AppointmentDeleteDBFunction() AD");



			var data1 = {
				'action': 'my_action_appointment_delete',
				'appointmentID':appointmentID,
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				data:data1,
				success:function(response1) {

						  //console.log("Appointment Delete DB",response1);
						  //alert(response1);
						  //$('#table2_AD').DataTable().ajax.reload(null, false);
						  table.ajax.reload(null, false);
							
						}

					

			});

		}




	//////////////////////////////////


	$("#ModalAppoint-appoint-dist-php").on("show.bs.modal", function () { 

				console.log("on(show.bs.modal)");
				//customerListDBFunction_AD();

		   			//providerNameUpdate();
							
					//$('#provider_name_AD option[value="'+ data.full_name +'"]').attr('selected', 'selected');
					//$('#provider_name_AD option[value="mahadi"]').attr('selected', 'selected');


					//console.log($( "#provider_name_AD option:selected" ).text());
					//ServiceUpdateFunction_AD($( "#provider_name_AD option:selected" ).text());
					
					//stuffScheduleRequestDbFunction_AD($( "#provider_name_AD option:selected" ).text());
							



	});






	$("#ModalAppoint-appoint-dist-php").on("shown.bs.modal", function () { 

				console.log("on(shown.bs.modal)");
				//customerListDBFunction_AD();

		   			//providerNameUpdate();
							
					//$('#provider_name_AD option[value="'+ data.full_name +'"]').attr('selected', 'selected');

					//$('#provider_name_AD option[value="mahadi"]').attr('selected', 'selected');

					//console.log($( "#provider_name_AD option:selected" ).text());


					//$( "#provider_name_AD" ).attr("selected", true);
					//$( "#service_name_AD" ).attr("selected", true);
					//ServiceUpdateFunction_AD($( "#provider_name_AD option:selected" ).text());

					//$('#service_name_AD option[value="super cut"]').attr('selected', 'selected');
					
					//stuffScheduleRequestDbFunction_AD($( "#provider_name_AD option:selected" ).text());
							



	});


	//////////////////////////////////////////////////////








		var table=$('#table2_AD').DataTable( {

			
	        "ajax": {

	        	url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				//dataType: "Array",
				"dataSrc": "",
				data:{'action': 'my_action_appointment_list_group'},
			
				

	        },
	        "columns": [

	            { "data": "start_date" },
	            { "data": "name" }, 
	            { "data": "full_name" },
	            { "data": "title" },
	            { "data": "duration" },
	        
	            {"mRender": function (data, type, row) { 
	            	return '<div class="btn-group btn-group-xs" role="group" aria-label="...">'+
		            			'<button class="editor_edit btn btn-primary btn-xs" '+' value='+ row.id+ '>'+'Edit' + '</button>'+
		            			'<button class=" editor_delete btn btn-primary btn-xs" '+' value='+ row.id+ '>'+'Delete' + '</button>'+
	            			'</div>';
	            }	}
	           
	        ],
	        dom: 'Bfrtip',
	        select: true,
	        deferRender: true,
	        rowId: 'id',
	        buttons: [
	            {
	                text: 'New Appointment',
	                action: function ( e, dt, node, config ) {

	                		table.rows( '.selected' ).nodes().to$().removeClass( 'selected' );


							$("#service_error_AD").hide();
							$("#period_error_AD").hide();
							$("#period_error_holiday_AD").hide();
							$("#cust_error_AD").hide();

							//$("#appoint_ID_AD").hide();
							$("#appoint_ID_AD").val(-100);



							var data = {
									'action': 'my_action',
									'whatever': ajax_object.we_value      // We pass php values differently!
								};

							$.ajax({
								url:ajax_object.ajax_url,
								type:'GET',
								dataType: "json",
								 data:data,
								success:function(response) {

										//alert('Got this from the server: ' + response);
										//console.log(response[0].id);
										var option_string='';

										for(var i=0;i<response.length;i++){
											option_string+="<option value='";
											option_string+=response[i].full_name;
											option_string+="'>";
											option_string+=response[i].full_name;
											//option_string+="(id:"+response[i].id+")";
											option_string+="</option>";					      
									    }

										$("#provider_name_AD").html(option_string);


										ServiceUpdateFunction_AD($( "#provider_name_AD option:selected" ).text(),null);
										//defaultperiod();
										stuffScheduleRequestDbFunction_AD($( "#provider_name_AD option:selected" ).text());

										var $select = $('select#customer_field_AD').selectize();
										var control = $select[0].selectize;
										console.log(control);
										control.clear();

						 
		                				$('#ModalAppoint-appoint-dist-php').modal('show');//modals unshow
		                    
			                }
			            });
					}
				}
	        ],
	        "initComplete": function(settings, json) {
	        					
							    customerListDBFunction_AD();


							}

	    } );




  $(function() {
    $( "#date_field_AD" ).datepicker({
    	buttonImageOnly: true,
    	onSelect: function(dateText){
    			stuffScheduleRequestDbFunction_AD($( "#provider_name_AD option:selected" ).text());
        	
            }
    });
  });
		


/*
12 hour format (input string)
24 hour format (output string)

*/
function convert12to24_AD(str12){

		//var str12=$( "#period_field_start option:selected" ).text();

		//console.log('\ntime(input):'+ str12);
		
		var parts=str12.split(':');
		var parts2=parts[1].split(' ');

		var time=parseInt(parts[0])*60+parseInt(parts2[0]);
		if(parts2[1]=="pm" && parts[0]!=12 ){time+=720;}
		//console.log('\n time(min):'+ time);


		var h=parseInt(time/60);
		var m=parseInt(time%60);


		var string="";
		string+=((h<10) ? '0'+h :h);
		string+=':';
		string+=((m<10) ? '0'+m :m);
		string+=':00';
		



		return string; 


}




function addApointmentFunction_AD(p_name,s_name,date,start_time,end_time,cust_name) {

	console.log("function addApointmentFunction_AD()");

	var data  = {
		'action': 'my_action_add_appointment',
		'provider_name':p_name,
		'service_name':s_name,
		'date':date,
		'time_start':start_time,
		'time_end':end_time,
		'cust_names':cust_name
	};



	$.ajax({
		url:ajax_object.ajax_url,
		type:'POST',
		dataType: "json",
		//dataType: "Array",
		data:data,
		success:function(response1) {
				console.log("addApointment: ",response1);
				//alert(response1);

				if(response1>0){

					// for success - green box
					toastr.success('Added Successfully\nStuff:'+p_name+'\nCustomer:'+cust_name);

				}else{

					// for errors - red box
					toastr.error('Not Added\nStuff:'+p_name+'\nCustomer:'+cust_name);

				}
				
					
				//$('#table2_AD').DataTable().ajax.reload(null, false);
				$('#table2_AD').DataTable().ajax.reload(function ( json ) {


							//table.rows( '.selected' ).nodes().to$().removeClass( 'selected' );
							table.order( [ 0, 'desc' ] ).draw();

							var indx=table.data().count()-1;
							console.log("table index>>: : ",indx);

						   	table.rows(indx).nodes().to$().addClass('selected' );

						} ,
						false);

				}

		})
	.done(
		function( response1 ) {

		    console.log("jsondata d0ne new appont id:",response1);

		    
			
		}
  	)
  
  	.fail(
  			function( xhr, status, errorThrown ) {
			    alert( "Sorry, there was a problem!" );
			    console.log( "Error: " + errorThrown );
			    console.log( "Status: " + status );
			    console.dir( xhr );
			  }
  	)
  
  	.always(
  			function( xhr, status ) {
  				console.log(">>always<<");
			    //alert( "The request is complete!" );





			  }
  	);

	}





function updateApointmentFunction_AD(appointID,p_name,s_name,date,start_time,end_time,cust_name) {

	console.log("function updateApointmentFunction_AD()");

	var data  = {
		'action': 'my_action_add_appointment_update',
		'appointment_id':appointID,
		'provider_name':p_name,
		'service_name':s_name,
		'date':date,
		'time_start':start_time,
		'time_end':end_time,
		'cust_names':cust_name
	};



	$.ajax({
		url:ajax_object.ajax_url,
		type:'POST',
		dataType: "json",
		//dataType: "Array",
		data:data,
		success:function(response1) {
				console.log(response1);
				//alert(response1);
				table.ajax.reload(null, false);
				//table.ajax.reload();

				if(response1==appointID){

					toastr.success('Updated Successfully\nStuff:'+p_name+'\nCustomer:'+cust_name);

				}else{

					toastr.error('NOt Updated\nStuff:'+p_name+'\nCustomer:'+cust_name);

				}

				
				}

	}) 
	.done(
		function( response1 ) {

		    console.log("jsondata d0ne",response1);


		    var indx = table
					    .row( function ( idx, data, node ) {
					    	//console.log( idx,"<<",data.id, "<<",response1, "<<",node);

					        return data.id == response1 ? true : false;
					         //data.id == response1 ? console.log( "milse") : false;


					    } ).index();
					    
			console.log("index: ", indx);
			//return indx;
			//table.rows(indx).nodes().to$().addClass('highlight' );
			//table.rows(indx).nodes().to$().addClass('updated' );
			//table.rows(indx).nodes().to$().addClass('selected' );
			//table.rows(indx).nodes().to$().addClass('newRow');
			//table.rows(21).nodes().to$().css("background-color", "yellow");
			//$(table.rows(indx).nodes()).addClass('selected' );
		}
  	)
  
  	.fail(
  			function( xhr, status, errorThrown ) {
			    alert( "Sorry, there was a problem!" );
			    console.log( "Error: " + errorThrown );
			    console.log( "Status: " + status );
			    console.dir( xhr );
			  }
  	)
  
  	.always(
  			function( xhr, status ) {
			    //alert( "The request is complete!" );
			  }
  	);

	}


		function appointmentSaveButtonAction_AD(){


		$("#service_error_AD").hide();
		$("#period_error_AD").hide();
		$("#period_error_holiday_AD").hide();
		$("#cust_error_AD").hide();


		var appointID=$("#appoint_ID_AD").val();
		//console.log(appointID);
		//alert(appointID);

		var p_name=$( "#provider_name_AD option:selected" ).text();

		var s_name=$( "#service_name_AD option:selected" ).text();
		if(s_name=="--Select a service--"){$("#service_error_AD").show();return;}
		var p=s_name.split('(');
		s_name=p[0];


		var date=$("#date_field_AD").val();
		var parts = date.split("/");
		var dd=parts[1];
		var mm=parts[0];
		var yyyy=parts[2];
		date=yyyy+"-"+mm+"-"+dd;

		var start_time=$( "#period_field_start_AD option:selected" ).text();
		if(start_time=="--Select time--"){$("#period_error_AD").show();return;}
		if(start_time=="--Holiday--"){$("#period_error_holiday_AD").show();return;}
		var start_time=convert12to24_AD(start_time);


		var end_time=convert12to24_AD($( "#period_field_end_AD option:selected" ).text());

		//var cust_name=$( "#customer_field option:selected" ).text();
		var cust_names = [];
		$('#customer_field_AD option:selected').each(function(){ cust_names.push($(this).val()); });
		//var result = cust_names.join(', ');
		if(cust_names.length==0){$("#cust_error_AD").show();return;}




		console.log(appointID,p_name,s_name,date,start_time,end_time,cust_names);

		if(appointID<0){
			addApointmentFunction_AD(p_name,s_name,date,start_time,end_time,cust_names);

		}else{
			updateApointmentFunction_AD(appointID,p_name,s_name,date,start_time,end_time,cust_names);
		}



		$('#ModalAppoint-appoint-dist-php').modal('hide');//modals unshow

		


		}



		function addCustomerList(emails,control){


			var parts=emails.split(',');
			
			
			for (var i = 0; i < parts.length; i++) {
				control.addItem(parts[i]);
			}
			


		}


		/*
		 *
		read service time from service selection field
		*/
		function serviceTimefromField(){

			var temp= $( "#service_name_AD option:selected" ).text();

			var f=temp.match(/[0-9]+min/g);

			if(f==null){return parseInt(-1);}
			else {return parseInt(f[0].split('m')[0]);}

			//(f==null) ? return -1 :return f[0].split('m')[0];

		}
			/////////////////////////action function///////////////////////////////

		

			function readAppointmentListGruopFunction() {

				console.log("readAppointmentListGruopFunction");

				var data  = {
					'action': 'my_action_appointment_list_group'

				};



				$.ajax({
					url:ajax_object.ajax_url,
					type:'POST',
					dataType: "json",
					//dataType: "Array",
					data:data,

					success:function(response) {
							console.log(response);

							for (var i =0; i < response.length ; i++) {
								console.log( response[i].name);
							}
										

							}

				});

			}			
	 

			$("#testBtn_AD").click(function(){
					console.log("testing");

					 //table.ajax.reload(null, false);
					//readAppointmentListGruopFunction();
					//$('#cust_table_AD').DataTable();
					table1=$('#table2_AD' ).dataTable().api();
					//table1.search( 'raju' ).draw();

					//var n = $('#table2_AD', table1.fnGetNodes() )[0];
					//table1.fnDisplayRow( n);

					//table.order( [ 0, 'desc' ] ).draw();
					
					// for success - green box
					//toastr.success('Success messages');

					// for errors - red box
					//toastr.error('errors messages');

					// for warning - orange box
					//toastr.warning('warning messages');

					// for info - blue box
					//toastr.info('info messages');

					//toastr.options.timeOut = 3000;
	        	
	    	});

	//////////////////////////////////

		   $('#table2_AD tbody').on( 'click', '.editor_edit', function () {

		   		console.log("editor_edit click");
		   		//console.log($(this).val());

		        var data = table.row( $(this).parents('tr') ).data();
		        console.log(data);
		        //console.log(data.full_name);

		        
		        //table.row( $(this).parents('tr') ).addClass('selected');
		       // table.rows(indx).nodes().to$().addClass('selected' );

		       //table.$('tr.selected').removeClass('selected');
		       //table.$('tr.selected').css("background-color","red");
		       //table.$('tr.selected').addClass('selected');
            	//$(this).addClass('selected');


	    	    $("#service_error_AD").hide();
				$("#period_error_AD").hide();
				$("#period_error_holiday_AD").hide();
				$("#cust_error_AD").hide();

				//$( "#appoint_ID_AD" ).hide();

				$( "#appoint_ID_AD" ).val(data.id);


		        providerNameUpdate(data.full_name);


		        //console.log($( "#provider_name_AD option:selected" ).text());
		        

		        ServiceUpdateFunction_AD(data.full_name,data.title);

		        //databaseTIme2DateObj(date.start_time);

		        //console.log(data.start_date);

		        var date1=databaseTIme2DateObj(data.start_date);

		        //console.log(date1.getDay(),date1.getDate(),date1.getFullYear());
		        //console.log(date1.getHours(),date1.getMinutes());
		        var s_min=parseInt(date1.getHours()*60+date1.getMinutes());
		        
				//console.log(s_min);

		        $("#date_field_AD").val(date1.getMonth()+1+"/"+date1.getDate()+"/"+date1.getFullYear());



		       
					
				


				var date2=databaseTIme2DateObj(data.end_date);

		        //console.log(date2.getDay(),date2.getDate(),date2.getFullYear());
		        //console.log(date2.getHours(),date2.getMinutes());
		        var e_min=parseInt(date2.getHours()*60+date2.getMinutes());
		        
				//console.log(e_min);

				stuffScheduleRequestDbFunction_AD(data.full_name,s_min,e_min);


				//customerListDBFunction_AD();

				var $select = $('select#customer_field_AD').selectize();
				var control = $select[0].selectize;
				//console.log(control);
				control.clear();
				
				//sameAppointmentCustomersListDBFunction(data.id,control);
				
				addCustomerList(data.email,control);

				//control.addItem(data.email);

				
		    	

		    	$('#ModalAppoint-appoint-dist-php').modal('show');


			    //console.log("helo end");

		    } );


/*
table row selection by click
*/
/* $('#table2_AD tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
*/


$('#table2_AD tbody').on( 'click', 'tr', function () {
    //alert( 'Row index: '+table.row( this ).index() );
    //alert('Row index: '+table.row( this ).index()+ 'Row count: '+table.data().count() );


    //


} );


		   $('#table2_AD tbody').on( 'click', '.editor_delete', function () {

		   		console.log("helo delete");
		   		console.log($(this).val());

		        var data = table.row( $(this).parents('tr') ).data();
		        console.log(data);

		        AppointmentDeleteDBFunction(data.id);

		        //table.ajax.reload(null, false);
		        //$('#table2_AD').DataTable().ajax.reload(null, false);

		        //alert( data[0] +"'s salary is: "+ data[ 4 ] );
		    } );




		$("#appointmentSaveButton_AD").on("click", function(){


				//var rowid=table.data().count();
				appointmentSaveButtonAction_AD();
				
				///console.log("count>>:",table.data().count());
				//table.rows(rowid).nodes().to$().addClass( 'selected' );
				 //$(table.row(rowid).node()).addClass('selected');
				

        });


        // Auto refresh every 30 secs
		setInterval(function() {
		    //table.ajax.reload(null, false);
		    //table.ajax.reload();
		    console.log("reloAD");
		    //console.log("count>>:",table.data().count());
		}, 30000);





	$("#provider_name_AD").on("click",function(){
			//console.log($( "#provider_name option:selected" ).text());
 
        	ServiceUpdateFunction_AD($( "#provider_name_AD option:selected" ).text());
        	stuffScheduleRequestDbFunction_AD($( "#provider_name_AD option:selected" ).text());
        	
    		});	
	$("#service_name_AD").on("click",function(){
				//console.log($( "#provider_name option:selected" ).text());
	 
	        	//ServiceUpdateFunction_AD($( "#provider_name option:selected" ).text());

        	stuffScheduleRequestDbFunction_AD($( "#provider_name_AD option:selected" ).text());
        		//providerNameToIdFunction($( "#provider_name option:selected" ).text());
        		$("#service_error_AD").hide();
        	
    		});	

	$("#date_field_AD").on("click",function(){
				//console.log($( "#provider_name option:selected" ).text());


        	//stuffScheduleRequestDbFunction_AD($( "#provider_name option:selected" ).text());
        	
    		});


	$("#period_field_start_AD").on("click",function(){

				//console.log(serviceTimefromField());
				//DateToWeakFromDateField();

				var tm=serviceTimefromField();
				if(tm>0){

					var str=$( "#period_field_start_AD option:selected" ).text();

					//console.log('\nstart time(input):'+ str);
					if(str!='--Holiday--'){
							var parts=str.split(':');
							var parts2=parts[1].split(' ');

							var start_time=parseInt(parts[0])*60+parseInt(parts2[0]);
							if(parts2[1]=="pm" && parts[0]!=12 ){start_time+=720;console.log('pM');}
							//console.log('\nstart time(min):'+ start_time);

							end_time=start_time+tm;
							//console.log('\nend time(min):'+ end_time);

							/////
							var time_end_string="";
							var h=parseInt((end_time/60)%12);
							var m=parseInt(end_time%60);
							//console.log('\nh/>>m:'+ h+" "+m);

							if(h==0){ time_end_string+=12; }
							else{ time_end_string+=h; }

							time_end_string+=":";
							time_end_string+=((m<10) ? '0'+m :m);

							if(end_time>719){ time_end_string+=" pm"; }
							else { time_end_string+=" am"; }
							//////
							//console.log('\nend time:'+ time_end_string);

							$("#period_field_end_AD").html("<option>"+ time_end_string+"</option>");
				 
				        	//ServiceUpdateFunction_AD($( "#provider_name option:selected" ).text());
				        	 }
					        else {
					        	$("#period_field_end_AD").html("<option>"+ "--Holiday--"+"</option>");
					        }
		        	}
		        	else  $("#service_error_AD").show();
	        	
	    });	




		$("#customer_create_AD").on("click",function(){

				/*newcustomer form blank*/
				 $("#email_id_AD").val("");				 
				 $("#customer_name_AD").val("");
				 $("#phn_number_AD").val("");
				 $("#notes_AD").val("");

				 $('#newCustomerModal_AD').modal('show');

				 $("#email_id_error_AD").hide();
				 $("#email_id_input_error_AD").hide();
				 $("#customer_name_error_AD").hide();
				 $("#phn_number_error_AD").hide();

		});


		$("#saveButtonCust_AD").on("click",function(){

			saveButtonNewCustomer_AD();


    	});

} );//end jQuery(document).ready(function($)



