function musicFilter(musicTrack, lowerBound, higherBoudn){
    
    let filterTrack = []

    if(musicTrack[0] <  lowerBound){

        musicTrack[0] = lowerBound
        filterTrack.push(musicTrack[0])
        return filterTrack
    }
    return musicTrack
}

module.exports = musicFilter;