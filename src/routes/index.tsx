import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
 return (
  <main>
   <div class="content">
    <h1>BTC Price Tracker</h1>
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
