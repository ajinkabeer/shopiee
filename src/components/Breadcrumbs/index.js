import React from "react";
import { Breadcrumb } from "semantic-ui-react";

const Breadcrumbs = ({ home, name, ...props }) => (
  <Breadcrumb size="small">
    <Breadcrumb.Section onClick={() => props.history.push("/")} link>
      {home}
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon="right chevron" />
    <Breadcrumb.Section active>{name}</Breadcrumb.Section>
  </Breadcrumb>
);

export default Breadcrumbs;
