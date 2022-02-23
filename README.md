# jqFuwatto

![ghost](https://github.com/yn1323/jqFuwatto/blob/d7024ed37fc0169c708b9bff65da5627244c9c21/assets/image/ghost.png "ghost")


## What is jqFuwatto?

jqFuwatto is jQuery plugin, enables to move element, images, or blocks moves "Fuwatto".  
"Fuwatto" is Japanese onomatopoeia of "things moves fluffy".  

[Example Page](https://yn1323.github.io/jqFuwatto/)

![Gif](https://raw.githubusercontent.com/yn1323/jqFuwatto/master/assets/gif/jqFuwatto.gif)

---

### How to use
1. Load CDN or downloaded jqFuwatto
   ```html
     <head>
        <!-- Use CND -->
        <script src="https://raw.githubusercontent.com/yn1323/jqFuwatto/master/dist/jqFuwatto.umd.js" defer></script>
        <!-- Use downloaded module(https://github.com/yn1323/jqFuwatto/releases) -->
        <script src="jqFuwatto.umd.js" defer></script>
     </head>
   ```
2. Call jqFuwatto after DOM gets ready
   ```js
   $(someSelector).fuwatto();
   ```

### Options
```js
$(someSelector).fuwatto({
   duration: 1000,
   slde: 'right-left',
   distance: 500,
});
```

| Key      | Type     | Default | Description                                                                                              | 
| -------- | -------- | ------- | -------------------------------------------------------------------------------------------------------- | 
| duration | `number` | 2000    | Slide, show duration(ms)                                                                                 | 
| side     | `string` | ''      | Way to slide.<br>'left-right', 'right-left', 'top-bottom', 'bottom-top' are accepted.<br>'' won't slide. | 
| distance | `number` | 500     | Distance to slide the element.(px)                                                                       | 

⚠️ If using slide option, elemnt shoud have height & width.

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
