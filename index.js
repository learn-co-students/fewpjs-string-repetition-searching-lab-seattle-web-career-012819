function heyJude(){
 const str = "Na na na na na na na, na na na na, hey Jude."
 return str.repeat(16)
}


function prohibitedLanguage(str){
  let regex = /candycorn|brusselssprouts/
  return str.search(regex)
}
