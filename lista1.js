Contactos = ["mateo lopez", "camilo lozano", "esteban gomez"];
console.log(Contactos);
const addContact = (cont1) => {
  Contactos.push(cont1);
};
const dellContact = (c2) => {
  const c1 = Contactos.indexOf(c2);
  Contactos.splice(c1, 1);
};

addContact("juliana lopez");
dellContact("mateo lopez");
console.log(Contactos);
