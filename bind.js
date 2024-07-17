const carrot = {
    color: 'orange'
};

const apple = {
    color: 'red',
    printColor() {
        console.log(this.color);
    },
};

apple.printColor.bind(carrot)();
//output= orange
