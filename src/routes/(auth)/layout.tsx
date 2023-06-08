import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "../../global.css?inline";
export default component$(() => {
  useStylesScoped$(style);
  return (
    <>
      <Slot />
    </>
  );
});
