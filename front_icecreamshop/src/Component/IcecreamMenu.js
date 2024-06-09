import React from 'react';
import '../index.css'
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function IcecreamMenu({icecream}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div style={{ margin: '50px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <h1>{icecream.name}</h1>
                <img src={icecream.image} alt='iceImage' style={{height:'200px', width:'200px'}}></img>
            </div>

            <div className='w-100 m-1'>
                <p>Price: Rs.{icecream.price} /=</p>
            </div>
            <div className='w-100 m-1'>
                <p>Quantity : &nbsp;
                    <select style={{width:'60px'}}>
                        {[...Array(10).keys()].map((x,i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </p>
            </div>
            <div className='w-100 m-1'>
                <button className='btn' style={{ color: 'white', backgroundColor: 'red' }}>ADD TO CART</button>
            </div>

            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title style={{textAlign:'center'}}>{icecream.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body >
                    <img src={icecream.image} className='img-fluid' style={{height:'200px !important', width:'200px', textAlign:'center'}}></img>
                    <p>{icecream.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose} style={{ color: 'white', backgroundColor: 'red' }}>CLOSE</button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )


}

export default IcecreamMenu;