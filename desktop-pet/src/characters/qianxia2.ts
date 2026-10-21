import type { CharacterDefinition } from "./types";

// 4 号角色：芙宁娜，使用游戏内的 Q 版 Spine 模型（原神 H5 活动资源）。
// 模型自带 55 个动画、3 套皮肤（default/朝右/朝左），动画名沿用「动作_XX / 表情_XX」规范。
export const QIANXIA2: CharacterDefinition = {
  id: "qianxia2",
  // 资源文件名为 funina.json / funina.atlas
  assetId: "funina",
  displayName: "芙宁娜",
  assetRoot: "./characters/furina",
  preferredAction: "动作_待机",
  preferredOverlay: "表情_正常",
  preferredSkin: "朝左",
  flipX: true,
  fitPadding: 0.9,
  behavior: {
    hoverOverlay: "表情_眯眼",
    // 注意：模型自带的「表情_无语」会把瞳孔和眼白整块染成 000000ff（纯黑），
    // 拖动时用它会变成黑眼，这里改用正常表情。
    dragOverlay: "表情_正常",
    coordination: {
      visualWidthCss: 208,
      preferredSpacingCss: 46,
      responseDelayMs: [220, 260],
    },
    idleRandom: {
      actions: ["动作_单手招手loop", "动作_单手举起loop"],
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
      动作_待机: "表情_正常",
      动作_走路: "表情_正常",
      动作_单手招手loop: "表情_开心闭眼",
      动作_单手举起loop: "表情_兴奋",
      动作_双手举起_loop: "表情_兴奋",
      动作_拍手loop: "表情_开心闭眼",
      动作_摸头loop: "表情_害羞",
      动作_演讲loop: "表情_演讲",
    },
    reactions: {
      click: [
        { action: "动作_单手举起loop", overlay: "表情_害羞", weight: 3 },
        { action: "动作_拍手loop", overlay: "表情_开心闭眼", weight: 1 },
      ],
      doubleClick: [{ action: "动作_双手举起_loop", overlay: "表情_兴奋", weight: 1 }],
      rapidClick: [
        { action: "动作_被戳穿_loop", overlay: "表情_生气", weight: 3 },
        { action: "动作_摸头loop", overlay: "表情_困扰_虚张声势", weight: 2 },
        { action: "动作_演讲loop", overlay: "表情_眯眼", weight: 1 },
      ],
    },
    cooldownMs: { click: 2600, doubleClick: 4000, rapidClick: 9500 },
  },
};
