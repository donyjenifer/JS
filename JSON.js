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