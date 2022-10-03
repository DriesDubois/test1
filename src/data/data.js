/*
ATTENTION!!!!
    all data in this example application is static
    please do not make the mistake to use this data everywhere in the code!
    you should use it only in the root component App.js and pass it down to the components that use it

    for a larger application it is important to make a distinction between
       * components that own data
       * visual components
    for a real application the data will probably not be hard-coded but will come from a database or an API call
    we learn that in the 2nd part of this course....
*/

export const PRODUCTS_DATA = [
    {name: "cola", price: 1 },
    {name: "water", price: 1, note: "plat of bruisend"},
    {name: "bier", price: 1, size: 25},
    {name: "bier groot", price: 1, size: 33},
    {name: "wijn", price: 2, note:"rood, wit of rosé"},
    {name: "cava", price: 3},
];


export const NUMBER_DATA = [1, 3, 5, 2, 6, 7, 34, 12, 66, 98, 11, 2];

export const CAR_DATA = [
    {
        id: 1,
        name: "mijn eerste auto",
        brand: "peugeot",
        type: "204",
        color: "blauw",
    },
    {
        id: 2,
        name: "auto van mijn zus",
        brand: "fiat",
        type: "punto",
        color: "geel",
        note: "die ging altijd kapot"
    },
    {id: 3, name: "die van mijn pa", brand: "volvo", color: "zwart"},
    {id: 4, name: "geitje", brand: "citroën",},
    {id: 5, name: "auto1", brand: "Peugeot", type: "505", color: "grijs"},
    {id: 6, name: "auto2", brand: "Fiat", type: "Panda"},
    {id: 7, name: "auto3", brand: "Fiat", type: "Tipo", color: "groen"},
    {id: 8, name: "auto4", brand: "Citroën", type: "C4", color: "rood"},
    {id: 9, name: "auto5", brand: "Fiat", type: "Panda", color: "rood"}
];

export const PERSON_DATA = [
    {id: 1, name: "Arend", age: 18, city: "Antwerpen", school: "SKW"},
    {id: 2, name: "Marie", age: 25, city: "Lint", school: "ANT"},
    {id: 3, name: "Mohamed", age: 16, city: "Ekeren", school: "SKW"},
    {id: 4, name: "Yves", age: 24, city: "Berchem", school: "SKW"},
    {id: 5, name: "Aziz", age: 16, city: "Antwerpen", school: "SKW"},
    {id: 6, name: "Eli", age: 16, city: "Antwerpen", school: "AVOND"},
    {id: 7, name: "Bart", age: 18, city: "Antwerpen", school: "ANT"},
    {id: 8, name: "Aisha", age: 28, city: "Mortsel", school: "ANT"},
    {id: 9, name: "Sara", age: 16, city: "Mortsel"},
    {id: 10, name: "Alain", age: 20, city: "Antwerpen", school: "ANT"},
    {id: 11, name: "Wout", age: 20, city: "Antwerpen", school: "AVOND"},
    {id: 12, name: "Alyona", age: 20, city: "Kapellen", school: "SKW"},
    {id: 13, name: "Wout", age: 20, city: "Antwerpen", school: "AVOND"},
    {id: 14, name: "Ruben", age: 19, city: "Boechout", school: "ANT"},
    {id: 15, name: "Annie", age: 21, city: "Kapellen", school: "ANT"},
    {id: 16, name: "Farah", age: 20, city: "Antwerpen", school: "ANT"},
];