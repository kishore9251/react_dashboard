import React from "react";



 

export const Header = () => {

         const isLoggedIn = false;
         const greeting = isLoggedIn ? <p>welcome back!</p> : <p>please login.</p>

         const items = ['apple', 'orange', 'mango','pomogranate','hello'];
  return (
    <>
    <div>
    <h1 className="headerone">ADMIN DASHBOARD</h1>

    <p className="para">Happy to learn with you</p>

    <p>20+20={20+20}</p>

    {greeting}

    <ol>
        {items.map((item,index)=> (<li key={index}>{item}</li>))}
    </ol>

    </div>
    </>
    
  );
};
