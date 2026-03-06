let complaints =
JSON.parse(localStorage.getItem("complaints")) || [];

function submitComplaint(){

let id="C"+Math.floor(Math.random()*10000);

let title=document.getElementById("title").value;

let category=document.getElementById("category").value;

let description=document.getElementById("description").value;

let location=document.getElementById("location").value;

let complaint={

id:id,
title:title,
category:category,
description:description,
location:location,
status:"Pending"

};

complaints.push(complaint);

localStorage.setItem(
"complaints",
JSON.stringify(complaints)
);

alert("Complaint Registered. ID: "+id);

}

function trackComplaint(){

let id=document.getElementById("trackId").value;

let result=document.getElementById("result");

let complaint=
complaints.find(c=>c.id===id);

if(complaint){

result.innerText=
"Complaint Status: "+complaint.status;

}else{

result.innerText="Complaint not found";

}

}
