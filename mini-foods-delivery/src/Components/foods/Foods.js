import { Fragment } from "react";

import AppIntroduction from "./AppIntroduction";
import AvailableFoodItems from "./AvailableFoodItems";

const Foods = (props) => {
  return (
    <Fragment>
      <AppIntroduction />
      <AvailableFoodItems />
    </Fragment>
  );
};

export default Foods;
