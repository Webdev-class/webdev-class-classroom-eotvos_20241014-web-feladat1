const removeCustomer = require('./removeCustomer')
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
const t1 = [
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
const t2 = [
    {id:1, name:"Lannie Huddlestone", age:71, address:{city:"Kuala Terengganu", street:"7678 5th Parkway", house:177}, newsLetter: false},
    {id:2, name:"Filip Eslie", age:43, address:{city:"Hingatungan", street:"3 Farwell Lane", house:148}, newsLetter: true},
    {id:3, name:"Tally Birchett", age:54, address:{city:"Ciudad del Este", street:"03 Marcy Drive", house:155}, newsLetter: false},
    {id:4, name:"Tera Knotte", age:27, address:{city:"Chon Buri", street:"34811 Dixon Center", house:146}, newsLetter: true},
    {id:5, name:"Conn Sponder", age:55, address:{city:"Beberon", street:"38256 Elmside Court", house:91}, newsLetter: true},
    {id:6, name:"Margaret Hevey", age:80, address:{city:"Liuhe", street:"789 Vernon Center", house:59}, newsLetter: false},
    {id:7, name:"Jilli Tunnick", age:87, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: true},
    {id:8, name:"Casey Peevor", age:39, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: false},
    {id:9, name:"Ashlie Wozencraft", age:23, address:{city:"Espinosa", street:"78 Pepper Wood Terrace", house:11}, newsLetter: false}
]
const t3 = [
    {id:1, name:"Lannie Huddlestone", age:71, address:{city:"Kuala Terengganu", street:"7678 5th Parkway", house:177}, newsLetter: false},
    {id:2, name:"Filip Eslie", age:43, address:{city:"Hingatungan", street:"3 Farwell Lane", house:148}, newsLetter: true},
    {id:3, name:"Tally Birchett", age:54, address:{city:"Ciudad del Este", street:"03 Marcy Drive", house:155}, newsLetter: false},
    {id:4, name:"Tera Knotte", age:27, address:{city:"Chon Buri", street:"34811 Dixon Center", house:146}, newsLetter: true},
    {id:6, name:"Margaret Hevey", age:80, address:{city:"Liuhe", street:"789 Vernon Center", house:59}, newsLetter: false},
    {id:7, name:"Jilli Tunnick", age:87, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: true},
    {id:8, name:"Casey Peevor", age:39, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: false},
    {id:9, name:"Ashlie Wozencraft", age:23, address:{city:"Espinosa", street:"78 Pepper Wood Terrace", house:11}, newsLetter: false},
    {id:10, name:"Jonas Tungate", age:83, address:{city:"Padangulaktanding", street:"224 Manley Drive", house:49}, newsLetter: true}
]

test('removeCustomer test 1',() => {
    expect(removeCustomer(1)).toEqual(t1)
})
test('removeCustomer test 2',() => {
    expect(removeCustomer(10)).toEqual(t2)
})
test('removeCustomer test 3',() => {
    expect(removeCustomer(5)).toEqual(t3)
})
test('removeCustomer non existing customer',() => {
    expect(removeCustomer(100)).toEqual(false)
})