// import { Button } from 'bootstrap';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import {Add} from "../Redux/Action/Action.jsx"
import { useDispatch } from 'react-redux';
const Home = () => {
    let [data, setdata] = useState();
    console.log(data)
    let dispatch = useDispatch();
    let Addbtn = () => {
        if(data===undefined)return;
        dispatch(Add(data))
        setdata("")
    }
    return (
        <div className='container'>
            <section className='mt-3 text-center'>
                <h3>Enter Your Text</h3>
                <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                    <input className='form-control' value={data} onChange={(e) => setdata(e.target.value)} />
                    <Button variant='contained' onClick={() => Addbtn()} style={{ background: "#ee5253" }} className="mx-2"><AddIcon /></Button>

                </div>
                <Todo />
            </section>

        </div>
    );
}

export default Home;
