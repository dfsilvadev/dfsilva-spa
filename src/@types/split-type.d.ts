declare module "split-type" {
  interface SplitTypeOptions {
    types?: "chars" | "words" | "lines";
    tag?: string;
  }

  interface SplitTypeResult {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert: () => void;
  }

  export default class SplitType {
    constructor(element: HTMLElement, options?: SplitTypeOptions);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert: () => void;
  }
}
