const datos = [
  {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      correo: "juan.perez@example.com",
      telefono: "1234567890",
      comentario: "Comentario de ejemplo 1"
  },
  {
      id: 2,
      nombre: "María",
      apellido: "García",
      correo: "maria.garcia@example.com",
      telefono: "0987654321",
      comentario: "Comentario de ejemplo 2"
  },
  {
      id: 3,
      nombre: "Carlos",
      apellido: "López",
      correo: "carlos.lopez@example.com",
      telefono: "1122334455",
      comentario: "Comentario de ejemplo 3"
  },
  {
      id: 4,
      nombre: "Ana",
      apellido: "Martínez",
      correo: "ana.martinez@example.com",
      telefono: "5566778899",
      comentario: "Comentario de ejemplo 4"
  },
  {
      id: 5,
      nombre: "Luis",
      apellido: "Hernández",
      correo: "luis.hernandez@example.com",
      telefono: "6677889900",
      comentario: "Comentario de ejemplo 5"
  },
  {
      id: 6,
      nombre: "Laura",
      apellido: "Fernández",
      correo: "laura.fernandez@example.com",
      telefono: "7788990011",
      comentario: "Comentario de ejemplo 6"
  },
  {
      id: 7,
      nombre: "Miguel",
      apellido: "Torres",
      correo: "miguel.torres@example.com",
      telefono: "8899001122",
      comentario: "Comentario de ejemplo 7"
  },
  {
      id: 8,
      nombre: "Sofía",
      apellido: "Ramírez",
      correo: "sofia.ramirez@example.com",
      telefono: "9900112233",
      comentario: "Comentario de ejemplo 8"
  },
  {
      id: 9,
      nombre: "Diego",
      apellido: "Rojas",
      correo: "diego.rojas@example.com",
      telefono: "1122334455",
      comentario: "Comentario de ejemplo 9"
  },
  {
      id: 10,
      nombre: "Isabel",
      apellido: "Morales",
      correo: "isabel.morales@example.com",
      telefono: "2233445566",
      comentario: "Comentario de ejemplo 10"
  }
];

tabla=document.querySelector('#tabla');

function crearTabla(){
  var cadena= "<table><thead>";
  cadena=cadena+"<tr><th>ID</th>";
  cadena=cadena+"<th>Nombre</th>";
  cadena=cadena+"<th>Apellido</th>";
  cadena=cadena+"<th>Correo</th>";
  cadena=cadena+"<th>Telefono</th>";
  cadena=cadena+"<th>Comentario</th></tr></thead>";
  cadena=cadena+"<tbody>";

  for(const usuario of datos){
      cadena=cadena+"<tr>";
      cadena=cadena+"<td>"+usuario.id+"</td>";
      cadena=cadena+"<td>"+usuario.nombre+"</td>";
      cadena=cadena+"<td>"+usuario.apellido+"</td>";
      cadena=cadena+"<td>"+usuario.correo+"</td>";
      cadena=cadena+"<td>"+usuario.telefono+"</td>";
      cadena=cadena+"<td>"+usuario.comentario+"</td>";
      cadena=cadena+"</tr>";
  }
  cadena=cadena+"</tbody>";
  cadena=cadena+"</table>";
  tabla.innerHTML=cadena;
}

function agregarFila() {
    const id=document.getElementById('id').value;
    const nombre=document.getElementById('nombre').value;
    const apellido=document.getElementById('apellido').value;
    const correo=document.getElementById('correo').value;
    const telefono=document.getElementById('telefono').value;
    const comentario=document.getElementById('comentario').value;

    if(id && nombre && apellido && correo && telefono && comentario){
        let contador=tabla.getElementsByTagName('tbody')[0];
        const nuevaFila=contador.insertRow();
        nuevaFila.innerHTML=`
          <td>${id}</td>
          <td>${nombre}</td>
          <td>${apellido}</td>
          <td>${correo}</td>
          <td>${telefono}</td>
          <td>${comentario}</td>
        `;
        document.getElementById("Formulario").reset();
    }
    else{
        alert("Por favor, llene todos los campos");
    }
}

crearTabla();