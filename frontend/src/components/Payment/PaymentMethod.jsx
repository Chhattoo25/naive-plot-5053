import { Input, Radio } from "@chakra-ui/react";

const PaymentMethod = ({ info, info1 }) => {
  return (
    <div style={{ margin: "30px" }}>
      <h2>Contact Information</h2>
      <div style={{ border: "1px solid", marginTop: "30px", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Contact</h2>
          <h2>{info}</h2>
        </div>

        <hr style={{ margin: "10px" }}></hr>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Ship to</h2>
          <h2>{info1}</h2>
        </div>
      </div>
      <h2 style={{ marginTop: "30px" }}>Payment method</h2>
      <p style={{ fontSize: "10px" }}>
        All transactions are secure and encrypted.
      </p>
      <div style={{ border: "1px solid", marginTop: "30px", padding: "20px" }}>
        <Radio value="1">CREDIT CARD</Radio>
        <div style={{ marginBottom: "20px" }}>
          <Input placeholder="Card Number" marginTop="20px" />
          <Input placeholder="Name On Card" marginTop="20px" />
          <Input
            width="45%"
            marginRight="30px"
            placeholder="Expiration Date (MM/YY)"
            marginTop="20px"
          />
          <Input width="45%" placeholder="CVV" marginTop="20px" />
        </div>
        <Radio value="2">Pay Pal</Radio>
      </div>
    </div>
  );
};
export { PaymentMethod };
