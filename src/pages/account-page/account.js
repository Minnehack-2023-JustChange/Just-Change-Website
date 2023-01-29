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
          <h2 className={classes.leftmargin2}>Sign in to Plaid</h2>
            <div className={classes.leftmargin2}>
              <div>
                <button>Sign In</button>
              </div>
              </div>

              <br></br>
          <h2 className={classes.leftmargin2}>Pause Donations</h2>
            <div className={classes.leftmargin2}>
              <div>
                <button>Sign In</button>
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
              </div>

              <br></br>
          <h2 className={classes.leftmargin2}>Download 1040 Document</h2>
            <div className={classes.leftmargin2}>
              <div>
                <button>Sign In</button>
              </div>
              </div>
          
        </div>

        


        
    );

    
}
  
export default AccountPage;
  