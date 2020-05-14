import React from "react";
import { Statistic, Icon } from "semantic-ui-react";

const pinDetails = ({ icon, label }) => {
  return (
    <Statistic horizontal size="tiny">
      <Statistic.Value>
        <Icon name={icon} />
      </Statistic.Value>
      <Statistic.Label>{label}</Statistic.Label>
    </Statistic>
  );
};

export default pinDetails;
