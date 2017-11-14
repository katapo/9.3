var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var textChanged = text.replace('Velociraptor', dinosaurUpperCased);

console.log(textChanged.substr(0, textChanged.length/2));