$(document).ready(function() {
    var number=["images/blue.png","images/green.png","images/red.png","images/yellow.png"];
    run();
    //$('#main1').hide(0).delay(2000).show(0);
    //$('#main2').hide(0).delay(3000).show(0);
    
//  $('#main3').hide(0).delay(4000).show(0);
//  $('#main4').hide(0).delay(6000).show(0);
//  $('#main5').hide(0).delay(8000).show(0);
//  $('#main6').hide(0).delay(10000).show(0);
//  $('#main7').hide(0).delay(12000).show(0);
//  $('#main8').hide(0).delay(14000).show(0);
//  $('#main9').hide(0).delay(16000).show(0);
    function run(){
        for (var i = 1; i <=16; i++) {
            var colorValue=Math.floor(Math.random()*number.length);
            document.getElementById('image'+i).src = number[colorValue];
        }
    }
});

