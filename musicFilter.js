function musicFilter(musicTrack, lowerBound = 40, higherBoudn = 1000){
    

    var filterTrack = musicTrack.map(freq => {

        if(freq < lowerBound){
            return freq = lowerBound;
        } else if (freq > higherBoudn){
            return freq = higherBoudn;
        } else {
            return freq;
        };

    })

    return filterTrack

}

module.exports = musicFilter;
