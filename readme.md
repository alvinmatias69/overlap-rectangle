# Overlap Rectangle
A simple javascript script's for checking whether two rectangles overlap or not.

## Usage
this apps require [Node.js](https://nodejs.org/) to run
```sh
$ git clone https://github.com/alvinmatias69/overlap-rectangle.git
$ cd overlap-rectangle
```
change the rectangles coordinates (line 55 - 56) according to your case
example:
```javascript
let rect1 = new rectangle(new point(2, 4), new point(5, 3)),
	rect2 = new rectangle(new point(5, 6), new point(2, 4));
```
run the script :
```sh
$ node overlap_rectangle
```

### Contributors
Thanks to Habib Fikri ([harkce](https://github.com/harkce)) for giving me an insight for the algorithm

**Matias Alvin (2017)**