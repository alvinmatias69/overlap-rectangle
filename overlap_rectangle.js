(function () {

'use strict';

function xOverlap(rect1, rect2) {
	let min1 = Math.min(rect1.point1.x, rect1.point2.x), //find the smallest x from rectangle 1
		min2 = Math.min(rect2.point1.x, rect2.point2.x); //find the smallest x from rectangle 2
	if (min1 == min2) { //if the smallest x is a same number, then the x axis is overlap
		return true;
	}else{
		if ((min1 < min2) && (min2 < Math.max(rect1.point1.x, rect1.point2.x))){ //if the smallest x from rect 1 is smaller than rect 2 
			return true;														 //and the smallest x from rect 2 is smaller than bigest x from rect 1, then the x axis is overlap
		} else if ((min2 < min1) && (min1 < Math.max(rect2.point1.x, rect2.point2.x))) { //if the smallest x from rect 2 is smaller than rect 1 
			return true;																 //and the smallest x from rect 1 is smaller than bigest x from rect 2, then the x axis is overlap
		} else{ //other than that, the x axis aren't overlap
			return false; 
		}
	}
}

function yOverlap(rect1, rect2) {
	let min1 = Math.min(rect1.point1.y, rect1.point2.y), //find the smallest y from rectangle 1
		min2 = Math.min(rect2.point1.y, rect2.point2.y); //find the smallest y from rectangle 2
	if (min1 == min2) { //if the smallest y is a same number, then the y axis is overlap
		return true;
	}else{
		if ((min1 < min2) && (min2 < Math.max(rect1.point1.y, rect1.point2.y))){ //if the smallest y from rect 1 is smaller than rect 2 
			return true;														 //and the smallest y from rect 2 is smaller than bigest y from rect 1, then the y axis is overlap
		} else if ((min2 < min1) && (min1 < Math.max(rect2.point1.y, rect2.point2.y))) { //if the smallest y from rect 2 is smaller than rect 1 
			return true;																 //and the smallest y from rect 1 is smaller than bigest y from rect 2, then the y axis is overlap
		} else{ //other than that, the y axis aren't overlap
			return false;
		}
	}
}

function isOverlap(rect1, rect2) {
	if (xOverlap(rect1, rect2) && yOverlap(rect1, rect2)) { //if both axis are overlap, then the rectangles are overlap
		return true;
	}else{
		return false;
	}
}

function point(x, y) { //class for building points from x and y point
	this.x = x;
	this.y = y;
}

function rectangle(point1, point2) { //class for building rectangle from points
	this.point1 = point1;
	this.point2 = point2;
}

let rect1 = new rectangle(new point(2, 4), new point(5, 3)), //initialize rectangle 1, change the number for different result
	rect2 = new rectangle(new point(5, 6), new point(2, 4)); //initialize rectangle 2, change the number for different result

console.log(isOverlap(rect1, rect2));

})();


