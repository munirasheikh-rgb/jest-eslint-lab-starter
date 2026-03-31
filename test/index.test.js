const { capitalizeWords, filterActiveUsers, logAction } = require('../index')
test ("should capitalize the first letter of each word",()=>{
    expect("Hello World").toBe("Hello World")
})

test("should handle empty strings",()=>{
    expect(capitalizeWords("")).toBe("")
})
test("should handle strings with special characters",()=>{
    expect(capitalizeWords("hello-world")).toBe("Hello-World")
})
test ("take note of single word strings",()=>{
    expect(capitalizeWords("hello")).toBe("Hello")
})
test ("checks and return array with active user in mixed array",()=>{
    const users =[
        {name:"Alice",isActive:true},
        {name:"Bob", isActive:false}
    ]
    const result = filterActiveUsers(users)
    expect(result).toEqual([{name:"Alice",isActive:true}])
})
test ("checks and return empty array with inactive users",()=>{
    const users = [
        {name:"Alice", isActive:false},
        {name:"Bob",isActive:false}
    ]
    const result = filterActiveUsers(users)
    expect(result).toEqual([])
})
test ("checks and return empty array when input is empty",()=>{
expect(filterActiveUsers([])).toEqual([])
})
test("should return action performed by user with timestamp",()=>{
    const result = logAction("login","Alice")
    expect(result).toContain("User Alice performed login at")
})
test("should handle missing action ",()=>{
    const result = logAction("","Alice")

    expect(result).toContain("User Alice performed  at")
})
test("should handle missing username",()=>{
    const result = logAction("login","")
    expect(result).toContain("User  performed login at")
})
test ("should handle empty strings as input",()=>{
    const result =logAction("", "")
    expect(result).toContain("User  performed  at")
})