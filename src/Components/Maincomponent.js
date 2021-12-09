import React, { useState } from 'react';
import CardComp from './CardComp';



function Maincomponent({Users,deleteUser}) {
  return (
    <div className="maincomp">
       {
           Users.map((User) => (
             
                <CardComp User={User} deleteUser={deleteUser}/>
           ))
       }
    </div>
  );
}

export default Maincomponent;
