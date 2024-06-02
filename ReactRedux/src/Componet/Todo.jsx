import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Remove ,Updates} from "../Redux/Action/Action"
const Todo = () => {
    const { user_data } = useSelector((state) => state.Tosoreduser)
    let dispatch = useDispatch()
    let [showeye, setshoweye] = useState(false);
    let [show, setshow] = useState(false);
    let [ind, setind] = useState("");
    let [updete, setupdete] = useState("");

    let [showeyevalue, setshoweyevalue] = useState("");
    let remove = (id) => {
        dispatch(Remove(id))
    }
    let headershow = (el) => {
        setshow(true)
        setupdete(el)
    }

    let handleClose = () => {
       setshow(false);
    }
    let userdataupdete=()=>{
              dispatch(Updates(updete,ind))
              console.log(updete)
              handleClose()
    }
    return (
        <>        <div className='Todo-data'>
            {
                user_data.map((ele, k) => {
                    return (
                        <>
                            <div className='todo-containor px-2 mt-4' key={k} style={{ background: "gray", borderRadius: "5px", height: "45px", width: "400px", display: "flex", justifyContent: "space-between", margin: "auto" }}>
                                <li style={{ listStyle: "none", paddingTop: "10px", color: "white", fontWeight: "bold", font: "27px" }}>{ele}</li>
                                <div className='edit-eye' style={{ paddingTop: "10px" }}>
                                    <EditIcon style={{ color: "black", cursor: "pointer" }} onClick={() => {
                                        headershow(ele)
                                        setind(k)
                                    }
                                    } /> <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => remove(k)} /><RemoveRedEyeRoundedIcon onClick={() => { setshoweye(true), setshoweyevalue(ele) }} style={{ color: "blue", cursor: "pointer" }} /></div>
                            </div>
                        </>
                    )
                })
            }
            <Modal show={showeye} >
                <h1>{showeyevalue}</h1>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setshoweye(false)}  >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* {updete modal} */}
            <Modal show={show} onHide={handleClose}>
                <h3 className='mt-2 text-center'>Updete Your Task</h3>
                <Modal.Header >
                    <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
                        <input className='form-control col-lg-5 mt-2'  value={updete} onChange={(e) =>setupdete(e.target.value)} />
                    </div>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>userdataupdete()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}

export default Todo;
