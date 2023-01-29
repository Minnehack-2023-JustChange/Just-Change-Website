import { Link } from "react-router-dom";
import classes from "./account.module.css";
import Button from "./Button";

function AccountPage() {
    return (<div>
      <h1>Account</h1>
        <h2>Choose how your change is divided between your chosen charities!</h2>
        
          <div className={classes.inputbox}>
        
            Charity 1 : <input type="text" id="Charity1" name="name" placeholder = "Percentage value 0 to 100" pattern="[0-9]{0,3}" required maxlength="3"></input> % <span></span>
            <p></p>
            Charity 2 : <input type="text" id="Charity2" name="name" placeholder = "Percentage value 0 to 100" pattern="[0-9]{0,3}" required maxlength="3"></input> % <span></span>
            <p></p>
            Charity 3 : <input type="text" id="Charity3" name="name" placeholder = "Percentage value 0 to 100" pattern="[0-9]{0,3}" required maxlength="3"></input> % <span></span>
            <p></p>
            Charity 4 : <input type="text" id="Charity4" name="name" placeholder = "Percentage value 0 to 100" pattern="[0-9]{0,3}" required maxlength="3"></input> % <span></span>
            <p></p>
            Charity 5 : <input type="text" id="Charity5" name="name" placeholder = "Percentage value 0 to 100" pattern="[0-9]{0,3}" required maxlength="3"></input> % <span></span>
            
            <p>Click the "Submit" button to save your preferences.</p>
              <div>
                <Button>Submit</Button>
              </div>

              

          </div>
        </div>
        
    );

    
}
  
export default AccountPage;
  