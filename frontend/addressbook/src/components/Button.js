import React from 'react';

function Button({className , text, onclick,id}) {
    return (  
          <button className={className} onClick={onclick} id={id}>{text}
          </button>
    );
}

export default Button;