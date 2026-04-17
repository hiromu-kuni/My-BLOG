// IchigoJamにおけるカーソルの文字コード
export const IchigoJamCharacterOfCursor = "ƒ";

// IchigoJamの文字コード定義
export const IJCharacterCodes = {
  ArrowLeft: "Ǡ",
  ArrowRight: "ǡ",
  ArrowUp: "Ǣ",
  ArrowDown: "ǣ",
  Spade: "Ǥ",
  Heart: "ǥ",
  Club: "Ǧ",
  Diamond: "ǧ",
  Circle: "Ǩ",
  Ball: "ǩ",
  Ten: "Ǫ",
  RiceBall: "ǫ",
  Cat: "Ǭ",
  Jellyfish: "ǭ",
  Note: "Ǯ",
  AtMark: "ǯ",
  Plane: "ǰ",
  UFO: "Ǳ",
  Beam: "ǲ",
  Helicopter: "ǳ",
  Virus: "Ǵ",
  Coin: "ǵ",
  TreasureBox: "Ƕ",
  UpStairs: "Ƿ",
  DownStairs: "Ǹ",
  Human: "ǹ",
  StandingHuman: "Ǻ",
  RunningHumanRight: "ǻ",
  SquareBracketLeft: "Ǽ",
  RunningHumanLeft: "ǽ",
  SquareBracketRight: "Ǿ",
  Strawberry: "ǿ",
} as const;

export type IJCharacterCode = keyof typeof IJCharacterCodes;
