var i = 0;
var images = [];
var time = 5000;

images[0] = 'pics/thanks1.jpg';
images[1] = 'pics/thanks2.jpg';
images[2] = 'pics/thanks3.jpg';
images[3] = 'pics/thanks4.jpg';

function changeImg(){
	document.slide.src = images[i];
	
	if(i < images.length -1 )
	{
		i++;
	}
	else 
	{
		i=0;
	}
	
	setTimeout("changeImg()", time);
}

window.onload = changeImg;

