
import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./AdminHome.css"



import Header from '../Header/Header';
import axios from 'axios';


const AdminHome = () => {

    const history = useHistory()
    useEffect(() => {
        var adminInfo = localStorage.getItem("adminInfo");
        if(adminInfo){
            history.push("/Admin")
        }else{
            history.push("/Admin_Login")
        }
          
    }, [history])



    
    const [pendingDetails,setPendingDetails] = useState([])
    const [processDetails,setProcessDetails] = useState([])
    const [allApplicationList,setAllApplicationList] = useState([])


    const BookingSlot = ()=>{
      history.push('/bookSlot')
    }



 

    const OnProcess = (FormId)=>{
      axios.patch(`http://localhost:5000/admin/Onprocess/${FormId}`).then((res)=>{
        console.log("on process",res);
        getData()
      })

    }

    const AppReject = (FormId)=>{
      axios.patch(`http://localhost:5000/admin/AppReject/${FormId}`).then((res)=>{
        console.log("on reject",res);
        getData()
      })

    }




    const FormDetails = (formId) =>{

      localStorage.setItem("singleForm",JSON.stringify(formId))
      history.push('/applicationDetails')

    }


    const getData = () => {
      
      
   
      axios.get(`http://localhost:5000/api/user/mybooking`).then((datas) => {
        
        const details =datas.data
         
        

        const pendindStatus = details.filter((pendingData)=>{
     
          return pendingData.status === 'Pending'
              
      
      })
       
      setPendingDetails(pendindStatus) 


      const processStatus = details.filter((processData)=>{
     
        return processData.status === 'Process'
            
    
    })
     
    setProcessDetails(processStatus) 


    const applicationList = details.filter((Application)=>{
     
      return Application.status !== 'Pending' && Application.status !== 'Process'
          
  
    })

    setAllApplicationList(applicationList) 

     
       
      });








    };







   
  
    useEffect(() => {
      
      getData();
      
      
    }, []);
   
    // useEffect(() => {
      
      
    //   pending()
    // }, []);


   
    return (
        <>
        <Header/>
        <div className="adminBody" >

        <Container>
            <Row>

                <div>
                 
                    <p className="tableHeading" >NEW APPLICATION LIST</p>
                    <Table className="tableStyle responsive" striped bordered hover>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Company Name</th>
                            <th>Company Details</th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                           {
                             pendingDetails.map((detail,index)=>{
                               return(
                                  
                                  <tr>
                                    <td>{index+1}</td>
                                    <td>{detail.companyName}</td>
                                    <td>
                                      {detail.companyAndProduct}</td>
                                    <td>
                                     
                                      <Button style={{backgroundColor:"#5f1219",fontWeight:600}} 
                                      onClick={()=>FormDetails(detail._id)}

                                      >Open</Button>
                                      
                                    </td>
                                    <td> 
                                      <Button
                                      onClick={()=>{OnProcess(detail._id)}}
                                      style={{fontWeight:600,backgroundColor:"green"}} >Accept</Button>
                                    </td>
                                    <td> 
                                      <Button
                                      onClick={()=>{AppReject(detail._id)}}
                                      style={{fontWeight:600,backgroundColor:"red"}} >Reject</Button>
                                    </td>
                                  </tr> 
 
                                  

                               )
                             })
                           }


                        </tbody>
                    </Table>    
                            
                         
                        
                </div>

            </Row>


            <Row>

                <div>

                <p className="tableHeading" >PROCESSING APPLICATION LIST</p>
                    <Table className="tableStyle responsive" striped bordered hover>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Company Name</th>
                            <th>Company Details</th>
                            <th></th>
                            <th></th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {
                            processDetails.map((proData,index)=>{
                              return(
                                <tr>
                                <td>{index+1}</td>
                                <td>{proData.companyName}</td>
                                <td>{proData.companyAndProduct}</td>
                                <td>
                                  <Button
                                  onClick={()=>FormDetails(proData._id)}
                                  style={{backgroundColor:"#5f1219"}} >Open</Button>
                                </td>
  
                                <td>
                                  <Button 
                                  onClick={()=>{BookingSlot()}}
                                  style={{backgroundColor:"#063833",fontWeight:400}} >Book</Button>
                                </td>
                              </tr>

                              )

                            })
                          }


                        </tbody>
                    </Table> 

                </div>

            </Row>


            <Row>

              <div>

              <p className="tableHeading" > APPLICATION LIST</p>
                  <Table className="tableStyle responsive" striped bordered hover>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Company Name</th>
                          <th>Company Details</th>
                          <th>Incubation</th>
                          <th>Status</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {
                          allApplicationList.map((proData,index)=>{
                            return(
                              <tr>
                              <td>{index+1}</td>
                              <td>{proData.companyName}</td>
                              <td>{proData.companyAndProduct}</td>
                              <td>
                                {proData.incubation}
                                
                              </td>
                              <td>
                                <span style={{fontWeight:600,padding:5,color:"black"}} >{proData.status}</span>
                              </td>
                              
                            </tr>

                            )
                            
                          })
                        }

                      
                      </tbody>
                  </Table> 
                      
              </div>
                      
            </Row>



        </Container>
        </div>

        
        </>
    ) 
}

export default AdminHome;

