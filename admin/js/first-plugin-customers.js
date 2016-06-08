

//////////////////////////////////////////////////////

	jQuery(document).ready(function($) {

		//readCustomerInfoFunction();
		

		$('#table1').DataTable( {

        "ajax": {

        	url:ajax_object.ajax_url,
			type:'POST',
			dataType: "json",
			//dataType: "Array",
			"dataSrc": "",
			data:{'action': 'my_action_customer_info'},
			
		
			

        },
        "columns": [
            { "data": "id" },
            { "data": "name" },
            { "data": "phone" },
            { "data": "email" },
            { "data": "notes" }
        ],
         dom: 'Bfrtip',
        buttons: [
            {
                text: 'New Customer',
                action: function ( e, dt, node, config ) {

	                 $("#email_id_error").hide();
					 $("#email_id_input_error").hide();
					 $("#customer_name_error").hide();
					 $("#phn_number_error").hide();
					 
                	$('#newCustomerModal').modal('show');//modals unshow
                    //alert( 'Button activated' );

                }
            }
        ]

    } );



		/////////////////////////action function///////////////////////////////

		function readCustomerInfoFunction() {

			console.log("readCustomerInfoFunction() start");

			var data  = {
				'action': 'my_action_customer_info'

			};



			$.ajax({
				url:ajax_object.ajax_url,
				type:'POST',
				//dataType: "json",
				//dataType: "Array",
				data:data,

				success:function(response) {

						console.log(response);
									

						}

			});


			console.log("readCustomerInfoFunction() end");
		}
					
 

				$("#testBtn").click(function(){
						console.log("helo");

						readCustomerInfoFunction();
						//$('#cust_table').DataTable();
		        	
		    	});

/////////////////////////element action///////////////////////////////

	});//end jQuery(document).ready(function($)



