
const allp = document.getElementsByTagName("p");
const allh = document.getElementsByTagName("h1");

const allText = [...allp, ...allh]

// mettre le mot légende en vert automatiquement
// ne marche que si "légende" est mentioné une seule fois dans chaque élément. 
allText.forEach((paragraph)=> {
  let initialHTML = paragraph.innerHTML
  const index = initialHTML.search(/légende/i) // ignore la casse

  if(index> -1) // si la recherche a réussi
  {
  
  let modifiedHTML = initialHTML.substring(0, index) + '<span>' + initialHTML.substring(index, index+7) + '</span>'+initialHTML.substring(index+7, index.length)  
  paragraph.innerHTML = modifiedHTML

  // attention: au départ j'avais écrit "initialHTML = modifiedHTML" et je ne comprenais pas pourquoi le dom ne s'était pas mis à jour...
  // C'était parce que initialHTML était une copie shallow de innerHTML, plus référencé à paragraph...
}
})