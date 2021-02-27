import  React ,{ useState } from 'react';

import Icon from './components/icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const itemArray = new Array(9).fill("empty")


function App() {

const [winMessage,setWinmessage] = useState("")
const [isCross, setIscross]=useState(false)

const reloadGame = () => {
  setIscross(false)
  setWinmessage("")
  itemArray.fill("empty",0,9)
}

const cheackIsWinner = () => {

  if (itemArray[0] === itemArray[1] && 
    itemArray[0] === itemArray[2]  && 
    itemArray[0] !=="empty") {
    setWinmessage(`${itemArray[0]} wins`)
}
 else if (itemArray[3] === itemArray[4] && 
  itemArray[3] === itemArray[5]  && 
  itemArray[3] !=="empty") {
  setWinmessage(`${itemArray[3]} wins`)
}
else if (itemArray[6] === itemArray[7] &&
   itemArray[6] === itemArray[8]  && 
   itemArray[6] !=="empty") {
  setWinmessage(`${itemArray[6]} wins`)
}

else if (itemArray[0] === itemArray[6] &&
  itemArray[0] === itemArray[3]  && 
  itemArray[0] !=="empty") {
 setWinmessage(`${itemArray[0]} wins`)
}

else if (itemArray[1] === itemArray[4] &&
  itemArray[1] === itemArray[7]  && 
  itemArray[1] !=="empty") {
 setWinmessage(`${itemArray[1]} wins`)
}
else if (itemArray[2] === itemArray[5] &&
  itemArray[2] === itemArray[8]  && 
  itemArray[2] !=="empty") {
 setWinmessage(`${itemArray[2]} wins`)
}
else if (itemArray[0] === itemArray[4] &&
  itemArray[0] === itemArray[8]  && 
  itemArray[0] !=="empty") {
 setWinmessage(`${itemArray[0]} wins`)
}

else if (itemArray[2] === itemArray[4] &&
  itemArray[2] === itemArray[6]  && 
  itemArray[2] !=="empty") {
 setWinmessage(`${itemArray[2]} wins`)
}


}

const changeItem = (itemNumber) => {

  
  if(winMessage) {
    return toast(winMessage, {type:"success"});
}
 if (itemArray[itemNumber] === "empty") {
  itemArray[itemNumber] = isCross ? "cross" : "circle"
  setIscross(!isCross)
 } 
 else {
   return toast("already filled" , {type:"error"})
 }
 cheackIsWinner();

}


  return (
   
       <Container className="p-5">
         <ToastContainer position="top-left"/>
         <Row>
          
           <Col md={6} className="offset-md-3">
             {winMessage ? (
               <div className="mb-2 mt-2"> 
              <h1 className="text-primary text-uppercase text-center"> {winMessage}</h1>
       <Button
       color="success"
       block
       onClick={reloadGame}
       > Reload the game 
         </Button>
</div>
             ) : (

              <h1 className="text-center text-warning">
              {isCross ? "cross" : "circle"} turns
               </h1>
             ) }
             <div className="grid">
               {itemArray.map( (item,index) => {
                 return <Card onClick = { () => {
                   changeItem(index)
                 }} >
                   <CardBody className="box">
                       <Icon name={item}/>
                   </CardBody>
                 </Card>
               })}
             </div>
           </Col>
         </Row>
       </Container>
      
  );
}

export default App;
