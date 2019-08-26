// spec/person.spec.js
require('../spec.helper')

describe("Person", () => {
    let person = new Person({
        weight: 90,
        height: 186
    })

it("should have weight of 90", () => {
    expect(person.weight).to_equal(90);
})

it("should have height of 186", () => {
    expect(person.height).to_equal(186);
})

});