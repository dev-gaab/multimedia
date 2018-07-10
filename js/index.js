/*
	** Funciones de la pagina principal **

	Cargar los cursos de Javascript y JQuery
*/

// Funcion que carga los html al contenido de la pagina

function changeContent(data) {
  switch (data) {
    case 'inicio':

      break;

    case 'intro':
      $('#content').load('./views/js/intro.html');
      SyntaxHighlighter.all();
      break;

    case 'sintax':
      break;

    case 'salida':
      break;

    case 'variables':
      break;

    case 'opArit':
      break;

    case 'opAsig':
      break;

    case 'opComp':
      break;

    case 'opLog':
      break;

    case 'funciones':
      break;

    case 'condi':
      break;

    case 'ciclos':
      break;
  }
}