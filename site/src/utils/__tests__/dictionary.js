import Dictionary from "../dictionary"

describe("dictionary", () => {
  test("can be instantiated", () => {
    const dictionary = new Dictionary()
    expect(dictionary).toBeTruthy()
  })
  test("is of right class type", () => {
    const dictionary = new Dictionary()
    expect(dictionary).toBeInstanceOf(Dictionary)
  })
  test("given a correct spelling, return it unchanged", () => {
    const dictionary = new Dictionary()
    const initialString = "article"
    const returnedString = dictionary.getCorrectSpelling(initialString)
    expect(returnedString).toEqual(initialString)
  })
  test("when given misspellings not in the dictionary, they are returned unchanged", () => {
    const unknownInitialString = "aoidnaownaondaodn"
    const dictionary = new Dictionary()
    const returnedString = dictionary.getCorrectSpelling(unknownInitialString)
    expect(returnedString).toEqual(unknownInitialString)
  })
  
})
