#!/usr/bin/env node
import { program } from "commander";
import { execa } from "execa";

const REGISTRY_BASE = "https://jeje-ui.vercel.app/r";

const components = {
  autocomplete: `${REGISTRY_BASE}/autocomplete.json`,
  "image-uploader": `${REGISTRY_BASE}/image-uploader.json`,
  "virtualized-dropdown": `${REGISTRY_BASE}/virtualized-dropdown.json`,
};

program.name("jejeui").description("jeje/ui component CLI").version("1.0.0");

program
  .command("add <component>")
  .description("Add a jeje/ui component to your project")
  .action(async (component) => {
    const url = components[component];

    if (!url) {
      console.error(`Unknown component: "${component}"`);
      console.log(`\nAvailable components:`);
      Object.keys(components).forEach((c) => console.log(`  - ${c}`));
      process.exit(1);
    }

    console.log(`Installing ${component}...`);
    await execa("npx", ["shadcn@latest", "add", url], { stdio: "inherit" });
  });

program.parse();
