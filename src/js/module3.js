function Something(){
    this.hello = 'Hello';
};

Something.prototype.sayHello = function(name)
{
    if (typeof name === 'string') {
        return this.hello + ' ' + name + '!';
    }
    return this.hello + '!';
};

export default Something;