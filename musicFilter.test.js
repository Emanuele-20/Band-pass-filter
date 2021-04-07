const musicFilter = require("./musicFilter")

describe('Music filter', () => {
    it('Return the same frequence when the value is in between the lowest and the highest allowd', () =>{
        expect(musicFilter([30], 25, 45 )).toEqual([30])
    })

    it('Return the frequence updated to the lower value allowed', () =>{
        expect(musicFilter([10], 25, 45 )).toEqual([25])
    })

    it('Return the frequence updated to the highet value allowed', () =>{
        expect(musicFilter([50], 25, 45 )).toEqual([45])
    })

    it("Return [25, 30] when [10, 30], 25, 45  is passed", ()=>{
        expect(musicFilter([10, 30], 25, 45)).toEqual([25, 30])
    })

    it("Return [25, 25, 30, 40, 45, 45] when  [10, 20, 30, 40, 50, 60], 25, 45 is passed", ()=>{
        expect(musicFilter([10, 20, 30, 40, 50, 60], 25, 45)).toEqual([25, 25, 30, 40, 45, 45])
    })
})



describe("Music Filter - Edge cases", ()=> {

    it("Assign the default value if no lower and higher bound provided", () => {
        expect(musicFilter([10, 30, 50, 1100])).toEqual([40, 40, 50, 1000])
    })

});

