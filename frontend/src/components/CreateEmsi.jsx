import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function CreateEmsi() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');

    const navigate = useNavigate();

    const createEmsi = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:5000/datas`, {
                name: name,
                gender: gender,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='colums is-centered mt-5'>
        <div className='column is-half'>
            <form onSubmit={createEmsi}>
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
                <div className='field flex'>
                    <Link to={'/'} type='button' className='button mr-1 is-dark' >Cancel</Link>
                    <button type='submit' className='button is-success' >Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateEmsi;