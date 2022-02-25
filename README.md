# jqFuwatto

![ghost](https://github.com/yn1323/jqFuwatto/blob/d7024ed37fc0169c708b9bff65da5627244c9c21/assets/image/ghost.png "ghost")


## What is jqFuwatto?

jqFuwatto is jQuery plugin, enables to move element, images, or blocks moves "Fuwatto".  
"Fuwatto" is Japanese onomatopoeia of "things moves fluffy".  

[Example Page](https://yn1323.github.io/jqFuwatto/)

![Gif](https://raw.githubusercontent.com/yn1323/jqFuwatto/master/assets/gif/jqFuwatto.gif)

## How to use
1. Load jQuery Script
1. Load CDN or downloaded jqFuwatto
   ```html
     <head>
        <script
            src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
            integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
            crossorigin="anonymous"
        ></script>
        <!-- Use CND -->
        <script src="https://cdn.jsdelivr.net/gh/yn1323/jqFuwatto@master/dist/jqFuwatto.umd.js" defer></script>
        <!-- Use downloaded module(https://github.com/yn1323/jqFuwatto/releases) -->
        <script src="jqFuwatto.umd.js" defer></script>
     </head>
   ```
2. Call jqFuwatto after DOM gets ready
   ```js
   $(someSelector).fuwatto();
   ```

## Options
```js
$(jQuerySelector).fuwatto({
   duration: 1000,
   slde: 'right-left',
   distance: 500,
   adjustment: {
      top: 0,
      left: 0
   }
});
```

| Key      | Type     | Default | Description                                                                                              | 
| -------- | -------- | ------- | -------------------------------------------------------------------------------------------------------- | 
| duration | `number` | 2000    | Slide, show duration(ms)                                                                                 | 
| side     | `string` | ''      | Way to slide.<br>'left-right', 'right-left', 'top-bottom', 'bottom-top' are accepted.<br>'' won't slide. | 
| distance | `number` | 500     | Distance to slide the element.(px)                                                                       | 
| adjustment.top | `number` | 0     | Use manual adjustment when slidein image shift from original.(px)                                                                       | 
| adjustment.left | `number` | 0     | Use manual adjustment when slidein image shift from original.(px)                                                                       | 

⚠️ If using slide option, element should have height & width.(Especially for image)

---

## For Contributers
### Setup
1. Install
   ```sh
   git clone git@github.com:yn1323/jqFuwatto.git
   cd jqFuwatto
   npm install
   ```
2. Commands
   - Launch develop mode: `npm run dev`
   - Build document(GitHub Page): `npm run build:doc`
   - Bundle modules: `npm run build:bundle`
   - Build document & Bundle modules: `npm run build`
3. Static html, js test
   - Open statc.html with Live Server

---

## Support
### Checked jQuery Version
- 3.6.0
- 2.2.4
- 1.12.4

Other versions may work properly.

### browsers
- Chrome ✅
- IE ❌
- Firefox ❓
- Safari ❓

---

## License
MIT
