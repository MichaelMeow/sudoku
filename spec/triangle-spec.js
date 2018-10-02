import { Triangle } from './../src/js/triangle.js';

describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5)
    console.log(triangle);
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)
  });


  it('should correctly determine whether three sides are not a triangle', function() {
    var triangle = new Triangle(12,3,3)
    console.log(triangle);
    expect(triangle.checkType()).toEqual("not a triangle");
  });
});
