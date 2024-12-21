console.log("Mukesh Kethe")
console.log(undefined == null) //Loose Equality (Checks Value)
console.log(typeof(undefined))
console.log(typeof(null))
console.log(undefined === null) //Strict Equality (Checks Value and Type)
const Person = {
    Name : 'Mukesh',
    Age : 22,
    greet : function(){
        console.log(`Hello, My Name is ${this.Name}, and Age is ${this.Age}`);
    }
};
Person.greet();

function createBook(title, author){
    return {
        title : title,
        author : author,
        describe : function(){
            console.log(`${this.title} by ${this.author}`);
        }
    }
}

const book1 = createBook('2025', 'Kethe Mukesh')
const book2 = createBook('2024', 'K V Sai Sathvika')
book1.describe();
book2.describe();

for (i = 0; i <= 10; i++){
    console.log(i)
}

var i = 0
while(i <= 10){
    console.log(i)
    i++
}

var i =0
do{
    console.log(i)
    i++
}
while(i <= 10);

let Students = {
    Name : 'Mukesh',
    Age : '22',
    City : 'Vijayawada'
}
for (let key in Students){
    console.log(key + " : " +Students[key])
}

let arr = [100, 200, 300];
for (let value of arr){
    console.log(value)
}