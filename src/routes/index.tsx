import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.scss?inline";
import Row from "~/components/row/Row";

export default component$(() => {
 useStylesScoped$(styles);
 return (
  <main class="wrapper">
   <div class="content">
    <h1>BTC Price Tracker</h1>
    <div class="table">
     <Row />
     <Row />
     <Row />
    </div>
   </div>
  </main>
 );
});

export const head: DocumentHead = {
 title: "BTC Tracker",
 meta: [
  {
   name: "description",
   content: "Bitcoin price tracker",
  },
 ],
};
