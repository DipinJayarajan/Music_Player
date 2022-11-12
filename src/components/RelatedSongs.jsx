import  SongBar  from "./SongBar"

const RelatedSongs = ({data,isPlaying,activeSong,handlePauseClick,handlePlayClick, artistId}) => (
  <div className="flex flex-col">
    <h1 className="text-white font-bold text-3xl">Related Songs :</h1>

    <div className="mt-5 w-full flex-col">
      {data?.map((song , i) => (
        <SongBar 
        key= {`${song.key}-${artistId}`}
        song = {song}
        i = {i}
        isPlaying = {isPlaying}
        activeSong = {activeSong}
        handlePauseClick = {handlePauseClick}
        handlePlayClick = {handlePlayClick}
        artistId = {artistId}
        />
      ))}
    </div>

  </div>
);

export default RelatedSongs;
