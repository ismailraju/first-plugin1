(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	jQuery(document).ready(function($) {




/*

		var COUNTRIES=[
		 { code:"af", name:"Afghanistan"},
		 { code:"ax", name:"Aland Islands"},
		 { code:"al", name:"Albania"},
		 { code:"dz", name:"Algeria"},
		 { code:"as", name:"American Samoa"},
		 { code:"ad", name:"Andorra"},
		 { code:"ao", name:"Angola"},
		 { code:"ai", name:"Anguilla"},
		 { code:"aq", name:"Antarctica"},
		 { code:"ag", name:"Antigua And Barbuda"},
		 { code:"ar", name:"Argentina"},
		 { code:"am", name:"Armenia"},
		 { code:"aw", name:"Aruba"},
		 { code:"au", name:"Australia"},
		 { code:"at", name:"Austria"},
		 { code:"az", name:"Azerbaijan"},
		 { code:"bs", name:"Bahamas"},
		 { code:"bh", name:"Bahrain"},
		 { code:"bd", name:"Bangladesh"},
		 { code:"bb", name:"Barbados"},
		 { code:"by", name:"Belarus"},
		 { code:"be", name:"Belgium"},
		 { code:"bz", name:"Belize"},
		 { code:"bj", name:"Benin"},
		 { code:"bm", name:"Bermuda"},
		 { code:"bt", name:"Bhutan"},
		 { code:"bo", name:"Bolivia"},
		 { code:"ba", name:"Bosnia And Herzegovina"},
		 { code:"bw", name:"Botswana"},
		 { code:"bv", name:"Bouvet Island"},
		 { code:"br", name:"Brazil"},
		 { code:"io", name:"British Indian Ocean Territory"},
		 { code:"bn", name:"Brunei Darussalam"},
		 { code:"bg", name:"Bulgaria"},
		 { code:"bf", name:"Burkina Faso"},
		 { code:"bi", name:"Burundi"},
		 { code:"kh", name:"Cambodia"},
		 { code:"cm", name:"Cameroon"},
		 { code:"ca", name:"Canada"},
		 { code:"cv", name:"Cape Verde"},
		 { code:"ky", name:"Cayman Islands"},
		 { code:"cf", name:"Central African Republic"},
		 { code:"td", name:"Chad"},
		 { code:"cl", name:"Chile"},
		 { code:"cn", name:"China"},
		 { code:"cx", name:"Christmas Island"},
		 { code:"cc", name:"Cocos (Keeling) Islands"},
		 { code:"co", name:"Colombia"},
		 { code:"km", name:"Comoros"},
		 { code:"cg", name:"Congo"},
		 { code:"cd", name:"Congo Democratic Republic"},
		 { code:"ck", name:"Cook Islands"},
		 { code:"cr", name:"Costa Rica"},
		 { code:"ci", name:"Cote D\"Ivoire"},
		 { code:"hr", name:"Croatia"},
		 { code:"cu", name:"Cuba"},
		 { code:"cy", name:"Cyprus"},
		 { code:"cz", name:"Czech Republic"},
		 { code:"dk", name:"Denmark"},
		 { code:"dj", name:"Djibouti"},
		 { code:"dm", name:"Dominica"},
		 { code:"do", name:"Dominican Republic"},
		 { code:"ec", name:"Ecuador"},
		 { code:"eg", name:"Egypt"},
		 { code:"sv", name:"El Salvador"},
		 { code:"gq", name:"Equatorial Guinea"},
		 { code:"er", name:"Eritrea"},
		 { code:"ee", name:"Estonia"},
		 { code:"et", name:"Ethiopia"},
		 { code:"fk", name:"Falkland Islands (Malvinas)"},
		 { code:"fo", name:"Faroe Islands"},
		 { code:"fj", name:"Fiji"},
		 { code:"fi", name:"Finland"},
		 { code:"fr", name:"France"},
		 { code:"gf", name:"French Guiana"},
		 { code:"pf", name:"French Polynesia"},
		 { code:"tf", name:"French Southern Territories"},
		 { code:"ga", name:"Gabon"},
		 { code:"gm", name:"Gambia"},
		 { code:"ge", name:"Georgia"},
		 { code:"de", name:"Germany"},
		 { code:"gh", name:"Ghana"},
		 { code:"gi", name:"Gibraltar"},
		 { code:"gr", name:"Greece"},
		 { code:"gl", name:"Greenland"},
		 { code:"gd", name:"Grenada"},
		 { code:"gp", name:"Guadeloupe"},
		 { code:"gu", name:"Guam"},
		 { code:"gt", name:"Guatemala"},
		 { code:"gg", name:"Guernsey"},
		 { code:"gn", name:"Guinea"},
		 { code:"gw", name:"Guinea-Bissau"},
		 { code:"gy", name:"Guyana"},
		 { code:"ht", name:"Haiti"},
		 { code:"hm", name:"Heard Island & Mcdonald Islands"},
		 { code:"va", name:"Holy See (Vatican City State)"},
		 { code:"hn", name:"Honduras"},
		 { code:"hk", name:"Hong Kong"},
		 { code:"hu", name:"Hungary"},
		 { code:"is", name:"Iceland"},
		 { code:"in", name:"India"},
		 { code:"id", name:"Indonesia"},
		 { code:"ir", name:"Iran Islamic Republic Of"},
		 { code:"iq", name:"Iraq"},
		 { code:"ie", name:"Ireland"},
		 { code:"im", name:"Isle Of Man"},
		 { code:"il", name:"Israel"},
		 { code:"it", name:"Italy"},
		 { code:"jm", name:"Jamaica"},
		 { code:"jp", name:"Japan"},
		 { code:"je", name:"Jersey"},
		 { code:"jo", name:"Jordan"},
		 { code:"kz", name:"Kazakhstan"},
		 { code:"ke", name:"Kenya"},
		 { code:"ki", name:"Kiribati"},
		 { code:"kr", name:"Korea"},
		 { code:"kw", name:"Kuwait"},
		 { code:"kg", name:"Kyrgyzstan"},
		 { code:"la", name:"Lao People\"s Democratic Republic"},
		 { code:"lv", name:"Latvia"},
		 { code:"lb", name:"Lebanon"},
		 { code:"ls", name:"Lesotho"},
		 { code:"lr", name:"Liberia"},
		 { code:"ly", name:"Libyan Arab Jamahiriya"},
		 { code:"li", name:"Liechtenstein"},
		 { code:"lt", name:"Lithuania"},
		 { code:"lu", name:"Luxembourg"},
		 { code:"mo", name:"Macao"},
		 { code:"mk", name:"Macedonia"},
		 { code:"mg", name:"Madagascar"},
		 { code:"mw", name:"Malawi"},
		 { code:"my", name:"Malaysia"},
		 { code:"mv", name:"Maldives"},
		 { code:"ml", name:"Mali"},
		 { code:"mt", name:"Malta"},
		 { code:"mh", name:"Marshall Islands"},
		 { code:"mq", name:"Martinique"},
		 { code:"mr", name:"Mauritania"},
		 { code:"mu", name:"Mauritius"},
		 { code:"yt", name:"Mayotte"},
		 { code:"mx", name:"Mexico"},
		 { code:"fm", name:"Micronesia Federated States Of"},
		 { code:"md", name:"Moldova"},
		 { code:"mc", name:"Monaco"},
		 { code:"mn", name:"Mongolia"},
		 { code:"me", name:"Montenegro"},
		 { code:"ms", name:"Montserrat"},
		 { code:"ma", name:"Morocco"},
		 { code:"mz", name:"Mozambique"},
		 { code:"mm", name:"Myanmar"},
		 { code:"na", name:"Namibia"},
		 { code:"nr", name:"Nauru"},
		 { code:"np", name:"Nepal"},
		 { code:"nl", name:"Netherlands"},
		 { code:"an", name:"Netherlands Antilles"},
		 { code:"nc", name:"New Caledonia"},
		 { code:"nz", name:"New Zealand"},
		 { code:"ni", name:"Nicaragua"},
		 { code:"ne", name:"Niger"},
		 { code:"ng", name:"Nigeria"},
		 { code:"nu", name:"Niue"},
		 { code:"nf", name:"Norfolk Island"},
		 { code:"mp", name:"Northern Mariana Islands"},
		 { code:"no", name:"Norway"},
		 { code:"om", name:"Oman"},
		 { code:"pk", name:"Pakistan"},
		 { code:"pw", name:"Palau"},
		 { code:"ps", name:"Palestinian Territory}, Occupied"},
		 { code:"pa", name:"Panama"},
		 { code:"pg", name:"Papua New Guinea"},
		 { code:"py", name:"Paraguay"},
		 { code:"pe", name:"Peru"},
		 { code:"ph", name:"Philippines"},
		 { code:"pn", name:"Pitcairn"},
		 { code:"pl", name:"Poland"},
		 { code:"pt", name:"Portugal"},
		 { code:"pr", name:"Puerto Rico"},
		 { code:"qa", name:"Qatar"},
		 { code:"re", name:"Reunion"},
		 { code:"ro", name:"Romania"},
		 { code:"ru", name:"Russian Federation"},
		 { code:"rw", name:"Rwanda"},
		 { code:"bl", name:"Saint Barthelemy"},
		 { code:"sh", name:"Saint Helena"},
		 { code:"kn", name:"Saint Kitts And Nevis"},
		 { code:"lc", name:"Saint Lucia"},
		 { code:"mf", name:"Saint Martin"},
		 { code:"pm", name:"Saint Pierre And Miquelon"},
		 { code:"vc", name:"Saint Vincent And Grenadines"},
		 { code:"ws", name:"Samoa"},
		 { code:"sm", name:"San Marino"},
		 { code:"st", name:"Sao Tome And Principe"},
		 { code:"sa", name:"Saudi Arabia"},
		 { code:"sn", name:"Senegal"},
		 { code:"rs", name:"Serbia"},
		 { code:"sc", name:"Seychelles"},
		 { code:"sl", name:"Sierra Leone"},
		 { code:"sg", name:"Singapore"},
		 { code:"sk", name:"Slovakia"},
		 { code:"si", name:"Slovenia"},
		 { code:"sb", name:"Solomon Islands"},
		 { code:"so", name:"Somalia"},
		 { code:"za", name:"South Africa"},
		 { code:"gs", name:"South Georgia And Sandwich Isl."},
		 { code:"es", name:"Spain"},
		 { code:"lk", name:"Sri Lanka"},
		 { code:"sd", name:"Sudan"},
		 { code:"sr", name:"Suriname"},
		 { code:"sj", name:"Svalbard And Jan Mayen"},
		 { code:"sz", name:"Swaziland"},
		 { code:"se", name:"Sweden"},
		 { code:"ch", name:"Switzerland"},
		 { code:"sy", name:"Syrian Arab Republic"},
		 { code:"tw", name:"Taiwan"},
		 { code:"tj", name:"Tajikistan"},
		 { code:"tz", name:"Tanzania"},
		 { code:"th", name:"Thailand"},
		 { code:"tl", name:"Timor-Leste"},
		 { code:"tg", name:"Togo"},
		 { code:"tk", name:"Tokelau"},
		 { code:"to", name:"Tonga"},
		 { code:"tt", name:"Trinidad And Tobago"},
		 { code:"tn", name:"Tunisia"},
		 { code:"tr", name:"Turkey"},
		 { code:"tm", name:"Turkmenistan"},
		 { code:"tc", name:"Turks And Caicos Islands"},
		 { code:"tv", name:"Tuvalu"},
		 { code:"ug", name:"Uganda"},
		 { code:"ua", name:"Ukraine"},
		 { code:"ae", name:"United Arab Emirates"},
		 { code:"gb", name:"United Kingdom"},
		 { code:"us", name:"United States"},
		 { code:"um", name:"United States Outlying Islands"},
		 { code:"uy", name:"Uruguay"},
		 { code:"uz", name:"Uzbekistan"},
		 { code:"vu", name:"Vanuatu"},
		 { code:"ve", name:"Venezuela"},
		 { code:"vn", name:"Viet Nam"},
		 { code:"vg", name:"Virgin Islands - British"},
		 { code:"vi", name:"Virgin Islands - U.S."},
		 { code:"wf", name:"Wallis And Futuna"},
		 { code:"eh", name:"Western Sahara"},
		 { code:"ye", name:"Yemen"},
		 { code:"zm", name:"Zambia"},
		 { code:"zw", name:"Zimbabwe"}
		];*/

/*
		$('#country_code').selectize({
		    maxItems: 1,
		    labelField: 'name',
		    valueField: 'code',
		    plugins: ['remove_button'],
		    searchField: ['name', 'code'],
		    options: COUNTRIES,
		    preload: true,
		    persist: false,
		    render: {
		        item: function(item, escape) {
		            return "<div><img  class='flag flag-" + escape(item.code) + "' alt='' />&nbsp;" +  "</div>";
		        },
		        option: function(item, escape) {
		            return "<div><img  class='flag flag-" + escape(item.code) + "' alt='' />&nbsp;" + escape(item.name) + "</div>";
		        }
		    },
		});
*/

		$("#phone").intlTelInput({
	      // allowDropdown: false,
	      // autoHideDialCode: false,
	      autoPlaceholder: true,
	      // dropdownContainer: "body",
	      // excludeCountries: ["us"],
	      geoIpLookup: function(callback) {
	        $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
	          var countryCode = (resp && resp.country) ? resp.country : "";
	          callback(countryCode);
	        });
	      	 },
	      initialCountry: "auto",
	      
	      // nationalMode: true,
	      // numberType: "MOBILE",
	      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
	      // preferredCountries: ['cn', 'jp'],
	      separateDialCode: true,
	      //utilsScript: "intl-tel-input-master/build/js/utils.js"
	    });

		 
		$('#date').datepicker({
			buttonImageOnly: true,
		    dateFormat: "dd-M-yy",
		    autoSize: true,
		    showAnim: "clip",//"shake",bounce,clip
		    minDate: 0,
		    
		    //startDate: '-3d'
		});


		
/*		for (var i = 0; i < 10; i++) {
		    //var radioBtn = $('<input type="radio" name="rbtnCount" />');
		    var radioBtn = $('<button type="radio" class="single_button btn btn-primary"> hellow</button>');
		    radioBtn.appendTo('#buttons_1st_clm');
		   
		}
		for (var i = 0; i < 10; i++) {
			    //var radioBtn = $('<input type="radio" name="rbtnCount" />');
			    var radioBtn = $('<button type="radio" class="single_button btn btn-primary"> hellow</button>');
			    
			    radioBtn.appendTo('#buttons_2nd_clm');
			}*/

		////function

		/*function showallOption(select_id){

			$("#service_name").children('option').css('display','block');
		}
*/
		////ajax action

		function ServiceUpdateFn(cat_id) {

			console.log("ServiceUpdateFn(cat_id)"+cat_id);



			var data = {
				'action': 'my_action_service_update',
				'cat_id':cat_id,
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				//dataType: "array",
				data:data,
				success:function(response) {
					console.log(response);

					$("#service_name").children('option').css('display','none');
					$("#service_name").children("option[value^=" +-1 + "]").attr('selected','selected');
					//$("#service_name").children("option[value^=" +-1 + "]").css('display','block');
					for (var i = response.length - 1; i >= 0; i--) {
						
						$("#service_name").children("option[value^=" +response[i].id + "]").css('display','block');
					}
  			

				}

			})
			.done(
				function( response1 ) {

				    console.log(">>done<<");   
					
				})	  
		  	.fail(
		  			function( xhr, status, errorThrown ) {
					    alert( "Sorry, there was a problem!" );
					    console.log( "Error: " + errorThrown );
					    console.log( "Status: " + status );
					    console.dir( xhr );
				})	  
		  	.always(
		  			function( xhr, status ) {
		  				console.log(">>always<<");
		  				
				});

		}

		function CatagoryUpdateFn(service_id) {

			console.log("CatagoryUpdateFn(service_id)"+service_id);

			var data = {
				'action': 'my_action_catagory_update',
				'service_id':service_id,
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				//dataType: "array",
				data:data,
				success:function(response) {
					console.log(response);

					$("#catagory_name").children("option[value^=" +response[0].category_id + "]").attr('selected','selected');
	
				}

			})
			.done(
				function( response1 ) {

				    console.log(">>done<<");   
					
				})	  
		  	.fail(
		  			function( xhr, status, errorThrown ) {
					    alert( "Sorry, there was a problem!" );
					    console.log( "Error: " + errorThrown );
					    console.log( "Status: " + status );
					    console.dir( xhr );
				})	  
		  	.always(
		  			function( xhr, status ) {
		  				console.log(">>always<<");
		  				
				});

		}

/*
		function EmployeeUpdateFn(service_id) {

			console.log("EmployeeUpdateFn(service_id)"+service_id);

			var data = {
				'action': 'my_action_employee_update',
				'service_id':service_id,
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				//dataType: "array",
				data:data,
				success:function(response) {
					console.log(response);


					$("#employee_name").children('option').css('display','none');
					$("#employee_name").children("option[value^=" +-1 + "]").attr('selected','selected');
					//$("#employee_name").children("option[value^=" +-1 + "]").css('display','block');
					for (var i = response.length - 1; i >= 0; i--) {
						
						$("#employee_name").children("option[value^=" +response[i].staff_id + "]").css('display','block');
					}
  			

				}

			})
			.done(
				function( response1 ) {

				    console.log(">>done<<");   
					
				})	  
		  	.fail(
		  			function( xhr, status, errorThrown ) {
					    alert( "Sorry, there was a problem!" );
					    console.log( "Error: " + errorThrown );
					    console.log( "Status: " + status );
					    console.dir( xhr );
				})	  
		  	.always(
		  			function( xhr, status ) {
		  				console.log(">>always<<");
		  				
				});

		}*/

		function EmployeeUpdateWithrateFn(service_id) {

			console.log("EmployeeUpdateWithrateFn(service_id)"+service_id);

			var data = {
				'action': 'my_action_employee_update',
				'service_id':service_id,
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				//dataType: "array",
				data:data,
				success:function(response) {
					console.log(response);


					$("#employee_name").children('option').css('display','none');
					$("#employee_name").children("option[value^=" +-1 + "]").attr('selected','selected');
					//$("#employee_name").children("option[value^=" +-1 + "]").css('display','block');
					for (var i = response.length - 1; i >= 0; i--) {
						
						$("#employee_name").children("option[value^=" +response[i].staff_id + "]").css('display','block');
						$("#employee_name").children("option[value^=" +response[i].staff_id + "]").text(response[i].full_name+" ($"+response[i].price+")");
					}
  			

				}

			})
			.done(
				function( response1 ) {

				    console.log(">>done<<");   
					
				})	  
		  	.fail(
		  			function( xhr, status, errorThrown ) {
					    alert( "Sorry, there was a problem!" );
					    console.log( "Error: " + errorThrown );
					    console.log( "Status: " + status );
					    console.dir( xhr );
				})	  
		  	.always(
		  			function( xhr, status ) {
		  				console.log(">>always<<");
		  				
				});

		}


		function TimeSlotUpdateFn(employ_id) {

			console.log("TimeSlotUpdateFn(employ_id)"+employ_id);

			var data = {
				'action': 'my_action_schedule_times',
				'employ_id':employ_id,
			};


			/////////////////join///
			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				dataType: "json",
				//dataType: "array",
				data:data,
				success:function(response) {
					console.log(response);

/*
					$("#employee_name").children('option').css('display','none');
					$("#employee_name").children("option[value^=" +-1 + "]").attr('selected','selected');
					//$("#employee_name").children("option[value^=" +-1 + "]").css('display','block');
					for (var i = response.length - 1; i >= 0; i--) {
						
						$("#employee_name").children("option[value^=" +response[i].staff_id + "]").css('display','block');
						$("#employee_name").children("option[value^=" +response[i].staff_id + "]").text(response[i].full_name+" ($"+response[i].price+")");
					}*/
  			

				}

			})
			.done(
				function( response1 ) {

				    console.log(">>done<<");   
					
				})	  
		  	.fail(
		  			function( xhr, status, errorThrown ) {
					    alert( "Sorry, there was a problem!" );
					    console.log( "Error: " + errorThrown );
					    console.log( "Status: " + status );
					    console.dir( xhr );
				})	  
		  	.always(
		  			function( xhr, status ) {
		  				console.log(">>always<<");
		  				
				});

		}

		////onclick action

		$("#catagory_name").on("click",function(){
							console.log("click");

							var cat_id=$("#catagory_name option:selected").val();
							if(cat_id==-1){
								$("#service_name").children("option[value^=" +-1 + "]").attr('selected','selected');
								$("#service_name").children('option').css('display','block');
							}
							else{
								ServiceUpdateFn(cat_id);
							}
							
						});


		$("#service_name").on("click",function(){
							console.log("click");

							var serv_id=$("#service_name option:selected").val();

							if(serv_id!=-1){
								CatagoryUpdateFn(serv_id);
								//EmployeeUpdateFn($("#service_name option:selected").val());
								EmployeeUpdateWithrateFn(serv_id);
								//var r=$('#employee_name option[value=5]').text();
								//$('#employee_name option[value=5]').text(r+"<span>helo</span>");
							}

							
						});


/*
		$("#slotshow").on("click",function(){
							console.log("click");

							//var serv_id=$("#service_name option:selected").val();
							var emp_id=$("#employee_name option:selected").val();
							var date=$("#date").val();
							console.log(emp_id);
							console.log(date);

							if(emp_id!=-1){
									TimeSlotUpdateFn(emp_id);
							}

							
						});*/


		$("#sendbutton").on("click",function(){
							console.log("click");

							//var serv_id=$("#service_name option:selected").val();
							var emp_id=$("#employee_name option:selected").val();
							var date=$("#date").val();
							console.log(emp_id);
							console.log(date);

							if(emp_id!=-1){
									TimeSlotUpdateFn(emp_id);
							}

							
						});



	});//end jQuery(document).ready(function($)

})( jQuery );
