import wabt from "wabt";

/**
 * @param {number} a
 * */
export const compileToJs = (a: number) => {
  console.log(a);
  wabt().then((w) => {
    console.log(w);
  });
  return a * 2;
};
