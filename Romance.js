import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'; 

function Fantasy(){
    const fbooks=[
        {
            id:1,
            name:'The Pillars of the Earth',
            author:'Ken Follett'
        },
        {
            id:2,
            name:'',
            author:''
        },
        {
            id:3,
            name:'',
            author:''
        },
        {
            id:4,
            name:'',
            author:''
        },
        {
            id:5,
            name:'',
            author:''
        }
    ]
    const booklist=fbooks.map(book=>(
        <h1><NavLink to="/">{book.name}</NavLink><br />
        -by{book.author}</h1>
        ))
        
    return(
        <div>
            {booklist}
        </div>
    )
}
export default Fantasy