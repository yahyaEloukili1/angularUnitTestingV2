import { addition } from "./firstFunction";
describe('Test Addition',()=>{
    it('Testing addition function',()=>{
            expect(addition(1,2)).toBe(3)
    })
    it('string with toBe ===',()=>{
        expect('hello').toBe('hello')
        })
    it('string with toBe ==',()=>{
                expect('hello').toBe('hello')
         })
})