$(document).ready(function() {
    var colorValue;
    var randomBall, id=1;
    var ranball;
    var number=["images/blue.png","images/green.png","images/red.png","images/yellow.png"];
    run();
    test();
    keyTest();
    $('#start').click(function(){
        $("#ball").animate({'marginTop': "-20"}, 1000, imge());
        myVar = setTimeout(test, 4000);
    });
    
    $('#main1').hide(0).delay(2000).show(0);
//    $('#main2').hide(0).delay(3000).show(0);
//    $('#main3').hide(0).delay(4000).show(0);
//    $('#main4').hide(0).delay(6000).show(0);
//    $('#main5').hide(0).delay(8000).show(0);
//    $('#main6').hide(0).delay(10000).show(0);
//    $('#main7').hide(0).delay(12000).show(0);
//    $('#main8').hide(0).delay(14000).show(0);
//    $('#main9').hide(0).delay(16000).show(0);
    function run(){
        for (var i = 16; i >=1; --i) {
            colorValue=Math.floor(Math.random()*number.length);
            document.getElementById('image'+i).src = number[colorValue];
        }
    }
    console.log(colorValue);
    function test(){
            randomBall=Math.floor(Math.random()*number.length);
            document.getElementById('ball'+id).src = number[randomBall];
            id++;
    }
    console.log(randomBall);
    function imge(){
        if (randomBall == colorValue) {
            var x = colorValue;
            var z = $('#image'+x).find("span");
            if (randomBall == 0) {
                $( '#image'+(x+1) ).fadeOut("5000");
            }else{
                $( '#image'+x ).fadeOut("5000");
            }
        } 
        console.log(z);
    }

    function keyTest(){
        $(document).keydown(function(e) {
            switch (e.which) {
                case 37: 
                    test();
                    break;
                case 39:
                    $('#ball1').animate({ 'marginLeft': '+=20' });
                    break;
            }
        });
    }
});

