import react from 'react'

const RoundedButton = (props) => {
    const { text, backgroundColor='#344e5f', color='white', padding='18px 45px', onClick={} } = props;
    return (
        <button className="button" onClick={onClick}>
          {text}
          <style jsx>{`
        
            background-color: ${backgroundColor};
            border: none;
            padding: ${padding};
            text-decoration: none;
            font-size: 16px;
            border-radius: 26px;
            color: ${color};
            margin: 3px;     
            cursor:pointer;   
        `
        }  </style>
        </button>
        
    );

}

export default RoundedButton