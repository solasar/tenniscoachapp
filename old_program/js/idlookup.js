var typeDescs = {};
typeDescs["70"] = "Forehand";
typeDescs["71"] = "Backhand";
typeDescs["72"] = "Forehand Volley";
typeDescs["73"] = "Backhand Volley";
typeDescs["74"] = "Serve Deuce";
typeDescs["75"] = "Serve Advantage";
typeDescs["76"] = "Serve";
typeDescs["77"] = "Forehand Approach";
typeDescs["78"] = "Backhand Approach";
typeDescs["79"] = "Forehand Lob";
typeDescs["80"] = "Backhand Lob";
typeDescs["81"] = "Overhead";
typeDescs["82"] = "Forehand Drop";
typeDescs["83"] = "Backhand Drop";

function getTypeDesc(id) {
	return typeDescs[id];
}