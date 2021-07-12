const lista1 = [1,2,3,2,2,2,2,23,3,3,4,4,4,4,5,5,6,1,1,] ;
const lista1Count = {};/* objeto vacio */

lista1.map(
  function (elemento){
    if (lista1Count[elemento]){
      lista1Count[elemento] += 1;/* = lista1Count[elemento] + 1 */
    }
    else {
lista1Count[elemento] = 1;
    }
  }
);