import React, {useLayoutEffect} from "react";
import { SingleLocationComponent } from "../components";
import {SingleLocationContainer} from './styles'

const SingleLocation = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0)
      })
  return (
    <SingleLocationContainer>
      <SingleLocationComponent />
    </SingleLocationContainer>
  );
};

export default SingleLocation;
