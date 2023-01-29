import classes from "./home.module.css"
function HomePage() {
    return (
      <div>
        <div className={classes.mission}>Our mission is to empower individuals to make a positive impact on the world through their everyday purchases. By rounding up each transaction to the nearest dollar and donating the difference to charitable causes, we strive to create a ripple effect of generosity and kindness that benefits both our customers and those in need.</div>
        <div className={classes.partitions}>
          <span className={classes.partition_stats}>this is where we put our stats</span><span className={classes.partition_charities}>this is where we put our charities</span>
        </div>
      </div>
    );
}
  
export default HomePage;
  