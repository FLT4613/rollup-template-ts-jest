import { greet } from 'src/greet'

test("Greet Taro", () => {
    expect(greet("Taro")).toBe("Hello, Taro")
})