// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo.
// Milestone 3 (BONUS)
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

$(document).ready(function(){
  // creo array icons
  const icons = [
  	{
  		name: 'cat',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'crow',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dog',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dove',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dragon',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'horse',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'hippo',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'fish',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'carrot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'apple-alt',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'lemon',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'pepper-hot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'user-astronaut',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-graduate',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-ninja',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-secret',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	}
  ];
  console.log(icons);

  // Milestone 1

  // ciclo l'array di oggetti con forEach e stampo anche su HTML
  // icons.forEach((item, i) => {
  //   // console.log(item);
  //   $('#icons').append(`<i class="${item.family} ${item.prefix}${item.name}"></i><div>${item.name}</div>`);
  // });

  // Milestone 2

  // Coloriamo le icone per tipo.
  icons.forEach((item, i) => {
    $('#icons').append(`<i class="${item.type} ${item.family} ${item.prefix}${item.name}"></i><div>${item.name}</div>`);
    console.log(item.type);
  });



});
