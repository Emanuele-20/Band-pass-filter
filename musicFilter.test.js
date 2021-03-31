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

   
   // array1.forEach(element => console.log(element));

})

//[10, 30], 25, 45                    | [25, 30]

