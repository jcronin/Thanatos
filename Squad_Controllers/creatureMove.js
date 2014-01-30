#pragma strict

var thisTran : Transform;
var targetTran : Transform;
var speed: float;
static var waypoint : Vector3;

public var distance : float = 4.5;

function Start () {
	
}

function Update () {
	var r = Random.value;
	var step = (speed * r) * Time.deltaTime;
	if (thisTran.name.Contains("01")){
		transform.position = Vector3.MoveTowards(thisTran.position, targetTran.position, step);
	}
	if (thisTran.name.Contains("02")){
		transform.position = Vector3.MoveTowards(thisTran.position, (targetTran.position  + new Vector3((10 * Random.value), 0, (10 * Random.value))), step);
	}
	if (thisTran.name.Contains("03")){
		transform.position = Vector3.MoveTowards(thisTran.position, (targetTran.position  + new Vector3((-10 * Random.value), 0, (-10 * Random.value))), step);
	}
}