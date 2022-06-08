const obj = [
  {
    id: "1",
    name: "Destorinillador",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ea nisi.",
    stock: 5,
  },
  {
    id: "2",
    name: "Martillo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ea nisi.",
    stock: 8,
  },
  {
    id: "3",
    name: "Taladro",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ea nisi.",
    stock: 2,
  },
];

export const getFetch = () => {
  return new Promise((resolve, reject) => {
    resolve(obj);
  });
};
