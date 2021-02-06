class BobClass{
    constructor (x,y,radius){
        var options = {
            resitution : 1,
            friction : 2,
            density : 4,
            isStatic : false
        }
        this.body = Bodies.circle (x,y,radius,options);
        this.radius = radius;
        World.add (world,this. body);
    }
    display() {
 var pos = this.body.position;
 var angle = this.body.angle;
 Push ();
 translate (pos.x,pos.y);
 rotate (angle);
 ellipsdeMode(RADIUS);
 fill ("white");
 ellipse (0,0 ,this,radius,35);
 pop ();
    }
}