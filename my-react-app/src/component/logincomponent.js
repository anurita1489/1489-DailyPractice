const H1 = (props) =>{ 
    return(
        <header>
            <h1>LOGIN COMPONENT</h1>
            <h1>Username:- {props.Username}</h1>
            <h1>Password:- {props.Password}</h1>  
        </header>
    );
};
export default H1;