figma.showUI(__html__, { themeColors: true, width: 400, height: 500 });

figma.ui.onmessage = (msg) => {
  // if (msg.type === "create-rectangles") {
  //   const nodes = [];

  //   for (let i = 0; i < msg.count; i++) {
  //     const rect = figma.createRectangle();
  //     rect.x = i * 150;
  //     rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
  //     figma.currentPage.appendChild(rect);
  //     nodes.push(rect);
  //   }

  //   figma.currentPage.selection = nodes;
  //   figma.viewport.scrollAndZoomIntoView(nodes);
  // }

  if (msg.type === "export") {
    figma
      .createImageAsync(msg.dataUrl)
      .then(async (image: Image) => {
        // Create node
        const node = figma.createRectangle();
        // Resize the node to match the image's width and height
        const { width, height } = await image.getSizeAsync();
        node.resize(width, height);

        // Set the fill on the node
        node.fills = [
          {
            type: "IMAGE",
            imageHash: image.hash,
            scaleMode: "FILL",
          },
        ];

        figma.closePlugin();
      })
      .catch((error: any) => {
        console.log(error);
        figma.closePlugin();
      });
  }
};
