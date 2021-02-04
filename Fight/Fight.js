$(document).ready(function() {
	var stuff1 = "please no"
	var stuff2 = "You are correct!"
	
	$("#mydiv").css({
		"font":'Bold 1.5em "Times New Roman"',
		"user-select":"none",
		"border":"5px solid #f9f9",
		"padding":"12px",
		"color":"red",
		"background":"blue",
		"cursor":"pointer",
	});
	$("#mydiv2").css({
		"font":'Bold 1.5em "Helvetica"',
		"user-select":"none",
		"border":"5px solid #9f9f",
		"padding":"12px",
		"color":"yellow",
		"background":"purple",
		"cursor":"pointer",
	});
	$("#mydiv2").hover(function(){
		$(this).before('<p id = "junk">&nbsp</p>');
		$(this).before('<p id = "junk">&nbsp</p>');
		$("#test").replaceWith('<p id = "test"> &nbsp </p>');
	});
	$("#mydiv2").click(function(){
		$(this).before('<p id ="junk">&nbsp</p>');
		$(this).before('<p id = "junk">&nbsp</p>');
		$("#test").replaceWith('<p id = "test"> &nbsp </p>');
	});
	$("#mydiv").click(function(){
		$("#test").replaceWith('<span id = "test">You are correct!</span>');
		$("#test").css({
			"font":'Bold 1.5em "Lucida Console"',
			"margin":"200px",
			"user-select":"none",
			"border":"5px solid #F9D71C",
			"padding":"12px",
			"color":"blue",
			"background":"red",
			"font-size":"42px",
		});
		$("p").remove();
		$(this).before('<p id = "junk"> &nbsp </p>');
		$(this).after('<p id = "junk"> &nbsp </p>');
		$("#mydiv2").before('<p id = "junk"> &nbsp </p>');
	});
});