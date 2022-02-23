# jqFuwatto

![ghost](https://github.com/yn1323/jqFuwatto/blob/d7024ed37fc0169c708b9bff65da5627244c9c21/assets/image/ghost.png "ghost")


## What is jqFuwatto?

jqFuwatto is jQuery plugin, enables to move element, images, or blocks moves "Fuwatto".  
"Fuwatto" is Japanese onomatopoeia of "things moves fluffy".  

[Example Page](https://yn1323.github.io/jqFuwatto/)

---

### How to use
1. Paste jqFuwatto Script
   ```html
     <head>
        // Use CND
        <script src="https://raw.githubusercontent.com/yn1323/jqFuwatto/master/dist/jqFuwatto.umd.js" defer></script>
        // Use downloaded module(https://github.com/yn1323/jqFuwatto/releases)
        <script src="https://raw.githubusercontent.com/yn1323/jqFuwatto/master/dist/jqFuwatto.umd.js" defer></script>
     </head>
   ```
2. Call jqFuwatto after DOM gets ready
   ```js
   $(someSelector).fuwatto();
   ```

### Options


⚠️ Height is required

---

## For Contributers
### Setup
1. Install
   ```sh
   git clone git@github.com:yn1323/jqFuwatto.git
   cd jqFuwatto
   npm i
   ```
2. Commands
   - Launch develop mode: `npm run dev`
   - Build document(GitHub Page): `npm run build:doc`
   - Bundle modules: `npm run build:bundle`
   - Build document & Bundle modules: `npm run build`

---

## License
MIT
