export const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "symbol",
    headerName: "Symbol",
    width: 130,
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "currentPrice",
    headerName: "Current Price",
    description: "This column has a value of current share price.",
    type: "number",
    width: 150,
  },
  {
    field: "todayHigh",
    headerName: "Today High",
    description:
      "This column has a value of todays highest price for the share.",
    width: 140,
    type: "number",
  },
  {
    field: "todayLow",
    headerName: "Today Low",
    description:
      "This column has a value of todays lowest price for the share.",
    width: 140,
    type: "number",
  },
];

export const demodata = [
  {
    id: 1,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 35,
    todayHigh: 99,
    todayLow: 32,
  },
  {
    id: 2,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 23,
    todayHigh: 98,
    todayLow: 12,
  },  {
    id: 3,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 22,
    todayHigh: 90,
    todayLow: 21,
  },  {
    id: 4,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 55,
    todayHigh: 66,
    todayLow: 33,
  },  {
    id: 5,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 45,
    todayHigh: 66,
    todayLow: 33,
  },  {
    id: 6,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 2,
    todayHigh: 76,
    todayLow: 1,
  },  {
    id: 7,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 43,
    todayHigh: 56,
    todayLow: 24,
  },  {
    id: 9,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 34,
    todayHigh: 66,
    todayLow: 32,
  },  {
    id: 8,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 34,
    todayHigh: 55,
    todayLow: 30,
  },  {
    id: 10,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 430,
    todayHigh: 555,
    todayLow: 300,
  },  {
    id: 11,
    symbol: "Snow",
    title: "Jon",
    currentPrice: 5,
    todayHigh: 9,
    todayLow: 2,
  },
];
