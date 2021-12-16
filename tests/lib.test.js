const { test } = require("@jest/globals");
const { nbArtByCat }  = require("../lib")

test("boisson should has 2 articles", ()=> {
    expect(nbArtByCat.Boisson).toBe(2);
})

test("nb of cat should be 5", ()=>{
    expect(Object.entries(nbArtByCat).length).toBe(5);
})