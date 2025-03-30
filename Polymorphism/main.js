wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.

class Animal {

    #name;
    #type;
    #gender;
    #age;

    animal_detail(name,type,gender,age)
    {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age;
    }

    print()
    {
        document.writeln("Name : " + this.#name + "<br>");
        document.writeln("Type : " + this.#type + "<br>");
        document.writeln("Gender : " + this.#gender + "<br>");
        document.writeln("Age : " + this.#age + "<br><hr>");

    }

}

const a1 = new Animal();
const a2 = new Animal();
const a3 = new Animal();

a1.animal_detail("tiger" , "Tiger" , "male" , 4)
a2.animal_detail("enna" , "Dog" , "female" , 1)
a3.animal_detail("rocky" , "cat" , "male" , 1.5)


document.writeln("<h2>Animal - 1</h2>")
a1.print()

document.writeln("<h2>Animal - 2</h2>")
a2.print()

document.writeln("<h2>Animal - 3</h2>")
a3.print()