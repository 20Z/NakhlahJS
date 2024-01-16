// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_slug_ from "./routes/[...slug].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $about from "./routes/about.tsx";
import * as $api_test_finsh from "./routes/api/test/finsh.ts";
import * as $group_slug_ from "./routes/group/[slug].tsx";
import * as $index from "./routes/index.tsx";
import * as $Editor from "./islands/Editor.tsx";
import * as $ThemeToggle from "./islands/ThemeToggle.tsx";
import * as $Toast from "./islands/Toast.tsx";
import * as $signals_store from "./islands/signals/store.ts";
import * as $useToast from "./islands/useToast.ts";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[...slug].tsx": $_slug_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/about.tsx": $about,
    "./routes/api/test/finsh.ts": $api_test_finsh,
    "./routes/group/[slug].tsx": $group_slug_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Editor.tsx": $Editor,
    "./islands/ThemeToggle.tsx": $ThemeToggle,
    "./islands/Toast.tsx": $Toast,
    "./islands/signals/store.ts": $signals_store,
    "./islands/useToast.ts": $useToast,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
