<?php

	class timeClass{



		public function __construct(){


		}

		public function AMorPM($timeM){

			if(($timeM>=720)&&($timeM<1440))return "pm";
			else return "am";

		}

		public function minToHour($timeM){

			if($timeM>=13*60){$Hour=(integer)(($timeM-(12*60))/60);}
			else {$Hour=(integer)($timeM/60);}
			
			$Hour=($Hour==0)?"0":(string)$Hour;

			$Min=(string)$timeM%60;
			$Min=($Min==0)? "00":(string)$Min;

			$AMpm=$this::AMorPM($timeM);

			return $Hour.":".$Min." ".$AMpm;

		}

		public function timeStrToIntM($timeStr){

			$part=explode(":",$timeStr);

			$hour=(Integer)$part[0];
			$minute=(Integer)$part[1];
			$sec=(Integer)$part[2];

			return $totalM=$hour*60+$minute;



		}

		public function generalTimeIntrvl($startTimeM,$endTimeM){


			$startTimM=$this::timeStrToIntM($startTimeM);
			$endTimM=$this::timeStrToIntM($endTimeM);
			$timeInterval=esc_attr( get_option('time_interval') );//minute

			$period=array();

			for($i=$startTimM;$i<=$endTimM;$i+=$timeInterval){

				$str=$this::minToHour($i);
				array_push($period,$str);

			}

			return $period;


		}






	}






?>