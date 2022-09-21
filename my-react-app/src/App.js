// import logo from './logo.svg';
// import './App.css';
// const name="Anurita";
// const x=false;
// function App() {
//   return (
//     <div className="Container">
//       <h1>{name}</h1>      
//       <h2>{55+6}</h2>
//       <h2>{ x ? "Yes":"No" }</h2>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import Header from './component/Header';
// function App() {
//   return(
//     <div className='container'>
//       <Header title='Arpit Nashedi'/>
//     </div>
//   )
// }
// export default App;
// import './App.css';
// import Header from './component/Header';
// function App() {
//   return(
//     <div className='container'>
//       <Header title = {2}/>
//     </div>
//   )
// }
// export default App;

import './App.css';
import Header from './component/Registrationcomponent';
import H1 from './component/logincomponent';
import W1 from './component/Welcomecomponent';
function App() {
  return(
    <div className='container'>
      <Header Name = "Anurita" Age = "21"  Address = "Chitkara"  Username = "Rathore" Password = "1234"/>
      <H1 Username = "Rathore" Password = "1234"/>
      <W1 title ='Welcome User' ></W1>
    </div>
  )
}
export default App;