import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeleteSong from '../pages/DeleteSong';

const SongListActual = () => {

    // the song list from the backend
    const [songs, setSongs] = useState([]);

    // experimenting with using a modal for deleting songs instead of a page
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:1234/metronome')
            .then((response) => {
                setSongs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='overflow-auto'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>BPM</th>
                        <th>Time Signature</th>
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
                                    <i className='bi bi-check2-square' />
                                </td>
                                <td>
                                    <i className="bi bi-trash3-fill" onClick={() => setModalShow(true)} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <DeleteSong show={modalShow} onHide={() => setModalShow(false)} />

        </div>
    )
}

export default SongListActual