# Tarea 3: Agenda Multicapas

Programación WEB – ITLA (2026-C-003)

**Estudiante:** Jezel Erislander Pujols Batista · **Matrícula:** 2025-2067 · **Carrera:** Desarrollo de Software

Agenda WEB que lista y agrega contactos (nombre, apellido, teléfono) usando `fetch` contra `http://www.raydelto.org/agenda.php` (GET para listar, POST con JSON para agregar).

Abrir `index.html` en el navegador (desde archivo local o un servidor `http://`, no `https://`, porque el servicio es HTTP).

## Capturas de pantalla

![Listado de contactos cargado desde el servicio](capturas/01-listado-contactos.png)

La agenda carga con `GET` el listado de `agenda.php` y muestra el total de contactos en la tabla.

![Formulario con un contacto de ejemplo](capturas/02-formulario-rellenado.png)

Formulario relleno con un contacto de ejemplo (Juan Pérez, 809-555-0123), listo para pulsar **Agregar**.

![Contacto agregado al final del listado](capturas/03-contacto-agregado.png)

Después de **Agregar**, la app vuelve a cargar el listado y el nuevo contacto aparece en la última fila. En esta captura el `POST` se simuló localmente para no escribir datos de prueba en la agenda pública compartida.
