function HideImages()
{
	var images = document.getElementsByClassName("li-img");
	var nullImages = document.getElementsByClassName("li-img-gone");
	var btn = document.getElementsByClassName("button");

	var img1 = images[0];
	var img2 = images[1];
	var img3 = images[2];
	var img4 = images[3];

	var nImg1 = nullImages[0];
	var nImg2 = nullImages[1];
	var nImg3 = nullImages[2];
	var nImg4 = nullImages[3];

	if (img1 != null)
	{
		img1.className = "li-img-gone";
		img2.className = "li-img-gone";
		img3.className = "li-img-gone";
		img4.className = "li-img-gone";
		btn[0].innerHTML = "Show the pictures again!";
	}
	else
	{
		nImg1.className = "li-img";
		nImg2.className = "li-img";
		nImg3.className = "li-img";
		nImg4.className = "li-img";
		btn[0].innerHTML = "Hide the pictures!";
	}
	
}

function MouseOver(li)
{
	li.className = "li-big";
}

function MouseOut(li)
{
	li.className = "";
}