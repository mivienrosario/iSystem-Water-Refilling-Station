
const Button = (props) => {
     //const [btnText, setBtnText] = useState(null);
     //const changeText = (text) => setBtnText(text);

     const myClass = `button ${props.type}`;

     return (
          <button className={myClass} onClick={props.handleClick}>
               {props.children}
          </button>
     )
}

export default Button
