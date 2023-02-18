# Project name: svelte-konva

> Please refer to `<root>/package.json` for relevant information such as _version, deps, etc._

### Motivation

> Konva.js is Canvas API framework, which already has wrappers for React, Vue, but there is no (_proper?_) Svelte wrapper for Konva.js _at least at the time of publishing this README.md_ . This is it – it's time Svelte for Konva to manifest : just like React, Vue, we can (AND) will take advantage of Svelte for its simplicity, built-in state management with svelte/store, etc.; 

> Please keep in mind, I am starting the project as solo initially, but may accept any PR request in the future .

### A manual linking recipe :

> In order to import it through local npm registry (_due to package incompleteness, this is not yet publicly available on_ [remote npm registry](https://www.npmjs.com/)]), please follow the procedure :

**BARE IN MIND** this is minimum `./vite.config.js` requirement, mainly based on this [documentation](https://vitejs.dev/guide/build.html#library-mode)

```js
// we consider this file is located at <root>/ [aka process.cwd()]
...
  build: {
    /** @param {outDir} is optional, default is <root>/dist */
    outDir: resolve(__dirname, 'src/svelte-konva-linked/'), 
    lib: {
      /** @param {entry} it consider that 'src/exports_main.js' contains minimum exports to make sure it would work in Svelte (Svelte is significantly fussy at it)  */
      entry: resolve(__dirname, 'src/exports_main.js'),
      formats: ['es'],
      fileName: 'index'
    }
  }
...
```

<br>


1.1 consider the provided build object configuration depicted in this README.md file just above (also can be found at `<root>/vite.config.js` directory), run `npm run build` or `npx vite bundle` to bundle files to `src/svelte-konva-linked` ; <br>
1.2 copy `_package.json` to `src/svelte-konva-linked` via your OS-specific GUI | command-line (Bash) : `cp _package.json src/svelte-konva-linked` ; <br>
2.1 navigate directory via File Explorer or relevant on your OS-specific GUI | command-line (Bash) : `cd src/svelte-konva-linked` i.e. the directory you just have moved the `_package.json` to ; <br>
2.2 rename  `./_package.json` to `./package.json` within the current directory | command-line (Bash) : `mv ./_package.json ./package.json` ; <br>
3.1 run the command `npm link` – _keep it mind there is no GUI equivalent to this specific step_ ! : the command creates a symlink (aka shortcut in Windows land) putting it at directory of `cd $(npm root -g)`; <br>
3.2 run the command `npm link svelte-konva-local` – _keep it mind there is no GUI equivalent to this specific step_ ! : the command creates (binds) the recently created symlink at `cd $(npm root -g)` by taking it out and putting to the project's `<root>/node_modules` directory as if it would be installed via `npm i svelte-konva-local` ; <br>
3.3 this branch provides you with src/lib/**imports_App.svelte** that if properly examined contains, the following: <br>

```js
    /** @SUMMARY 
     * thanks to steps followed above we can import it as if downloaded library (refer to ^1 a few lines below within this snippet) : the 'svelte-konva-local' could be just 'svelte-konva', but I deliberately did suffix with -local to emphasize the manual linkage (import from) within local npm registry !
    */
    import Svelte_Konva from 'svelte-konva-local'; /* ^1 */

    const {SvelteKonva, ComponentLinker} = Svelte_Konva;

    const {
    
        SvelteKonva〵Essentials: { kStage, kLayer, kGroup, }, 
        SvelteKonva〵Primitives: { kText } 
    
    } = SvelteKonva;
```

> Hopefully, it works just fine, otherwise please raise an issue on this repo . Cheers !

---

Regards,
Lukas Gaucas (github@projektorius96)