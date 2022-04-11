class Animais {
    constructor(genero, classe, ordem, habitat, locomoverSe, alimentarSe) {
        this.genero = genero;
        this.classe = classe;
        this.ordem = ordem;
        this.habitat = habitat;
        this.locomoverSe = locomoverSe;
        this.alimentarSe = alimentarSe;
    }
};
var analiseAnimais = function(genero, classe, ordem, habitat, locomoverSe, alimentarSe){
    return{

        constructor: analiseAnimais,
        genero: genero,
        classe: classe,
        ordem: ordem,
        habitat: habitat,
        locomoverSe:locomoverSe,
        alimentarSe:alimentarSe

    }
};
var mamiferos = Object.create(Animais, {
    genero:'mammaliaformes',
    classe: 'mammalia',
    ordem: 'therapsida',
    habitat: 'aquatico,terrestre',
    locomoverSe: 'pernas',
    alimentarSe: 'carnivoro ou herbivoro',
    cetaceo:{
        value: true,
        locomoverSe: 'nada',
        alimentarSe: 'carnivoro'
    },
})
var peixes = Object.create(Animais, {
    genero:'varios',
    classe: 'cartilaginosos e osteíctes ',
    ordem: 'therapsida',
    habitat: 'aquatico',
    locomoverSe: 'nadando',
    alimentarSe: 'carnivoro ou herbivoro',
    mar:{
        value: true,
        locomoverSe: 'nadando',
        alimentarSe: 'carnivoro ou herbivoro'
        
    }
});
var Ave = Object.create(Animais, {
    genero:'Ornithurae',
    ordem: 'Saurísquios',
    habitat: 'terrestre, aéreo e aquático',
    locomoverSe: 'Asas',
    alimentarSe: 'carnivoro ou herbivoro',
    migratória:{
        value: true
    }
})
