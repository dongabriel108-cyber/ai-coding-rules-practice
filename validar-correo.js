function validarCorreoElectronico(correo) {
  if (typeof correo !== "string") {
    return false;
  }

  // Las barras / delimitan la expresión regular literal en JavaScript.
  // ^ fuera de una clase exige el inicio de la cadena.
  // [ y ] abren y cierran una clase de caracteres; el ^ inicial dentro de ella
  // niega la clase, por lo que [^\s@] coincide con cualquier carácter salvo
  // espacios en blanco (\s) y @. La barra invertida escapa s para representar
  // la clase de espacios; @ es literal. El cuantificador + exige una o más
  // repeticiones consecutivas de esa clase.
  // El siguiente @ es el separador literal entre el usuario y el dominio.
  // La segunda [^\s@]+ aplica la misma clase negada y el mismo cuantificador +.
  // \. usa la barra invertida para escapar el punto, que así se interpreta
  // literalmente (sin escapar, . coincidiría con cualquier carácter).
  // La última [^\s@]+ exige uno o más caracteres no blancos y distintos de @.
  // $ fuera de una clase exige el final de la cadena. El patrón no tiene grupos.
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return patron.test(correo);
}

console.log(validarCorreoElectronico("ejemplo@gmail.com"));
console.log(validarCorreoElectronico("correo-invalido"));
