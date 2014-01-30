#pragma strict

var selected : boolean;

function Start () {

}

function Update () {
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;
	if(Physics.Raycast(ray,hit) && Input.GetMouseButton(0)){
		if(hit.collider.name.Contains("creep")){
			Debug.Log("This worked, click on creep");
		}
	}
}