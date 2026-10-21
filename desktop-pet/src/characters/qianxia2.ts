import type { CharacterDefinition } from "./types";

// 4 号角色：完全照搬千夏的骨架，外观已替换为芙宁娜美术稿。
// 以后要改外观和行为，直接改本文件与 public/characters/qianxia2/。
export const QIANXIA2: CharacterDefinition = {
  id: "qianxia2",
  // 资源目录内的文件名沿用 qianxia（复制时未改名），这里显式指定，
  // 否则加载器会去请求 qianxia2.json / qianxia2.atlas 而 404。
  assetId: "qianxia",
  displayName: "芙宁娜",
  assetRoot: "./characters/qianxia2",
  preferredAction: "动作_待机",
  preferredOverlay: "表情_常态",
  preferredSkin: "朝左",
  flipX: true,
  fitPadding: 0.9,
  behavior: {
    hoverOverlay: "表情_正视",
    dragOverlay: "表情_皱眉",
    coordination: {
      visualWidthCss: 208,
      preferredSpacingCss: 46,
      responseDelayMs: [220, 260],
    },
    idleRandom: {
      actions: ["动作_害羞", "动作_自信"],
      delayMs: [60_000, 60_000],
      durationMs: 6_000,
    },
    dragSway: {
      maxAngleDegrees: 20,
      maxAngularVelocity: 230,
      motionDeadZoneCssPx: 1.25,
      velocitySmoothing: 15,
      accelerationToAngularVelocity: 0.13,
      velocityToAngle: 0.019,
      springStrength: 110,
      damping: 10.5,
      inputDecay: 8,
    },
    actionOverlays: {
      动作_待机: "表情_常态",
      动作_走路: "表情_常态",
      动作_哈气: "表情_哈气",
      动作_害羞: "表情_害羞",
      动作_心累: "表情_心累",
      动作_思考: "表情_思考",
      动作_生气: "表情_生气",
      动作_自信: "表情_自信",
    },
    reactions: {
      click: [
        { action: "动作_害羞", overlay: "表情_害羞", weight: 3 },
        { action: "动作_思考", overlay: "表情_思考", weight: 1 },
      ],
      doubleClick: [{ action: "动作_自信", overlay: "表情_自信", weight: 1 }],
      rapidClick: [
        { action: "动作_哈气", overlay: "表情_哈气", weight: 3 },
        { action: "动作_生气", overlay: "表情_生气", weight: 2 },
        { action: "动作_心累", overlay: "表情_心累", weight: 1 },
      ],
    },
    cooldownMs: { click: 2600, doubleClick: 4000, rapidClick: 9500 },
  },
};
