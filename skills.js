"use strict";

async function getSkills(){
    const response = await fetch("level.json");
    console.log(response);

    const data = await response.json();
    console.log(data)
}
 
getSkills();

getSkills();

