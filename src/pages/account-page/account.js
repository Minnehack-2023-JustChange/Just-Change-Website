import { Link } from "react-router-dom";
import classes from "./account.module.css";
import Button from "./Button";

function AccountPage() {
    return (<div>
      
      <h1 className={classes.leftmargin1}>Account</h1>
        <h2 className={classes.leftmargin2}>Choose how your change is divided between your chosen charities!</h2>
        
          <div className={classes.leftmargin2}>
            
            Charity 1 : <input type="number" id="Charity1" name="name" placeholder="0" min="0" max="100" required ></input> % <span></span>
            <p></p>
            Charity 2 : <input type="number" id="Charity2" name="name" placeholder="0" min="0" max="100" required ></input> % <span></span>
            <p></p>
            Charity 3 : <input type="number" id="Charity3" name="name" placeholder="0" min="0" max="100" required ></input> % <span></span>
            <p></p>
            Charity 4 : <input type="number" id="Charity4" name="name" placeholder="0" min="0" max="100" required ></input> % <span></span>
            <p></p>
            Charity 5 : <input type="number" id="Charity5" name="name" placeholder="0" min="0" max="100" required ></input> % <span></span>
            
            <p>Click the "Submit" button to save your preferences.</p>
              <div>
                <Button>Submit</Button>
              </div>

          

          </div>
          <br></br>
          <h2 className={classes.leftmargin2}>Integrate with Plaid <button style ={{marginLeft:12}}>Sign In</button></h2>
          <br></br>
          <h2 className={classes.leftmargin2}>Donations Active <label class="switch" style ={{marginLeft:12}}>
                  <input type="checkbox"></input>
                </label></h2>
          <br></br>
          <h2 className={classes.leftmargin2}>Download 1040 Document <button style ={{marginLeft:12}}>Download</button></h2>
          
        </div>

        
    );

    
}
  
export default AccountPage;
  