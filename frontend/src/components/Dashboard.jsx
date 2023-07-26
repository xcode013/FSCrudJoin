import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Dashboard() {
    const [fullData, setFullData] = useState([]);

    useEffect(() => {
        getFullData();
    }, []);

    const getFullData = async () => {
        const response = await axios.get(`http://localhost:5000/datas`);
        setFullData(response.data);
    }
    
    const deleteWaifu = async (waifuId) => {
        try {
            await axios.delete(`http://localhost:5000/waifus/${waifuId}`)
            getFullData();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='colums mt-5'>
        <div className='is-centered column is-half'>
            <Link to={'/add'} className='button is-small is-success' >Add User</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Gender</td>
                        <td>Waifu</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        fullData.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.gender}</td>
                                    <td>
                                        <ul>
                                        {
                                            data.waifus.map((waifus, index) => {
                                                return(
                                                    <li style={{listStyle: "outside"}} key={index}>
                                                        {waifus.name} - {waifus.anime.name} | <button onClick={() => deleteWaifu(waifus.id)} className='button is-small is-danger'>Delete Waifu</button>
                                                    </li>

                                                )
                                            })
                                        }
                                        </ul>
                                        <Link to={`/addwaifu/${data.id}`} className='button is-small is-success'>add Waifu</Link>
                                    </td>
                                    <td>
                                    <Link target='' to={`/update/${data.id}`} className='button is-small is-info mr-1'>Update Emsi</Link>
                                    <button className='button is-small is-danger'>Delete Emsi</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard;