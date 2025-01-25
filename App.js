import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1
          className="App-link3"
        >
          Welcome To home page
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a 
        className="App-link"
        href="http://www.sasi.ac.in"
        target="_blank"
          rel="noopener noreferrer"
          >
           For visiting sasi website
        </a>
        <button className="bootstrap-btn btn btn-primary" onClick={() => window.open("https://www.w3schools.com/bootstrap/")} >
          Bootstrap button
        </button>
        <hr className="custom"/>
        <h2 className="h2">TABLES</h2>
        <div className="container mt-3">
           <table className="table table-responsive table-bordered table-hover">
             <thead>
               <tr>
                <th scope="col" className="h2">S.NO</th>
                <th scope="col" className="h2">First Name</th> 
                <th scope="col" className="h2">Last Name</th> 
                <th scope="col" className="h2">Registration Number</th>
                </tr> 
             </thead> 
                <tbody>
                <tr>
                <th scope="row">1.</th>
                <td>MR.Shanmukh</td>
                <td>Sandwich company</td>
                <td>24K65A0208</td>
                </tr>
                <tr>
               <th scope="row">2.</th>
               <td>Hemanth</td>
               <td>Budodu</td>
               <td>24K65A0204</td> 
               </tr> 
               <tr>
               <th scope="row">3.</th>
               <td>Siddhu</td>
               <td>Sigma Uncle+++</td>
                <td>24K65A0205</td>
                </tr>
                <tr>
                <th scope="row">4.</th>
                <td>MR.Raju</td>
                <td>R.A.J.U....Kukkaju Kukkaju</td>
                <td>24K65A0206</td>
                </tr>
                <tr>
               <th scope="row">5.</th>
               <td>Suman</td>
               <td>Sare nanna...nanna...!</td>
               <td>24K65A0207</td> 
               </tr> 
               <tr>
               <th scope="row">6.</th>
               <td>Mr.tanish</td>
               <td>Crack Pichhodu</td>
                <td>24K65A0208</td>
                </tr>
                <tr>
               <th scope="row">7.</th>
               <td>MR.GG</td>
               <td>"AREY BONDU"</td>
                <td>24K65A0209</td>
                </tr>
                
              </tbody>
             </table>
             <form action="http://www.sasi.ac.in" className="mt-4 p-4 border rounded bg-light">
             <h1 className="h3" >Login</h1>
             <div className="form-group">
               <label htmlFor="user_name">Username</label>
               <input type="text" className="form-control" id="user_name" placeholder="Enter your username" />
             </div>
             <div className="form-group">
               <label htmlFor="password">Password</label>
               <input type="password" className="form-control" id="password" placeholder="Enter your password" />
             </div>
             <button type="submit" className="btn btn-primary mt-3">Submit</button>
             </form>
            </div>
      </header>
      
    </div>
  );
}

export default App;
