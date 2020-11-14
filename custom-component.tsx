import { defineComponent, PropType } from "@vue/runtime-dom";

export default defineComponent({
  props: {
    title: { type: String },
    onClick: { type: Function as PropType<(value: number) => unknown> },
  },
  setup(props) {
    return () => {
      const { title, onClick } = props;
      return (
        <p class="test-class" onClick={() => onClick?.call(this, Math.random())}>
          {title}
        </p>
      );
    };
  },
});
