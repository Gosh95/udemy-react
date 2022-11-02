import classes from "./AppIntroduction.module.css";

const FoodsSummary = () => {
  return (
    <div className={classes.summary}>
      <header className={classes["summary-header"]}>
        <h2>Delicious Food, Delivered To You</h2>
      </header>
      <div className={classes["summary-body"]}>
        <p>
          Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at
          home.
        </p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </div>
    </div>
  );
};

export default FoodsSummary;
