import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './Data';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';
import { useEffect } from 'react';

const Project = () => {

  const [spin, setSpin] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 1000)
  })

  return (
    <>
      {
        spin ? <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <Spinner animation="border" variant="primary" /> &nbsp;&nbsp; <h3>Loading...</h3>
        </div> :

          <div className='container mb-5'>
            <h2 className="text-center mt-5">Projects</h2>
            <div className='card_div'>
              <div className='row d-flex justify-content-around align-items-center'>

                {
                  projectData.map((elem, index) => {
                    return <Card style={{ width: '20rem', height: "20rem" }} className="mt-4 mb-4 pt-3">
                      <Card.Img variant="top" src={elem.imgsrc} />
                      <Card.Body>
                        <Card.Title className="text-center pt-2">{elem.projectName}</Card.Title>

                        <Button variant="primary" className="productBtn">
                          <a href={elem.demo} target="_blank" className='text-white text-decoration-none'>Live Demo</a>
                        </Button>
                      </Card.Body>
                    </Card>

                  })
                }





              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Project
