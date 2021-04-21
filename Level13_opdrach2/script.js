const age = 14;
const naam = 'Bram';
const totalAmount = 55;

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting');
}else {
    console.log('Geen korting');
}

if (naam == 'Bram' || naam == 'Sarah') {
    console.log('Gratis bierjtje!');
}else {
    console.log('Sorry geen gratis bietje');
}

if (totalAmount > 25 ) {
    console.log('Gratis bitterballen');
}else if (totalAmount > 50 ) {
    console.log('Gratis nachos');
}else {
    console.log('Koop nog meer, voor een freebie');
}