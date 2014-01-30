#pragma strict

var target : Transform;
static var sp = new Array();

function Start () {
	
}

function Update () {
	sp[0] = target.position + (new Vector3(4, 4, 0));
	sp[1] = target.position + (new Vector3(-4, -4, 0));	
}