#pragma strict
var camTransform : Transform;
var speed : float;
var margin : float;

function Start () {

}

function Update () {
	var mouseEdge = MouseScreenEdge( );
	
}

function MouseScreenEdge( ){

	var half = new Vector2(Screen.width/2, Screen.height/2);
	
	var x = Input.mousePosition.x - half.x;
	var y = Input.mousePosition.y - half.y;
	
	var dir = 0;
	
	if(Mathf.Abs(x) > (half.x - margin)) {
		if (x < 0){
			dir = 1;
		}else{
			dir = -1;
		}
		x = x + (half.x - margin) * dir;
	}else{
		x = 0.0;
	}
	
	if(Mathf.Abs(y) > half.y-margin) {
		if (y < 0){
			dir = 1;
		}else{
			dir = -1;
		}
		y = y + (half.y-margin) * dir;
	}else{
		y = 0.0;
	}
	
	return new Vector2(x, y);
}