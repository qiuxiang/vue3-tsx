import { createApp } from "vue";
import Bar from "./bar";

interface FooProps {
  text: string;
  onPressed: (value: number) => void;
}

const Foo = ({ text, onPressed }: FooProps) => (
  <p onClick={() => onPressed(Math.random())}>{text}</p>
);

createApp({
  render() {
    return (
      <>
        <Foo text="functional component" onPressed={(value) => console.log(value)} />
        <Bar title="defined component" onClick={(value) => console.log(value)} />
      </>
    );
  },
}).mount("main");
