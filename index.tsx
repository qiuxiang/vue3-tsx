import { createApp } from "vue";
import { Alert, Space } from "ant-design-vue";
import Bar from "./bar";

interface FooProps {
  text: string;
  onPressed: (value: number) => void;
}

const Foo = ({ text, onPressed }: FooProps) => (
  <p onClick={() => onPressed(Math.random())}>{text}</p>
);

const app = createApp({
  render() {
    return (
      <Space style={{ padding: "16px" }} direction="vertical">
        <Alert message="antd alert" showIcon />
        <Foo text="functional component" onPressed={(value) => console.log(value)} />
        <Bar title="defined component" onClick={(value) => console.log(value)} />
      </Space>
    );
  },
});

app.mount("main");
