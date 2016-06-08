

//////////////////////////////////////////////////////

	jQuery(document).ready(function($) {


	//eventReadFromDBFunction() ;

///////////////////////////////////functions start/////////////////////////////////

function emailverification(email){

	var regEx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	if (email== '' || !regEx.test(email))
	{ return false; }
	else { return true; }

}

/*
12 hour format (input string)
24 hour format (output string)

*/
function convert12to24(str12){

		//var str12=$( "#period_field_start option:selected" ).text();

		console.log('\ntime(input):'+ str12);
		
		var parts=str12.split(':');
		var parts2=parts[1].split(' ');

		var time=parseInt(parts[0])*60+parseInt(parts2[0]);
		if(parts2[1]=="pm" && parts[0]!=12 ){time+=720;}
		console.log('\n time(min):'+ time);


		var h=parseInt(time/60);
		var m=parseInt(time%60);


		var string="";
		string+=((h<10) ? '0'+h :h);
		string+=':';
		string+=((m<10) ? '0'+m :m);
		string+=':00';
		



		return string; 


}




/*
default time period in period_start ans period_end field
*/
function defaultperiod(){

		console.log("function defaultperiod()");
		var time_start_string="<option>--Select time--</option>";

		for(var i=0;i<=1435;i+=15 ){

			time_start_string+="<option>";
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

		$("#period_field_start").html(time_start_string);
		$("#period_field_end").html(time_start_string);


}


function DateToWeakFromDateField(){

	console.log("function DateToWeakFromDateField()");
	var temp= $("#date_field").val();
	console.log(temp);
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

/*
 *
read service time from service selection field
*/
function serviceTimefromField(){

	var temp= $( "#service_name option:selected" ).text();

	var f=temp.match(/[0-9]+min/g);

	if(f==null){return parseInt(-1);}
	else {return parseInt(f[0].split('m')[0]);}

	//(f==null) ? return -1 :return f[0].split('m')[0];

}


function ServiceUpdateFunction(fname) {

	console.log("function ServiceUpdateFunction(fname)");

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
					service_string+="<option>";
					service_string+=response1[i].title;
					service_string+="( "+response1[i].duration/60 +"min )";
					service_string+="</option>";					      
			    }

				$("#service_name").html(service_string);
/*
				stuffScheduleRequestDbFunction($( "#provider_name option:selected" ).text());
*/

			}

	});

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



	return new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));


}



function event_update(id,name,phone,email ,start_date,end_date ,title){

	//console.log(id,name,phone,email ,start_date,end_date ,title);
	console.log('event_update()');


	var myEvent = {
	  id:id,
	  title:"\n"+title+"\n"+name+"\n"+phone+"\n"+email,
	  //allDay: true,
	  start:start_date,//iso date formate
	  end: end_date,//iso date formate

	  //url:,
	  //editable:true,
	  color: 'green',
	  //backgroundColor:,
	 // borderColor:,
	 // textColor:,



	};

	$('#calendar').fullCalendar( 'renderEvent', myEvent ,true);
}

function eventReadFromDBFunction() {

	console.log("eventReadFromDBFunction()");

	var data1 = {
		'action': 'my_action_calender_event_update'
	};


	/////////////////join///
	$.ajax({
		url:ajax_object.ajax_url,
		type:'POST',
		dataType: "json",
		data:data1,
		success:function(response) {

				//alert('Got this from the server: ' + response);
				console.log(response.length,response);
				for (var i =0; i <response.length; i++) {


    				var ISOtimeStart = databaseTIme2DateObj(response[i].start_date).toISOString();
    				var ISOtimeEnd = databaseTIme2DateObj(response[i].end_date).toISOString();
					
					event_update(response[i].appointment_id,response[i].name,response[i].phone,response[i].email ,ISOtimeStart ,ISOtimeEnd ,response[i].title);

					//console.log(response[i].appointment_id,response[i].name,response[i].phone,response[i].email ,response[i].start_date ,response[i].end_date,response[i].title);
					//console.log(response[i].appointment_id,response[i].name,response[i].phone,response[i].email ,ISOtimeStart ,ISOtimeEnd ,response[i].title);
					
				}


				}

	});

}

/*
read stuff_id using stuff_name from DB 
*/
function providerNameToIdFunction(fname) {


	var data1 = {
		'action': 'my_action_stuffNameToId',
		'stuffname':fname,
	};


	/////////////////join///
	$.ajax({
		url:ajax_object.ajax_url,
		type:'POST',
		//dataType: "json",
		data:data1,
		success:function(response1) {

				  //console.log(response1);
				  //alert('Got this from the server: ' + response1);
				  return response1[0].id;




			}

	});

}

function stuffScheduleRequestDbFunction(stuffname) {

	console.log("function stuffScheduleRequestDbFunction(stuffname)");

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
				var day=DateToWeakFromDateField()-1;
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
			
							time_start_string+="<option>";
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

						$("#period_field_start").html(time_start_string);
						$("#period_field_end").html(time_start_string);
				}
				else{

					$("#period_field_start").html("<option>"+"--Holiday--"+"</option>");
					$("#period_field_end").html("<option>"+"--Holiday--"+"</option>");
				}

			}

	});

}





function addApointmentFunction(p_name,s_name,date,start_time,end_time,cust_name) {

	console.log("function addApointmentFunction()");

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
		//dataType: "json",
		//dataType: "Array",
		data:data,
		success:function(response1) {
				console.log(response1);
				//alert(response1);
					

				}

		});

	}



function addNewCustomerFunction(cust_name,emailAddress,phn_num,descript) {

	console.log("addNewCustomerFunction()");

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

				 $('#newCustomerModal').modal('hide');


					

				}

		});

}


function appointmentSaveButtonAction(){


	$("#service_error").hide();
	$("#period_error").hide();
	$("#period_error_holiday").hide();
	$("#cust_error").hide();


	var p_name=$( "#provider_name option:selected" ).text();

	var s_name=$( "#service_name option:selected" ).text();
	if(s_name=="--Select a service--"){$("#service_error").show();return;}
	var p=s_name.split('(');
	s_name=p[0];


	var date=$("#date_field").val();
	var parts = date.split("/");
	var dd=parts[1];
	var mm=parts[0];
	var yyyy=parts[2];
	date=yyyy+"-"+mm+"-"+dd;

	var start_time=$( "#period_field_start option:selected" ).text();
	if(start_time=="--Select time--"){$("#period_error").show();return;}
	if(start_time=="--Holiday--"){$("#period_error_holiday").show();return;}
	var start_time=convert12to24(start_time);


	var end_time=convert12to24($( "#period_field_end option:selected" ).text());

	//var cust_name=$( "#customer_field option:selected" ).text();
	var cust_names = [];
	$('#customer_field option:selected').each(function(){ cust_names.push($(this).val()); });
	//var result = cust_names.join(', ');
	if(cust_names.length==0){$("#cust_error").show();return;}



	console.log(p_name,s_name,date,start_time,end_time,cust_names);

	addApointmentFunction(p_name,s_name,date,start_time,end_time,cust_names);


	$('#myModal').modal('hide');//modals unshow


}



function saveButtonNewCustomer(){


		$("#email_id_error").hide();
		$("#email_id_input_error").hide();
		$("#customer_name_error").hide();
		$("#phn_number_error").hide();


		var cust_name=$( "#customer_name" ).val();
		if(cust_name==""){
			$("#customer_name_error").show();
			return;
		}



		var emailAddress=$( "#email_id" ).val();
		if(emailAddress==""){
			$("#email_id_input_error").show();
			return;
		}else
		if(!emailverification(emailAddress)){
			$("#email_id_error").show();
			return;
		}

		var country_cod=$( "#country_code" ).val();
		var phn_num=$( "#phn_number" ).val();
		if(phn_num==""){
			$("#phn_number_error").show();
			return;
		}
		phn_num=country_cod+phn_num;

		var descript=$( "#notes" ).val();


		console.log(cust_name,emailAddress,phn_num,descript);

		addNewCustomerFunction(cust_name,emailAddress,phn_num,descript);

}
///////////////////////////////////functions end/////////////////////////////////






/*		$('#calendar').click(function(){
        	$("#calendar").hide();
    		});

		*/

		var dat = new Date();
		var y=dat.getFullYear();
		var m=dat.getMonth()+1;
		var d=dat.getDate();
		var currentdate=y.toString()+'-'+m.toString()+'-'+d.toString();

		//console.log(y+'-'+m+'-'+d);
		//console.log( currentdate);

		
		$('#calendar').fullCalendar({
			header: {

				left: 'prev,next today,agendaFourDay',
				center: 'title',
				right: 'month,basicWeek,basicDay,agendaWeek,agendaDay'
			},



			firstDay:6, //Sunday=0, Monday=1, Tuesday=2

			//defaultDate: '2016-05-5',
			defaultDate: currentdate,

			weekends:true, //weekend colum will show

			//hiddenDays: [ 2, 4 ], // hide Tuesdays and Thursdays

			//weekNumbers:true,


			//businessHours :true,

			defaultView: 'agendaWeek',
			slotDuration: '00:10:00', 
			allDaySlot:false,

		   

		   views: {
		        agendaFourDay: {
		            type: 'agenda',
		            duration: { days: 4 },
		            buttonText: '4 day',
		            slotMinutes: 5

		        }
		    },

			//allDay: false,

			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: function(){

				console.log("in fullCalendar define");
				eventReadFromDBFunction() ;
				customerListDBFunction();


			},
			dayClick: function(date, jsEvent, view) {

		      	console.log('Clicked on: ' + date.format("MM/DD/YYYY"));
		        //console.log(date);
		        //console.log(date._i);
		        //console.log('Clicked on: ' + date.format());

		        $("#date_field").val(date.format("MM/DD/YYYY"));
		        //customerListDBFunction();

		        var $select = $('select#customer_field').selectize();
				var control = $select[0].selectize;
				console.log(control);
				control.clear();
				
				$("#service_error").hide();
				$("#period_error").hide();
				$("#period_error_holiday").hide();
				$("#cust_error").hide();

				


		        // change the day's background color just for fun
		        $(this).css('background-color', 'red');

		        $('#myModal').modal('show');



		    }
		});

  $(function() {
    $( "#date_field" ).datepicker({
    	buttonImageOnly: true,
    	onSelect: function(dateText){
    			stuffScheduleRequestDbFunction($( "#provider_name option:selected" ).text());
        	
            }
    });
  });
			

/*  $(function() {
		customerListDBFunction();
  });*/


/*
read customer table from DB 
*/
function customerListDBFunction() {

	console.log("customerListDBFunction() fullcal");


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


				$('select#customer_field').selectize({

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

			}

	});

}




	$("#myModal").on("shown.bs.modal", function () { 


	    
	    console.log( "#myModal shown.bs.modal run");

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

						$("#provider_name").html(option_string);


						ServiceUpdateFunction(response[0].full_name);
						//defaultperiod();
						stuffScheduleRequestDbFunction($( "#provider_name option:selected" ).text());
						//customerListDBFunction();



				}

			});



	});


	$("#provider_name").on("click",function(){
			//console.log($( "#provider_name option:selected" ).text());
 
        	ServiceUpdateFunction($( "#provider_name option:selected" ).text());
        	stuffScheduleRequestDbFunction($( "#provider_name option:selected" ).text());
        	
    		});	
	$("#service_name").on("click",function(){
				//console.log($( "#provider_name option:selected" ).text());
	 
	        	//ServiceUpdateFunction($( "#provider_name option:selected" ).text());

        	stuffScheduleRequestDbFunction($( "#provider_name option:selected" ).text());
        		//providerNameToIdFunction($( "#provider_name option:selected" ).text());
        		$("#service_error").hide();
        	
    		});	

	$("#date_field").on("click",function(){
				//console.log($( "#provider_name option:selected" ).text());


        	//stuffScheduleRequestDbFunction($( "#provider_name option:selected" ).text());
        	
    		});


	$("#period_field_start").on("click",function(){

				//console.log(serviceTimefromField());
				//DateToWeakFromDateField();

				var tm=serviceTimefromField();
				if(tm>0){

					var str=$( "#period_field_start option:selected" ).text();

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

							$("#period_field_end").html("<option>"+ time_end_string+"</option>");
				 
				        	//ServiceUpdateFunction($( "#provider_name option:selected" ).text());
				        	 }
					        else {
					        	$("#period_field_end").html("<option>"+ "--Holiday--"+"</option>");
					        }
		        	}
		        	else  $("#service_error").show();
	        	
	    });	

		$("#btn11").on("click",function(){
				console.log("helo");
				//customerListDBFunction();
				//event_update();
				//eventReadFromDBFunction();
				console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

        	
    	});

		$("#appointmentSaveButton").on("click",function(){

				appointmentSaveButtonAction();
				//eventReadFromDBFunction() ;//to show created appointment
				//$('#myModal').modal('hide');
				eventReadFromDBFunction();

        });

		$("#customer_create").on("click",function(){

				/*newcustomer form blank*/
				 $("#email_id").val("");				 
				 $("#customer_name").val("");
				 $("#phn_number").val("");
				 $("#notes").val("");

				 $('#newCustomerModal').modal('show');

				 $("#email_id_error").hide();
				 $("#email_id_input_error").hide();
				 $("#customer_name_error").hide();
				 $("#phn_number_error").hide();

		});


		$("#saveButtonCust").on("click",function(){

			saveButtonNewCustomer();


    	});

		
	});//end jQuery(document).ready(function($)



