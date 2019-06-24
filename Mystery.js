import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'; 

function Mystery(){
    const fbooks=[
        {
            id:1,
            name:'Angels and Demons',
            author:'Dan Brown'
        },
        {
            id:2,
            name:'Map of Bones',
            author:'James Rollins '
        },
        {
            id:3,
            name:'The Hunt for Atlantis',
            author:'Andy McDermott '
        },
        {
            id:4,
            name:'Sword of God',
            author:'Chris Kuzneski'
        },
        {
            id:5,
            name:'The Messiah Secret',
            author:'James Becker,  Peter Stuart Smith'
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
export default Mystery