//los parametros por defecto

//antes de e6

function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'Col'; 
}

//es6 

function newFunction2(name='oscar', age=32, country='Col'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('yorman', '20', 'Col');


//templates  literals separar o unir varios elementos

let hello="hello";
let world="world";
let epicPhrase= hello + " " + world;
console.log(epicPhrase);
let epicphrase2= `${hello} ${world}`;
console.log(epicphrase2);

//let y const, multilinea,spread operator y desestructuracion

let lorem = "quiero escribir una frase epica. pero no la capto \n"
+ "la frase que capte."

let lorem2 = `otra frase ecpica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);



//destrucutracion
let person ={
    'name':'yorman',
    'age':20,
    'country': 'col'
}

console.log(person.name,person.age,person.country);

/////e6

let { name } = person;
console.log( name );


///operador de propagacion expandir varios elementos ("...")

let team1 = ['oscar', 'yorman', 'estiven'];
let team2 =['valeria', 'yesica','camila'];

let education = ['david', ...team1, ...team2];
console.log(education);

// arrow functions, promesas y parametros en objetos

let name = 'yorman';
let age = 20;

obj = {name : name, age: age};
//es6
obj2 ={name, age};
console.log(obj2);

//arrow functiones
 const names= [

     {name: 'yorman', edad: 20},
     {name: 'valentina', edad: 21}

    ]

    let lisOfNames = names.map(function(item){
        console.log(item.name);
    })
////
    let listOfNames2 = names.map(item=>console.log(item.name));
////
    const listOfNames3 = (name,age)=>{}
///
    const listOfName4=name=>{}
//////
    const square = num=>num*num;

    ///promesas

    const helloPromise = () => {
        return new Promise((resolve,reject)=>{
            if (true){
                resolve('Con exito');
            }else {
                reject('Error');
            }
        } )
    }

    helloPromise()
        .then(response => console.log(response))
        .then(response=>console.log("hola"))
        .catch(error=>console.log(error));


/////////////clases, modulos y generadores

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


/// import y export (modulos) pendiente...

import hello from './module';
console.log(hello());

/////generadores

function*helloWorld() {
if(true){
yield 'Hello, '
}
if(true){
    yield 'World';
}
};

const generatorHello = helloWorld ();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);