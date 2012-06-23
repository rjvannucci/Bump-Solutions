// counter - from http://rainbow.arch.scriptmania.com/scripts
function fakecounter(){

  //decrease/increase counter value (depending on perceived popularity of your site!)
  var decrease_increase=2460

  var counterdate=new Date()
  var currenthits=counterdate.getTime().toString()
  currenthits=parseInt(currenthits.substring(2,currenthits.length-4))+decrease_increase

	$span = $('#counter');
	   $span.append('Até o momento <strong>'+currenthits+'</strong> KM monitorados!');
    // document.write("Até o momento <br><strong><big>"+currenthits+"</strong></big></br> KM monitorados!")
}
fakecounter()
