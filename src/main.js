import "@mdi/font/css/materialdesignicons.css";
import "bootstrap";
import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import { registerGlobalComponents } from "./registerGlobalComponents";
import { router } from "./router";

import { plugin, defaultConfig } from "@formkit/vue";

const root = createApp(App);
registerGlobalComponents(root);

root.use(router).use(plugin, defaultConfig).mount("#app");
