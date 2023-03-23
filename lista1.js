Contactos = ["mateo lopez", "camilo lozano", "esteban gomez"];

function addellcontact(cont1) {
  Contactos.push(cont1);
  Contactos.splice(2, 1);
}

addellcontact("juliana lopez");
console.log(Contactos);
