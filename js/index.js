function setBgColor(n,parent_bg,child_bg){
	$(".container .item:nth-child("+n+")").css("background",parent_bg);
	$(".container .item:nth-child("+n+") .item-header").css("background",child_bg);
}