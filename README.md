# jejeui

A CLI for installing [jeje/ui](https://jeje-ui.vercel.app) components into your project.

## Usage
```bash
npx jejeui add <component>
```

## Components

| Component | Command |
|-----------|---------|
| Image Uploader | `npx jejeui add image-uploader` |
| Virtualized Dropdown | `npx jejeui add virtualized-dropdown` |
| Autocomplete | `npx jejeui add autocomplete` |
| Data Grid | `npx jejeui add data-grid` |

## Requirements

- A Next.js project with [shadcn/ui](https://ui.shadcn.com) already initialized
- Node.js 18+

## How it works

`jejeui` is a thin wrapper around the shadcn CLI. Running `npx jejeui add <component>` resolves the component's registry URL and delegates to:
```bash
npx shadcn@latest add <registry-url>
```

This installs the component files, shadcn dependencies, and npm dependencies automatically.

## Example
```bash
npx jejeui add data-grid
```

Installs the Data Grid component along with its dependencies (`react-number-format`, `lucide-react`) and shadcn primitives (`table`, `button`, `input`, `select`, `checkbox`, `dropdown-menu`, `virtualized-dropdown`).

## Links

- [Documentation](https://jeje-ui.vercel.app/docs/components)
- [GitHub](https://github.com/MelAlejandrino/jeje-ui)