import PropTypes from 'prop-types';
const Header = (props) =>{ //props->name,title
    return(
        <header>
            <h1>{props.title}</h1>   
        </header>
    );
    // {name},{name.title}, {title.title} , {props.title}
};
Header.defaultProps = {
    title:"Task Tracker",
};
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header;