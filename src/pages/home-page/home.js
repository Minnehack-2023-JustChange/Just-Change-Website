import classes from "./home.module.css"
function HomePage() {
    return (
      <div>
        <div className={classes.mission}>Our mission is to empower individuals to make a positive impact on the world through their everyday purchases. By rounding up each transaction to the nearest dollar and donating the difference to charitable causes, we strive to create a ripple effect of generosity and kindness that benefits both our customers and those in need.</div>
        <div className={classes.partitions}>
          <div className={classes.partition_stats}>
            <h1 style={{marginLeft:20, marginTop:15}}> Donations</h1>
          </div>
          <div className={classes.partition_charities}>
            <h2 style ={{marginLeft:20, marginTop:15}} > Charities</h2>
          </div>
        </div>
      </div>
    );
}
  
export default HomePage;
  