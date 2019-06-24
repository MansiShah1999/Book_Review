import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

function Fiction(){
    const fbooks=[
        {
            id:1,
            img:'../images/fantasy_book1.jpeg',
            name:'The Pillars of the Earth',
            author:'Ken Follett'
        },
        {
            id:2,
            img:'images/fantasy_book1.jpeg',
            name:'Shaman',
            author:'Noah Gordon'
        },
        {
            id:3,
            img:'images/fantasy_book1.jpeg',
            name:'The Witch of Willow Hall',
            author:'Hester Fox '
        },
        {
            id:4,
            img:'images/fantasy_book1.jpeg',
            name:'The Reckoning',
            author:'John Grisham '
        },
        {
            id:5,
            img:'images/fantasy_book1.jpeg',
            name:'Elevation',
            author:'Stephen King '
        }
    ]
    const booklist=fbooks.map(book=>(
        <div>
        <img src={book.img}/>
        <h1><NavLink to="/">{book.name}</NavLink><br />
        -by{book.author}</h1>
        </div>
        ))
        
    return(
        <div>
            {booklist}
        </div>
    )
}
export default Fiction