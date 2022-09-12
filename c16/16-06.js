const person = {
    firstName: 'Sunba',
    lastName: 'Lee',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },

    setName: function (name) {
        this.lastName = name;
    }
};

console.log(person.firstName);
person.fullName = 'Nam sunba';
console.log(person);
console.log(person.fullName);

console.log(Object.getOwnPropertyDescriptors(person));
console.log('=============================');
person.setName('Set With Function');
console.log(person.fullName);