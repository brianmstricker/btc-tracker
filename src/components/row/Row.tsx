import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.scss?inline";

export default component$(() => {
 useStylesScoped$(styles);
 return (
  <div class="outer">
   <div class="leftSide">
    <div class="image" />
    <h2 class="name">Provider</h2>
   </div>
  </div>
 );
});
