// document.getElementsByName('html').style.fontSize = 100 / 750 * screen.width;
// 记账时间插件
$('#datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd',
    minView: "month"	
});
// 记账弹窗
$('#rember_btn').on('click',function() {
	var data = $('#datetimepicker').val()
	var name = $('#name').val();
	var price = $('#price').val();
	$('.left_date').append('<p>' + data + '</p>');
	$('.center_name').append('<p>' + name + '</p>');
	$('.right_price').append('<p>' + price + '</p>');
	$('#myModal').hide();
})
