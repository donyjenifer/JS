myobj={
    name:"program",
    content:["C","C++","C#","JAVA","Javascript"],
    sub:function()
    {
        console.log("Learn Programming Language")
    }
};
console.log(myobj.content[1])
console.log(myobj)
myobj.sub()

const sendJSON=JSON.stringify(myobj)
console.log(sendJSON);
console.log(typeof myobj)
console.log(typeof sendJSON)

const receiveJSON=JSON.parse(sendJSON);
console.log(receiveJSON)
