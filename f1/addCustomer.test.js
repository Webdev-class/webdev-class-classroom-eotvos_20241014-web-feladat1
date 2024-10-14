const addCustomer = require('./addCustomer')
let customers_test = [
    {id:1, name:"Lannie Huddlestone", age:71, address:{city:"Kuala Terengganu", street:"7678 5th Parkway", house:177}, newsLetter: false},
    {id:2, name:"Filip Eslie", age:43, address:{city:"Hingatungan", street:"3 Farwell Lane", house:148}, newsLetter: true},
    {id:3, name:"Tally Birchett", age:54, address:{city:"Ciudad del Este", street:"03 Marcy Drive", house:155}, newsLetter: false},
    {id:4, name:"Tera Knotte", age:27, address:{city:"Chon Buri", street:"34811 Dixon Center", house:146}, newsLetter: true},
    {id:5, name:"Conn Sponder", age:55, address:{city:"Beberon", street:"38256 Elmside Court", house:91}, newsLetter: true},
    {id:6, name:"Margaret Hevey", age:80, address:{city:"Liuhe", street:"789 Vernon Center", house:59}, newsLetter: false},
    {id:7, name:"Jilli Tunnick", age:87, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: true},
    {id:8, name:"Casey Peevor", age:39, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: false},
    {id:9, name:"Ashlie Wozencraft", age:23, address:{city:"Espinosa", street:"78 Pepper Wood Terrace", house:11}, newsLetter: false},
    {id:10, name:"Jonas Tungate", age:83, address:{city:"Padangulaktanding", street:"224 Manley Drive", house:49}, newsLetter: true}
]
let customers;
const t1 = {id:11,name:"Kiss Béla",age:18, address:{city:"Budapest",street:"Arany János út",house:11}, newsLetter: false}
const t2 = {id:12,name:"Nagy Enikő",age:45, address:{city:"Szeged",street:"Eszterházy körút",house:65}, newsLetter: true}
const t3 = {id:13,name:"Közepes Ernő",age:25, address:{city:"Kecskemét",street:"Fogatlan bácsi liget",house:100}, newsLetter: true}

beforeEach(() => {
    customers = [
        {id:1, name:"Lannie Huddlestone", age:71, address:{city:"Kuala Terengganu", street:"7678 5th Parkway", house:177}, newsLetter: false},
        {id:2, name:"Filip Eslie", age:43, address:{city:"Hingatungan", street:"3 Farwell Lane", house:148}, newsLetter: true},
        {id:3, name:"Tally Birchett", age:54, address:{city:"Ciudad del Este", street:"03 Marcy Drive", house:155}, newsLetter: false},
        {id:4, name:"Tera Knotte", age:27, address:{city:"Chon Buri", street:"34811 Dixon Center", house:146}, newsLetter: true},
        {id:5, name:"Conn Sponder", age:55, address:{city:"Beberon", street:"38256 Elmside Court", house:91}, newsLetter: true},
        {id:6, name:"Margaret Hevey", age:80, address:{city:"Liuhe", street:"789 Vernon Center", house:59}, newsLetter: false},
        {id:7, name:"Jilli Tunnick", age:87, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: true},
        {id:8, name:"Casey Peevor", age:39, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: false},
        {id:9, name:"Ashlie Wozencraft", age:23, address:{city:"Espinosa", street:"78 Pepper Wood Terrace", house:11}, newsLetter: false},
        {id:10, name:"Jonas Tungate", age:83, address:{city:"Padangulaktanding", street:"224 Manley Drive", house:49}, newsLetter: true}
    ];
});


test('addCustomers test 1',() => {
    customers_test.push(t1)
    expect(addCustomer(t1.name, t1.age, t1.address, t1.newsLetter)).toEqual(customers_test)
})


test('addCustomers test 2',() => {
    customers_test.push(t2)
    expect(addCustomer(t2.name, t2.age, t2.address, t2.newsLetter)).toEqual(customers_test)
})

test('addCustomers test 3',() => {
    customers_test.push(t3)
    expect(addCustomer(t3.name, t3.age, t3.address, t3.newsLetter)).toEqual(customers_test)
})
test('addCustomers test with bad input 1',() => {
    expect(addCustomer("Kiss Béla", "20", {city:"Budapest",street:"Arany János út",house:11}, true)).toEqual(false)
})

test('addCustomers test with bad input 2',() => {
    expect(addCustomer("Kiss Béla", 30, {city:"Budapest",street:"Arany János út",house:"11"}, true)).toEqual(false)
})
test('addCustomers test with bad input 2',() => {
    expect(addCustomer("Kiss Béla", 30, {city:"Budapest",street:"Arany János út",house:"11"})).toEqual(false)
})