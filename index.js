const formularioForm = document.getElementById("formulario");
//console.log("formularioForm", formularioForm);
const tituloInput = document.getElementById("inputTitulo");
//console.log("emailInput", emailInput);
const notaInput = document.getElementById("inputNota");
//console.log("🚀 ~ file: index.js ~ line 6 ~ passInput", passInput);
const categoriaInput = document.getElementById("inputCategoria");
//console.log("🚀 ~ file: index.js ~ line 8 ~ nombreInput", nombreInput);
const opcionInput = document.getElementById("inputOpcion");
//console.log("🚀 ~ file: index.js ~ line 10 ~ rolInput", rolInput);
const usuariosTable = document.getElementById("tabla");
//console.log("🚀 ~ file: index.js ~ line 12 ~ usuariosTable", usuariosTable);

const json = localStorage.getItem("notas");

const usuarios = JSON.parse(json) || [];

function genrarID() {
  return `_` + Math.random().toString(36).substr(2, 9);
}

formularioForm.onsubmit = function (event) {
  event.preventDefault();
  /*
  console, console.log(emailInput.value);
  console, console.log(passInput.value);
  console, console.log(nombreInput.value);
  console, console.log(rolInput.value);
  */
  const usuario = {
    id: genrarID(),
    titulo: tituloInput.value,
    nota: notaInput.value,
    categoria: categoriaInput.value,
  };
  usuarios.push(usuario);
  const json = JSON.stringify(usuarios);
  localStorage.setItem("notas", json);
  mostrarUsuarios();
  formularioForm.reset; //reset limpia los campos del formulario
};

function mostrarUsuarios() {
  /* const newLocal = usuarios.map(function (usuario) {
    return `
    <tr>
      <td>${usuario.nombre}</td>
      <td>${usuario.email}</td>
      <td>${usuario.rol}</td>
    </tr>
  `;
  }); 
  usuariosTable.innerHTML = usuariosMap.join(``);
  const usuariosMap = newLocal; */
  let filas = [];
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    const tr = `
    
        <tr>
          <td>${usuario.titulo}</td>
          <td>${usuario.categoria}</td>
          <td>${usuario.id}</td>
        </tr>
    `;
    filas.push(tr);
  }
  usuariosTable.innerHTML = filas.join(``);

  //usuariosTable.innerHTML = usuariosMap.join(``);
  /*
  usuariosTable.innerHTML = usuarios.Map
  <tr>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  `;*/
}

mostrarUsuarios();
