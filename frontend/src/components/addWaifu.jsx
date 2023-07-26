import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

function AddWaifu() {
    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const [anime, setAnime] = useState('');
    const [emsiId, setEmsiId] = useState('');
    
    const [animeList, setAnimeList] = useState([]);

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getAnimeList();
    }, []);

    const getAnimeList = async () => {
        const response = await axios.get(`http://localhost:5000/animes`);
        setAnimeList(response.data);
        setAnime(response.data.id);
        setEmsiId(id);
    }

    const addWaifu = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:5000/waifus`, {
                name: name,
                gender: gender,
                emsiId: emsiId,
                animeId: anime,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <div className='colums is-centered mt-5'>
        <div className='column is-half'>
            <form onSubmit={addWaifu}>
                <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='input'
                            placeholder='Enter your name here...' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Gender</label>
                    <div className='control'>
                        <div className='select is-fullwidth'>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Anime</label>
                    <div className='control'>
                        <div className='select is-fullwidth'>
                            <select
                                value={anime}
                                onChange={(e) => setAnime(e.target.value)}
                            >
                                {
                                    animeList.map((anime) => {
                                        return (
                                            <option key={anime.id} value={anime.id}>{anime.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='field flex'>
                    <Link to={'/'} type='button' className='button mr-1 is-dark' >Cancel</Link>
                    <button type='submit' className='button is-success' >Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddWaifu;