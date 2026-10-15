# Instrucciones para GitHub Copilot

- Revisa primero la estructura y las convenciones existentes antes de proponer cambios.
- Mantén los cambios enfocados en la solicitud y evita modificar archivos no relacionados.
- No supongas tecnologías, comandos de validación ni requisitos que no estén documentados en el repositorio.
- Cuando realices cambios, ejecuta las comprobaciones disponibles y pertinentes; indica claramente si no fue posible validarlos.
- Actualiza la documentación cuando un cambio modifique el comportamiento o el uso del proyecto.

## Expresiones regulares

- Siempre que generes una expresión regular, incluye comentarios detallados que expliquen cada símbolo, grupo, cuantificador y carácter especial. Si el patrón no contiene alguno de esos elementos, indícalo cuando ayude a entenderlo.

Ejemplo: `/^\w+@[a-z]+\.[a-z]{2,3}$/`

- Las barras `/` inicial y final delimitan la expresión regular en su notación literal; no forman parte del patrón que se evalúa.
- `^` exige que la coincidencia comience al inicio de la cadena.
- `\w` coincide con un carácter de palabra (letra, dígito o guion bajo); `+` es un cuantificador que exige una o más repeticiones consecutivas de ese elemento.
- `@` coincide literalmente con el carácter arroba.
- `[a-z]` es una clase de caracteres que coincide con una letra minúscula ASCII entre `a` y `z`; el `+` siguiente exige una o más de esas letras.
- `\.` usa la barra invertida para escapar el punto, de modo que coincide con un punto literal y no con cualquier carácter.
- El segundo `[a-z]` vuelve a coincidir con una letra minúscula ASCII; `{2,3}` es un cuantificador que exige entre dos y tres repeticiones de esa clase.
- `$` exige que la coincidencia llegue al final de la cadena.
- Este patrón no contiene grupos.
