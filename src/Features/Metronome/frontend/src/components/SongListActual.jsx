import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { baseURL } from '../../../../..';

const SongListActual = () => {

    // the song list from the backend
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/metronome`)
            .then((response) => {
                setSongs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <table className='table--custom'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>BPM</th>
                        <th>Measure</th>
                        <th />
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        songs.map((song) => (
                            <tr key={song._id}>
                                <td>{song.Title}</td>
                                <td>{song.Artist}</td>
                                <td>{song.Tempo}</td>
                                <td>{song.TimeSignature}</td>
                                <td>
                                    <Link to="/metronome" state={{
                                        Title: song.Title,
                                        Artist: song.Artist,
                                        Tempo: song.Tempo,
                                        TimeSignature: song.TimeSignature
                                    }}>
                                        <i className='bi bi-check2-square' />
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        to={`/metronome/songList/editSong/${song._id}`}>
                                        <i className="bi bi-pencil-square" />
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        to={`/metronome/songList/deleteSong/${song._id}`}>
                                        <i className="bi bi-trash3-fill" />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default SongListActual