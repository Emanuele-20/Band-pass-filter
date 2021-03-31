function musicFilter(musicTrack, lowerBound, higherBoudn){
    

    var filterTrack = musicTrack.map(freq => {

        if(freq < lowerBound){
            return freq = lowerBound
        } else if (freq > higherBoudn){
            return freq = higherBoudn
        } else {
            return freq
        }
        
    })

    return filterTrack

}

module.exports = musicFilter;
