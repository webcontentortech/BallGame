$(document).ready(function() {
	$("#start").click(function(){
		run();
	});
});
function run(){
	$("span").animate({marginTop: "330px"}, 80000);
}
var ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var span = document.getElementsByClassName("element");
	while (span.length > 0) {
    	var i = Math.floor(Math.random() * ids.length);
    	span[0].id = 'item-' + ids[i];
    	ids.splice(i, 1);
    	span = [].slice.call(span, 1);
}