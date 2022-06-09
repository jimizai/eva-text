import { Component, GameObject } from "@eva/eva.js";
import { Text } from "@eva/plugin-renderer-text";

interface P {
  text: Array<{
    value: string;
    color: number;
    fontSize: number;
    fontWeight: string;
  }>;
}

export class TextComponent extends Component<P> {
  static componentName = "TextComponent";

  init({ text }: P) {
    const gbs: GameObject[] = [];
    text.forEach((item, index) => {
      const gb = new GameObject("text" + index, {
        position: {
          x: 200 * index,
          y: 50,
        },
        origin: {
          x: 0,
          y: 0.5,
        },
      });
      const text = new Text({
        text: item.value,
        style: {
          fontFamily: "Arial",
          fontSize: item.fontSize,
          fontWeight: item.fontWeight,
          fill: [item.color],
          fillGradientType: 1,
          stroke: "#4a1850",
          strokeThickness: 5,
        },
      });
      gb.addComponent(text);
      gbs.push(gb);
    });
    window.requestAnimationFrame(() => {
      let left = 0;
      gbs.forEach((gb) => {
        gb.transform.position.x = left;
        left += gb.transform.size.width;
        this.gameObject.addChild(gb);
      });
    });
  }
}
