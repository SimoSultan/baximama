import { Card, CardTitle, Text } from "../core";
import { OrderButton } from "./OrderButton";

export const Order = () => {
  return (
    <Card className="bg-white w-full">
      <CardTitle>Order</CardTitle>
      <Text>
        Tempor exercitation voluptate minim enim laborum. Et officia fugiat
        veniam nulla excepteur excepteur sint voluptate voluptate deserunt ipsum
        non. Elit ipsum sunt dolor non fugiat elit elit aliquip aute do magna
        sit do enim. Ut laborum esse enim pariatur duis exercitation esse
        labore. Deserunt incididunt dolore incididunt aute sint culpa est
        excepteur nostrud. Ea consequat nulla ipsum consectetur. Magna
        consectetur labore deserunt nostrud non officia enim culpa minim.
      </Text>
      <OrderButton className="flex justify-center items-center mx-auto" />
    </Card>
  );
};
