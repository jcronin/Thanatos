#pragma strict

var target : Transform;

function Start () {
}

function Update () {
	var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;
	if(Physics.Raycast(ray,hit) && Input.GetMouseButton(0)){
		if(hit.collider.name.Contains("Floor")){
			CastRayToWorld();
		}
	}
}

function CastRayToWorld() {
    var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);   
    var hit : RaycastHit; 
    if (Physics.Raycast(ray, hit)) Debug.Log("Hit something at "+hit.distance+" meters");
    var point : Vector3 = ray.origin + (ray.direction * hit.distance);    
    target.position = point;
}