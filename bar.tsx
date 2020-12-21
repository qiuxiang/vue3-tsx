import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    title: { type: String, require: true },
    onClick: { type: Function as PropType<(value: number) => void> },
  },
  setup(props) {
    const text = ref<string>("");
    return () => {
      const { title, onClick } = props;
      return (
        <>
          <input
            value={text.value}
            onInput={({ target }) => {
              text.value = (target as HTMLInputElement).value;
            }}
          />
          <p class="test-class" onClick={() => onClick?.call(this, Math.random())}>
            {title} {text.value}
          </p>
        </>
      );
    };
  },
});
