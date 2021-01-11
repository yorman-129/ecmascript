const data = {
    frontend: 'oscar',
    backend: 'yorman',
    design: 'maria',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'oscar',
    backend: 'yorman',
    design: 'maria',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = ' hello ';
console.log(string.padStart(7,'YT'));
console.log(string.padEnd(10,'world'));
console.log('perros '.padEnd(12,'jajaj'));


//// async await

const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true) ? setTimeout(()=>resolve('hello world'),3000) 
        : reject(new Error('Test Error'))

    });
};

const helloAsync = async () => {
    try{
    const hello = await helloWorld();
    console.log(hello);
    } catch(error){
        console.log(error);
    }
}

helloAsync();

