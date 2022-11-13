import { Input, Checkbox, Select, FormControl } from "@chakra-ui/react";

const CustomerInfo = ({ information, information1 }) => {
  return (
    <div style={{ margin: "30px" }}>
      <h2>Contact Information</h2>
      <FormControl>
        <Input
          width="70%"
          marginTop="20px"
          placeholder="Email"
          type="email"
          onChange={(e) => information(e.target.value)}
          required
        />
        <br></br>
        <Checkbox>Email me with news and offers</Checkbox>
        <h2 style={{ marginTop: "30px" }}>Shipping Information</h2>
        <Select placeholder="Select Country">
          <option value="option1">United States</option>
        </Select>
        <Input width="48%" marginTop="20px" placeholder="FIRST NAME" required />
        <Input
          width="48%"
          marginTop="20px"
          marginLeft="20px"
          placeholder="LAST NAME"
          required
        />
        <Input marginTop="20px" placeholder="ADDRESS" required />{" "}
        <Input
          marginTop="20px"
          placeholder="Appartment, Suite, etc.."
          required
        />
        <Input
          width="30%"
          marginRight="10px"
          marginTop="20px"
          placeholder="CITY"
          required
        />
        <Input
          width="30%"
          marginRight="10px"
          marginTop="20px"
          placeholder="STATE"
          required
        />
        <Input
          width="30%"
          marginTop="20px"
          type="number"
          placeholder="ZIP CODE"
          onChange={(e) => information1(e.target.value)}
          required
        />
        <Checkbox marginTop="20px">
          {" "}
          Save this information for next time
        </Checkbox>
      </FormControl>
    </div>
  );
};
export { CustomerInfo };
