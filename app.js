var URL_AGENDA = 'http://www.raydelto.org/agenda.php';
var tbody = document.getElementById('contactos');
var form = document.getElementById('form');
var estado = document.getElementById('estado');

function cargar() {
  estado.textContent = 'Cargando...';
  fetch(URL_AGENDA)
    .then(function (r) { return r.json(); })
    .then(function (contactos) {
      tbody.innerHTML = '';
      contactos.forEach(function (c) {
        var tr = document.createElement('tr');
        [c.nombre, c.apellido, c.telefono].forEach(function (v) {
          var td = document.createElement('td');
          td.textContent = v;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      estado.textContent = contactos.length + ' contactos';
    })
    .catch(function () { estado.textContent = 'Error al cargar los contactos'; });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  var contacto = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    telefono: form.telefono.value
  };
  fetch(URL_AGENDA, { method: 'POST', body: JSON.stringify(contacto) })
    .then(function (r) {
      if (!r.ok) throw new Error(r.status);
      form.reset();
      cargar();
    })
    .catch(function () { estado.textContent = 'Error al guardar el contacto'; });
});

cargar();
