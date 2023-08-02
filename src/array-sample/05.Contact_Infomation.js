// 과제1번 
import React from "react";

function ContactInformation({contacts}){
    return(
        <div>
            {contacts.name}
            {contacts.phonenum}
            {contacts.email}
            {contacts.address}
        </div>
    );
}

function App(){
    const Contacts = [
        {
            name: 'kim',
            phonenum: '010-0000-0000',
            email : 'kim@gmail.com',
            address : 'seoul'
        },
        {
            name: 'lee',
            phonenum: '010-1111-1111',
            email : 'lee@gmail.com',
            address : 'seoul'

        },
        {
            name: 'choi',
            phonenum: '010-2222-2222',
            email : 'choi@gmail.com',
            address : 'seoul'

        }

    ];

    return(
        <div>
            
            < ContactInformation contacts = {Contacts[0]} />
            < ContactInformation contacts = {Contacts[1]} />
            < ContactInformation contacts = {Contacts[2]} />
        </div>
    );
}

export default App;