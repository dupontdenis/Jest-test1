const { data } = require("./data");

// nb d'articles / catégorie
const nbArtByCat = data.reduce((a, { cat }) => {
    (!a[cat]) ? a[cat] = 1 : a[cat] += 1
    return a;
}, {});
//console.log(nbArtByCat);

// // nb d'articles / catégorie
// const nbArtByCat = data.reduce((a, { cat }) => {
//     a[cat] = (a[cat] || 0 ) + 1
//     return a;
// }, {});
// //console.log(nbArtByCat_V2);

module.exports = {
    nbArtByCat
}




