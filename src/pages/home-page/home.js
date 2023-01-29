import classes from "./home.module.css"
function HomePage() {
    return (
      <div>
        <div className={classes.mission}>Our mission is to empower individuals to make a positive impact on the world through their everyday purchases. By rounding up each transaction to the nearest dollar and donating the difference to charitable causes, we strive to create a ripple effect of generosity and kindness that benefits both our customers and those in need.</div>
        <div className={classes.partitions}>
          <div className={classes.partition_stats}>
            <h1 style={{marginLeft:20, marginTop:15, color:"#006f64"}}> Donations</h1>
            <img style ={{marginLeft:20}} src="JustChange_graph.png" height="420px"></img>
            <h1 style={{marginLeft:20, marginTop:25, color:"#006f64"}}> Total Donated </h1>
            <img style={{marginLeft:20, marginTop:0}} src="JustChange_yearly.jpg" height="700px"></img>
          </div>
          <div className={classes.partition_charities}>
            <h2 style ={{marginLeft:20, marginTop:15, color:"white"}} > Charities</h2>
            <ul style ={{color:"white", fontSize: 25}}>
              <div>
                St. Jude: $$$
              </div>
              <div>
                Mayo Clinic: $$
              </div>
              <div>
                Hope Kids: $$
              </div>
              <div>
                Red Cross: $
              </div>
              <div>
                Product RED: $
              </div>

              
            </ul>
          </div>
        </div>
      </div>
    );
}
  
export default HomePage;
  