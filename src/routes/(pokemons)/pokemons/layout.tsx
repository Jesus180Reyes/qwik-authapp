import { Slot, component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <>
      <h1>Navbar</h1>
      <Slot />
    </>
  );
});
