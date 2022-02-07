
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, ProgressBar, Row, Table } from 'react-bootstrap'
import Header from '../Header/Header'

const RecordList = () => {

    const [RecordList, setRecordList] = useState([])

    const Get_All_ApplicationList= ()=>{
        axios.get('http://localhost:5000/admin/recordList').then((res)=>{
            
            setRecordList(res.data)
        })
    }

    useEffect(() => {
        Get_All_ApplicationList()
    }, [])

    return (
        <>
        <Header/>
        
        <div>
            <Container>
                <Row>
                    <div>
                    <p className="tableHeading" >RECORD LIST</p>
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
                             RecordList.map((detail,index)=>{
                               return(
                                  
                                  <tr>
                                    <td>{index+1}</td>
                                    <td>{detail.companyName}</td>
                                    <td>
                                      {detail.companyAndProduct}</td>
                                      <td colSpan={3}>
                                                {
                                                    detail.status !== 'Rejecte' ?
                                                        (<Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Pending</th>
                                                                    <th>Accepted</th>
                                                                    <th>Approved</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan={3}>
                                                                        {detail.status !== 'rejecte' ?
                                                                            <ProgressBar style={{ width: '45em' }} animated now={detail.status === 'Pending' ? 7 : detail.status === 'Process' ? 50 : 100} /> :
                                                                            <span>Rejected</span>
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>) : <h5 style={{ color: 'red' }}>Rejected</h5>
                                                }
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

export default RecordList

