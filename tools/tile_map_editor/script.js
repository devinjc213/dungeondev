window.onload = () => {
  const canvas = document.getElementsByClassName('editor')[0];
  const ctx = canvas.getContext('2d');
  const tilesetContainer = document.querySelector('.tileset-container');
  const tilesetSelection = document.querySelector('.tileset-img-selection');
  const tilesetImage = document.querySelector('.tileset-img');
  const layer0Btn = document.querySelector('#layer-0');
  const layer1Btn = document.querySelector('#layer-1');
  const layer2Btn = document.querySelector('#layer-2');
  const collisionLayerBtn = document.querySelector('#collision-layer');
  const clearCanvasBtn = document.querySelector('#clear-canvas');
  const exportPNGBtn = document.querySelector('#export-png');
  const exportJSONBtn = document.querySelector('#export-json');
  const exportCollisionBtn = document.querySelector('#export-collision-json');

  //export issue fix
  tilesetImage.crossOrigin = 'anonymous';

  let isMouseDown = false;
  let selection = [0, 0];
  let currentLayer = 0;
  let isCollisionLayer = false;
  let layers = [{}];
  let collisionLayer = [];

  let cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 }
  let cameraZoom = 1
  let MAX_ZOOM = 5
  let MIN_ZOOM = 0.1
  let SCROLL_SENSITIVITY = 0.0005



  //Utility functions
  function getCoords(e) {
    const { x, y } = e.target.getBoundingClientRect();
    const mouseX = e.clientX - x;
    const mouseY = e.clientY - y;
    return [Math.floor(mouseX / 32), Math.floor(mouseY / 32)];
  }

  function clearCanvas() {
    layers = [{}];
    collisionLayer = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function setLayer(newLayer) {
    //turn off collision layer if it was on
    isCollisionLayer = false;

    //Update the layer
    currentLayer = newLayer;
  }

  function adjustZoom(zoomAmount) {
    if (!isMouseDown)
    {
      cameraZoom += zoomAmount

      cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
      cameraZoom = Math.max( cameraZoom, MIN_ZOOM )
    }
  }

  function exportPng() {
    const image = new Image();
    image.src = canvas.toDataURL('image/png');

    const w = window.open('');
    w.document.write(image.outerHTML);
  }

  function exportJson(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }



  //Event listeners
  canvas.addEventListener('mousedown', () => {
    isMouseDown = true;
  });
  canvas.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  canvas.addEventListener("mouseleave", () => {
    isMouseDown = false;
  });
  canvas.addEventListener("mousedown", addTile);
  canvas.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
      addTile(event);
    }
  });
  canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY));

  layer0Btn.addEventListener('click', () => setLayer(0));
  layer1Btn.addEventListener('click', () => setLayer(1));
  layer2Btn.addEventListener('click', () => setLayer(2));
  collisionLayerBtn.addEventListener('click', () => isCollisionLayer = true);
  clearCanvasBtn.addEventListener('click', () => clearCanvas());
  exportPNGBtn.addEventListener('click', () => exportPng());
  exportJSONBtn.addEventListener('click', () => exportJson('map.json', JSON.stringify(layers)));
  exportCollisionBtn.addEventListener('click', () => exportJson('collision.json', JSON.stringify(collisionLayer)));

  //Select tile from the Tiles grid
  tilesetContainer.addEventListener("mousedown", (event) => {
    selection = getCoords(event);
    tilesetSelection.style.left = selection[0] * 32 + "px";
    tilesetSelection.style.top = selection[1] * 32 + "px";
  });



  //Handler for placing new tiles on the map
  function addTile(mouseEvent) {
    let clicked = getCoords(event);
    let key = clicked[0] + "-" + clicked[1];

    if (isCollisionLayer) {
      if (mouseEvent.shiftKey) {
        collisionLayer = collisionLayer.filter(el => Object.keys(el)[0] !== key);
      } else {
        if (!collisionLayer.some(item => Object.keys(item)[0] === key)) collisionLayer.push({ [key]: 'solid' });
        console.log(collisionLayer);
      }
    } else {
      if (mouseEvent.shiftKey) {
        delete layers[currentLayer][key];
      } else {
        if (!layers[currentLayer]) layers.push({ [key]: [selection[0], selection[1]] })
        else layers[currentLayer][key] = [selection[0], selection[1]];
      }
    }
    draw();
  }

  function draw() {
    // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
    // ctx.translate( canvas.width / 2, canvas.height / 2 )
    // ctx.scale(cameraZoom, cameraZoom)
    // ctx.translate( -window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y )
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let size_of_crop = 32;

    layers.forEach((layer) => {
      Object.keys(layer).forEach((key) => {
        //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
        const positionX = Number(key.split('-')[0]);
        const positionY = Number(key.split('-')[1]);
        const [tilesheetX, tilesheetY] = layer[key];

        ctx.drawImage(
          tilesetImage,
          tilesheetX * 32,
          tilesheetY * 32,
          size_of_crop,
          size_of_crop,
          positionX * 32,
          positionY * 32,
          size_of_crop,
          size_of_crop
        );
      });
    });

    collisionLayer.forEach(entry => {
      const positionX = Object.keys(entry)[0].split('-')[0];
      const positionY = Object.keys(entry)[0].split('-')[1];

      ctx.strokeRect(positionX * 32, positionY * 32, 32, 32);
      ctx.stroke();
    })
  }

  tilesetImage.onload = function () {
    draw();
    setLayer(0);
  }
};

