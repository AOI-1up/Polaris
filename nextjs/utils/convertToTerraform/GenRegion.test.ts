import { GenRegion } from "./GenRegion";

describe("GenRegion function", () => {
  it("Regionの設定から正しい文字列が生成されるか", () => {
    const resources = {
      region: "us-west-2",
      optional: "",
    };

    const expectedOutput = `provider "aws" {
  region = "us-west-2"
}\n`;

    expect(GenRegion(resources)).toBe(expectedOutput);
  });
});
