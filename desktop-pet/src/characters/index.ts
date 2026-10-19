import { AIRUI } from "./airui";
import { NANGONG } from "./nangong";
import { QIANXIA } from "./qianxia";
import { QIANXIA2 } from "./qianxia2";
import type { CharacterDefinition, CharacterId } from "./types";

export const CHARACTERS = [AIRUI, NANGONG, QIANXIA, QIANXIA2] as const;

export const CHARACTER_BY_ID: Readonly<Record<CharacterId, CharacterDefinition>> = {
  airui: AIRUI,
  nangong: NANGONG,
  qianxia: QIANXIA,
  qianxia2: QIANXIA2,
};

export function isCharacterId(value: unknown): value is CharacterId {
  return typeof value === "string" && value in CHARACTER_BY_ID;
}
