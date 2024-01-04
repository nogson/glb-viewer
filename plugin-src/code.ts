figma.showUI(__html__, { themeColors: true, width: 400, height: 500 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "export") {
    figma
      .createImageAsync(msg.dataUrl)
      .then(async (image: Image) => {
        // Create node
        const node = figma.createRectangle();
        // Resize the node to match the image's width and height
        const { width, height } = await image.getSizeAsync();
        node.resize(width, height);
        node.x = figma.viewport.center.x;
        node.y = figma.viewport.center.y;
        // Set the fill on the node
        node.fills = [
          {
            type: "IMAGE",
            imageHash: image.hash,
            scaleMode: "FILL",
          },
        ];

        //figma.closePlugin();
      })
      .catch((error: any) => {
        console.log(error);
        figma.closePlugin();
      });
  }
};
