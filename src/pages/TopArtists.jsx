import React from 'react';
import { useSelector } from 'react-redux';

import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';


const TopArtists= () => {


    const { data, isFetching, error } = useGetTopChartsQuery();

    if(isFetching ) return  <Loader title="Loading top charts" />

    if(error) return <Error />

    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-white text-3xl text-left mt-4 mb-10'>Top Artists</h2>

        <div className='flex flex-wrap justify-center sm:justify-start'>
            {data?.map((track, i) => (
                <ArtistCard key={track.key} track={track}
                />
            ))}
        </div>
    </div>
    )
}


export default TopArtists;
