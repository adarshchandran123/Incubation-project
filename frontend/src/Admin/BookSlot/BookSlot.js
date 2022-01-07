

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Modal, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Header from '../Header/Header';
import './BookSlot.css'

const BookSlot = () => { 
    const history = useHistory()
    const [slotDetail, setSlotDetail] = useState([])
    const [getProcess, setGetProcess] = useState([])
    const [appDetails, setAppDetails] = useState({})
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const SlotId = (slotId,index)=>{
        const details={}
        details.slotId=slotId

        details.index=index
        localStorage.setItem('slotId',JSON.stringify(details))
        
    }


    const AddSlot = () =>{
        axios.post('http://localhost:5000/admin/AddSlot').then((res)=>{
           
            Get_All_Slot()
        })
    } 

    const Get_Processing_apps = ()=>{

        axios.get('http://localhost:5000/admin/getProcessingApp').then((res)=>{
            
            setGetProcess(res.data)
        })

    }


    const AppApprove = (FormId)=>{
        axios.patch(`http://localhost:5000/admin/AppApprove/${FormId}`).then((res)=>{
          
          Get_All_Slot();
          
        })
  
      }


    const Get_All_Slot = () =>{

        axios.get('http://localhost:5000/admin/GetSlot').then((res)=>{
           
            setSlotDetail(res.data)
        })

    }

    const UpdateSlot = (appId) =>{
        var slotIds = JSON.parse(localStorage.getItem("slotId"))
        var slotId = slotIds.slotId
        var index = slotIds.index
        


        axios.patch(`http://localhost:5000/admin/updateSlot`,
        {
            slotId,
            appId,
            index
            
        }
        ).then((res)=>{
            
            Get_All_Slot()
            history.push('/bookSlot')
        })
    }


    const ApplicationId = (AppId)=>{
        
        axios.get(`http://localhost:5000/admin/ApplicatinDetails/${AppId}`).then((res)=>{
        
        setAppDetails(res.data)
        })
    }





    useEffect(() => {
        Get_All_Slot()
        Get_Processing_apps()
    }, [])

    return (
        <>
        <Header/>
        <div className="adminBody2">
            <div>
                <Container>
                    <Row>
                        <div>
                            {
                            
                            <Button style={{marginTop:30,backgroundColor:"#670d33",fontWeight:700}} onClick={()=>{AddSlot()}} >Add Slot</Button>
                            }
                            <div>
                                {
                                    slotDetail.map((details,index)=>{
                                        return(
                                            
                                            <>
                                            {
                                                details.IsActive ?

                                                <Button onClick={()=>{ApplicationId(details.ApplicationId);handleShow1()}} style={{marginTop:50,marginRight:20,width:60,backgroundColor:`${details.IsActive ? "red":""}`}} >S:{index+1}</Button>
                                                :
                                                
                                                <Button onClick={()=>{SlotId(details._id,index+1);handleShow()}} style={{marginTop:50,marginRight:20,width:60,backgroundColor:`${details.IsActive ? "red":"#52132e"}`}} >S:{index+1}</Button>
                                           }
                                           
                                          </>
                                        )
                                    })
                                }
                            </div>
                            <div>{
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Company Name</Modal.Title>
                              </Modal.Header>
                                {
                                    getProcess.map((pro)=>{
                                       return(

                                          <Modal.Body>

                                              <div style={{float:"left"}}>
                                                <span>{pro.companyName}</span>
                                              </div>
                                              <div style={{display:"flex",justifyContent:"flex-end"}}>

                                              <Button onClick={()=>{UpdateSlot(pro._id);handleClose();AppApprove(pro._id)}} style={{marginRight:"10px",backgroundColor:"#091e5a",fontWeight:700}}>Book Slot</Button>
                                              </div>

                                          </Modal.Body>
                                       ) 
                                    })
                                }
                              <Modal.Footer>
                                <Button style={{backgroundColor:"#1a3e13",fontWeight:700}} onClick={handleClose}>
                                  Close
                                </Button>
                                
                              </Modal.Footer>
                            </Modal>
                            }
                            </div>

                            <div> 
                                {
                                          <Modal show={show1} onHide={handleClose1}>
                                          <Modal.Header closeButton>
                                            <Modal.Title>Application</Modal.Title>
                                          </Modal.Header>
                                          {
                                              Object.keys(appDetails).map((key)=>{
                                                    return(

                                                        <Modal.Body>
                                                            <div style={{boxShadow:"black 1px 2px 5px",padding:3}} >
                                                                <div style={{float:"left",marginRight:20}} >

                                                                <span style={{fontWeight:700,}}>{key} :</span>
                                                                </div>
                                                                <div> 

                                                                <span>{appDetails[key]}</span>
                                                                </div>
                                                            
                                                            </div>

                                                        </Modal.Body>

                                                    )
                                              })
                                          }
                                          <Modal.Footer>
                                            <Button variant="success" onClick={handleClose1}>
                                              Close
                                            </Button>    
                                            
                                          </Modal.Footer> 
                                        </Modal>
                                }
                            </div>
                        </div>             
                    </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default BookSlot;

