window.onload = function load()
{
	var li = document.getElementsByClassName("li");
	var item1 = li[0];
	var item2 = li[1];
	var item3 = li[2];
	var item4 = li[3];
	item1.addEventListener("mouseover", MouseOver);
	item2.addEventListener("mouseover", MouseOver);
	item3.addEventListener("mouseover", MouseOver);
	item4.addEventListener("mouseover", MouseOver);
	item1.addEventListener("mouseout", MouseOut);
	item2.addEventListener("mouseout", MouseOut);
	item3.addEventListener("mouseout", MouseOut);
	item4.addEventListener("mouseout", MouseOut);
	var btn = document.getElementsByClassName("button")[0];


	btn.addEventListener("click", ClickedButton);
}

function MouseOver(element)

{

	element.target.className = (element.target.className=="") ? "li-big" : "";
}

function MouseOut(element)
{
	element.target.className = (element.target.className=="li-big") ? "" : "li-big";
}

function ClickedButton()
{
	var images = document.getElementsByClassName("li-img");

	var nullImages = document.getElementsByClassName("li-img-gone");

	var btn = document.getElementsByClassName("button")[0];


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

		btn.innerHTML = "Show the pictures again!";

	}

	else

	{
		
		nImg1.className = "li-img";

		nImg2.className = "li-img";

		nImg3.className = "li-img";

		nImg4.className = "li-img";

		btn.innerHTML = "Hide the pictures!";

	}
}