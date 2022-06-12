import React from 'react'
import { Button, Container, ListGroup,Carousel } from 'react-bootstrap'
import { useState } from 'react';
import {LinkContainer} from 'react-router-bootstrap'

const NeueStarkmacher = (props) => {
	const [neueStarkmacherListe, setNeueStarkmacherListe] = useState([
    {
        label:"Reframing",
        link:"/starkmacher/reframing",
        description:"Beim Reframing geht es darum deine eigene Einschätzung der Situation zu überprüfen und gegebenenfalls. zu einer anderen, für dich angenehmeren Interpretation zu kommen.",
        logo:"reframing.png",
        color:"#f2c7d0"
    },
    {
        label:"Situationskontrolle",
        link:"/starkmacher/...",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        logo:"situationskontrolle.png",
        color:"#cae2e2"
    }      
        ]);

    return (
        <Container>
        <LinkContainer to="/starkmacher"><Button variant="secondary">Zurück zu den Starkmachern</Button></LinkContainer>
            <br/><br/>
            <b>Welchen neuen Starkmacher möchtest du heute ausprobieren?</b>
            <br/>
            <Carousel>
            {neueStarkmacherListe.map((item,key)=>                
                <Carousel.Item key={item.key}>
                	<Carousel.Caption  style={{backgroundColor:item.color,position:"static",color:"black"}}>
                    <div style={{width:"80%",margin:"auto",marginBottom:"2em"}}>
                        <h2>{item.label}</h2>
                        <b>{item.description}</b>
                        <br/><br/>
                        <div><img style={{maxWidth:"100%"}} src="video.png"/></div>  
                        <br/>
                        <LinkContainer to={item.link}><Button>Let´s go!</Button></LinkContainer>                
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>              
            )}
        	</Carousel>
        </Container>
    )
}

export default NeueStarkmacher

