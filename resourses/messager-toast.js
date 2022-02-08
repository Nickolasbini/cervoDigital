function openToast(message = ''){
	var x = document.getElementById("messager");
	x.className = "show";
	x.innerText = message;
	x.style.display = 'block';
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}

$('#messager').on('click', function(){
    $('#messager').fadeOut();
});