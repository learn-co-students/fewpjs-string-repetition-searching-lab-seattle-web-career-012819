function repeat(string, num){
  return (new Array(num+1)).join(string);
}

function heyJude(){
  return repeat("Na na na na na na na, na na na na, hey Jude.", 16);
}

function prohibitedLanguage(string){
  return string.search(/candycorn|brusselssprouts/);
}
