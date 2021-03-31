const musicFilter = require("./musicFilter")

describe('Music filter', () => {
    it('Return the same frequence when the value is in between the lowest and the highest allowd', () =>{
        expect(musicFilter([30], 25, 45 )).toEqual([30])
    })

    it('Return the frequence updated to the lower value allowed', () =>{
        expect(musicFilter([10], 25, 45 )).toEqual([25])
    })
})


//[10] 25 , 45                        | [25]