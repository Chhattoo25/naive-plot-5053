import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

const Shipping = ({ info, info1, radio }) => {
  const [value, setValue] = useState(1);
  radio(value);
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
      <h2 style={{ marginTop: "30px" }}>Shipping method</h2>
      <p style={{ fontSize: "10px" }}>
        JOIN OUR LOYALTY PROGRAM FOR FREE SHIPPING
      </p>
      <RadioGroup defaultValue="1" onChange={setValue} value={value}>
        <div
          style={{ border: "1px solid", marginTop: "30px", padding: "20px" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Radio value="1">Ground Shipping (3-7 days)</Radio>
            {/* <Radio value='2'>Second</Radio> */}
            <h2>Free</h2>
          </div>

          <hr style={{ margin: "10px" }}></hr>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Radio value="2">
              {" "}
              Overnight Shipping (Excludes PO Box or APO/FPO)
            </Radio>

            <h2>$100</h2>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};
export { Shipping };
