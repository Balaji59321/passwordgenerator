const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const small = "abcdefghijklmnopqrstuvwxyz".split("");
const special = "$!@#^&*%{}[]<>/?~-".split("");
const number = "0987654321".split("");
let out = "";
const func = (type, value) => {
  switch (type) {
    case "capital":
      for (let i = 0; i < (value["capital"] > 0 ? value["capital"] : 5); i++) {
        out = out + capital[Math.floor(Math.random() * capital.length)];
      }
      break;
    case "small":
      for (let i = 0; i < (value["small"] > 0 ? value["small"] : 5); i++) {
        out = out + small[Math.floor(Math.random() * small.length)];
      }
      break;
    case "special":
      for (let i = 0; i < (value["special"] > 0 ? value["special"] : 3); i++) {
        out = out + special[Math.floor(Math.random() * special.length)];
      }
      break;
    case "number":
      for (let i = 0; i < (value["number"] > 0 ? value["number"] : 5); i++) {
        out = out + number[Math.floor(Math.random() * number.length)];
      }
      break;
    default:
      break;
  }
};

export const Password = ({ value }) => {
  out = "";
  let row = ["small", "number", "capital", "special"];
  let row_leng = 4;
  for (let i = 0; i < 4; i++) {
    let item = row[Math.floor(Math.random() * row_leng)];
    func(item, value);
    row = row.filter((ele) => ele !== item);
    --row_leng;
  }
  out = out.split("");
  for (let i = 0; i < out.length / 2; i++) {
    if (i % 2 === 0) {
      let temp = out[i];
      out.splice(i, 1, out[out.length - 1 - i]);
      out.splice(out.length - 1 - i, 1, temp);
    }
  }
  return out.join("");
};
