const Header = (props) =>{ 
    return(
        <header>
            <h1>REGISTRATION COMPONENT</h1>
            <h1>Name:- {props.Name}</h1> 
            <h1>Age:- {props.Age}</h1>
            <h1>Address:- {props.Address}</h1>
            <h1>Username:- {props.Username}</h1>
            <h1>Password:- {props.Password}</h1> 
        </header>
    );
};
export default Header;