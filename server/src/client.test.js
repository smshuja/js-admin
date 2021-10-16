const rewire = require("rewire")
const client = rewire("./client")
const onRenderComplete = client.__get__("onRenderComplete")
// @ponicode
describe("onRenderComplete", () => {
    test("0", () => {
        let callFunction = () => {
            onRenderComplete()
        }
    
        expect(callFunction).not.toThrow()
    })
})
