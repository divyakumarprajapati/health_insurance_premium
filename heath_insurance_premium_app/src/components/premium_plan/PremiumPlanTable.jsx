import React from "react";
import { Table, Button } from "react-bootstrap";

const PremiumPlanTable = (props) => {
  const rowData = [
    { name: "Base Rate", key: "base_rate" },
    {
      name: "Floater Discount",
      key: "floater_discount_percentage",
      addSuffix: "%",
    },
    { name: "Discounted Rate", key: "discounted_rate" },
  ];
  return (
    <div>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>#</th>
            {props.premium.membersPremium?.map((member, index) => (
              <th key={index}>{member.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              {props.premium.membersPremium?.map((member, index) => (
                <th key={index}>
                  {member[row.key]} {row.addSuffix}
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{props.premium.total}</td>
            <td>
              <Button variant="link" size="sm">
                Add to cart
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PremiumPlanTable;
