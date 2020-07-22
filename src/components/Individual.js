import React,{useEffect,useState} from 'react'
import { Container, Row, Col, Card, CardBody,Button,Modal, ModalBody, ModalHeader,Progress } from "shards-react";
import axios from "axios";

export default function Individual(props) {
    const [file,setFile] = useState([]);
    const [load,setLoad] = useState(false);
    const [open,setOpen] = useState(false);
    const [link,setLink] = useState("");
    const [dllink,setDllink] = useState("");
    const [prog,setProg] = useState(0);
    const [progv,setProgv] = useState(false);

     useEffect(()=>{
         setProgv(true);
         var id = window.setInterval(()=>{
            setProg((prevProg)=> prevProg + 10);
         },200)
         setTimeout(()=>{
            axios({
                method:"get",
                url:"https://box-notes.herokuapp.com/getfiles?name=/" + props.match.params.name
            })
            .then((res) =>{
                console.log(res.data);
                if(res.data.length < 1){
                    window.alert("There are no files yet!")
                }
                setFile(res.data);
                setLoad(true);
                window.clearInterval(id);
                setProgv(false);
            })
            .catch((err)=>{
                window.alert(err.message)
            })
         },1000)
        
     },[])

     const request = (val) =>{
        axios({
            method:"get",
            url:"https://box-notes.herokuapp.com/links?file=/"+ props.match.params.name + "/"+val,
        })
        .then((res) =>{
           console.log(res.data);
           setLink(res.data);
           var str2 = res.data.slice(0, -1) + '1';
           setDllink(str2);
           setOpen(true);
       })
       .catch((err)=>{
           window.alert(err.message)
       })
     }
     const submit = (e) =>{
        const val = e.target.parentNode.firstChild.innerText;
        console.log(val);
        request(val);
        
     }
    return (
        <Container className="dr-example-container">
        {progv && <Progress theme="success" animated={true} value={prog} striped={true} bar={false} ></Progress> }
        <br />
            <h4>Notes for {props.match.params.name} </h4>
            <hr/>
            <Row>
            { load ? file.map((value,index)=>{
                return <Col key={index} sm="6" lg="4" xs="12">
                    <Card style={{margin:"0.3rem"}}>
                        <CardBody>
                            <h5>{value}</h5>
                                <Button onClick={submit} size="sm">View</Button>
      </CardBody>
                    </Card>
                </Col>
            }): <h5>Loading ...Please wait.</h5>}
            </Row>
            <Modal open={open} toggle={()=>setOpen(!open)}>
          <ModalHeader>Your file is ready!!</ModalHeader>
          <ModalBody>
          <h5>Choose the action below</h5>
          <a href={link} target="_blank" rel="noopener noreferrer" ><Button size="sm" theme="primary">Preview</Button></a>
          <a href={dllink} style={{margin:"1rem"}}><Button size="sm" theme="success">Download</Button></a>
          </ModalBody>
        </Modal>
        </Container>
    )
}
