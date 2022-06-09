import { Game, GameObject } from "@eva/eva.js";
import { RendererSystem } from "@eva/plugin-renderer";
import { Text, TextSystem } from "@eva/plugin-renderer-text";
import { TextComponent } from "./text.component";

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector("#canvas") as any,
      width: 750,
      height: 1000,
    }),
    new TextSystem(),
  ],
});

// 此处还在考虑如何设置默认场景的宽高
game.scene.transform.size = {
  width: 750,
  height: 1000,
};

const text = new GameObject("text", {
  position: {
    x: 0,
    y: 0,
  },
});

text.addComponent(
  new TextComponent({
    text: [
      {
        value: "欢迎使用",
        fontSize: 36,
        fontWeight: "normal",
        color: 0xffffff,
      },
      {
        value: "EVA",
        fontSize: 46,
        fontWeight: "bold",
        color: 0x84c35f,
      },
      {
        value: "互动游戏",
        fontSize: 36,
        fontWeight: "normal",
        color: 0xffffff,
      },
      {
        value: "开发体系！",
        fontSize: 36,
        fontWeight: "normal",
        color: 0xebe44f,
      },
    ],
  })
);

game.scene.addChild(text);
