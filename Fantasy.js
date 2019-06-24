import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import images from './Myimages'; 
import f1 from './images/fantasy_book1.jpeg';

function Fantasy(){
    const fbooks=[
        {
            id:1,
            name:'A Game of Thrones',
            author:'George R.R. Martin'
        },
        {
            id:2,
            name:'The Name of the Wind',
            author:'Patrick Rothfuss'
        },
        {
            id:3,
            name:'The Final Empire',
            author:'Brandon Sanderson'
        },
        {
            id:4,
            name:'Eragon',
            author:'Christopher Paolini'
        },
        {
            id:5,
            name:'Wizard"s First Rule',
            author:'Terry Goodkind'
        }
    ]
    const booklist=fbooks.map(book=>(
        <h1><NavLink to="/">{book.name}</NavLink><br />
        -by{book.author}</h1>
        ))
    {/*const imageList=images.map(image=>
    <img src={image.src} id={image.id} alt={image.alt} />) */}   
    return(
        <div>
            <img src={f1} alt='A Game of Thrones' />
            {booklist}
        </div>
    )
}
export default Fantasy