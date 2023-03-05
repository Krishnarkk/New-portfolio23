import React from 'react'
import styled from 'styled-components'
const Section=styled.div`
 height:100vh;
 scroll-snap-align:center;
`
const Container=styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  gap:50px;
  height:100%;
`
const Left=styled.div`
   flex:1;
   display:flex;
   justify-content:flex-end;
   align-items:center;
`
const Form=styled.div`
   width:500px;
   display:flex;
   flex-direction:column;

   gap:25px;
`
const Title=styled.h1`
  font-weight:bolder;

`
const Input=styled.input`
 padding:20px;
 color:#e8e6e6;
 border:none;
 border-radius:5px;


`
const TextArea=styled.textarea`
 padding:20px;
`
const Button=styled.button`
  background-color:#da4ea2;
  color:white;
  border:none;
  border-radius:10px;
  font-weight:bold;
  cursor:pointer;
  padding:20px;
`
const Right=styled.div`
  flex:1;
`
const handleSubmit=(e)=>{
  e.preventDefault()
}

const Contact = () => {
  return (
    <Section>
       <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>
             Contact Us
            </Title>
            <Input placeholder='name'/>         
            <Input placeholder='email'/>     
            <TextArea placeholder='write your message' row={10}/>         
             <Button type="submit">Submit</Button>
             </Form>
        </Left>
        <Right></Right>
       </Container>
    </Section>
  )
}

export default Contact