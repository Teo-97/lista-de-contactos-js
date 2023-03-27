let persona = [
  {
    nombre: "mateo",
    id: 123,
    apellido: "lopez zambrano",
    tel: 3508257070,
    ubicacion: ["bogota", "calle 21"],
  },
  {
    nombre: "carolina",
    id: 1234,
    apellido: "cuervo garcia",
    tel: 3508257071,
    ubicacion: ["bogota", "calle 22"],
  },
  {
    nombre: "olga",
    id: 12345,
    apellido: "castellanos arcia",
    tel: 3508257072,
    ubicacion: ["bogota", "calle 23"],
  },
];

let lista =
  '{"nombre": "jose", "id": 123456, "apellido": "lop", "tel":3508257074, "ubicacion": ["bogota", "calle25"]  }';
let oflist = JSON.parse(lista);
const addcontact = function (cont1) {
  persona.push(cont1);
  persona.splice(2, 1);
};
addcontact(oflist);
console.log(persona);
