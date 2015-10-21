var app = angular.module("app",[])
.controller("TimerController",['$interval','$scope',function($interval,$scope){

$scope.sessionlength = 25;
$scope.breaklength = 5;

var intervalid;
var timer = "stop";
initialize();

function initialize(){

  
$scope.timeleft = $scope.sessionlength *60;
$scope.sessionName = "Session";
var flag = "session";
$scope.timeinhms = $scope.sessionlength;
 $scope.totaltime = $scope.sessionlength*60;
  $scope.fillcolor = "green";
}

function calculatetimeinhms(time){
 // var time = parseInt(time*60);

  var h = Math.floor(time/3600); 
  var m = Math.floor(time%3600/60);
  var s = Math.floor(time%3600%60);
 

   return (
      (h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s
    );

}

function updateTimer(){
    
   if($scope.sessionName == "Session"){
      if($scope.timeleft == 0){
         $scope.sessionName = "Break";
         $scope.timeleft = $scope.breaklength *60;
         $scope.totaltime = $scope.breaklength * 60;
         $scope.fillcolor = "red";
      }
    }
    else{
      if($scope.timeleft == 0){
         initialize();
      }
    }
    secs = parseInt($scope.timeleft); 
    secs--;
    
    $scope.timeleft = secs;
    $scope.fillHeight = ($scope.totaltime - $scope.timeleft)*100/$scope.totaltime +"%";
    $scope.timeinhms = calculatetimeinhms(secs);
}


$scope.clickMe = function(){

  if(timer == "stop"){
    timer = "start";
    updateTimer();
   intervalid = $interval(updateTimer,1000);
  }
  else{
    $interval.cancel(intervalid);
    timer = "stop";
  }
}

$scope.addition = function(val){
   if(val == "session"){
     $scope.sessionlength++;
      $scope.Session = "Session";
       $scope.timeleft = $scope.sessionlength*60;
       $scope.timeinhms = $scope.sessionlength;
       $scope.totaltime = $scope.sessionlength*60;
   }
   else{
     $scope.breaklength++;
    // $scope.totaltime = $scope.breaklength*60;
   }
   
}

$scope.minus = function(val){

   if(val == "session"){
     if($scope.sessionlength == 0){
       $scope.sessionlength = 0;
       
     }else{

     $scope.sessionlength--;
     $scope.timeleft = $scope.sessionlength*60;
     $scope.totaltime = $scope.sessionlength*60;
      }
   }
   else{
     if($scope.breaklength == 0){
        $scope.breaklength = 0;
     }
   else{
     $scope.breaklength--;
     //$scope.totaltime = $scope.breaklength*60;
     }
   }
 
}

}])