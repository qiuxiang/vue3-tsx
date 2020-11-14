import { createApp, Fragment, h } from "@vue/runtime-dom";
import CustomComponent from "./custom-component";

// @ts-ignore
window["h"] = h;
// @ts-ignore
window["Fragment"] = Fragment;

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
        <CustomComponent title="define component" onClick={(value) => console.log(value)} />
      </>
    );
  },
}).mount("main");
