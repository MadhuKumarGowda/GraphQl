let games = [
  { id: "1", title: "lorem 101 1", platform: ["Switch"] },
  { id: "2", title: "lorem 102 2", platform: ["PS5", "Xbox"] },
  { id: "3", title: "lorem 103 3", platform: ["PC"] },
  { id: "4", title: "lorem 104 4", platform: ["Switch", "PC"] },
  { id: "5", title: "lorem 105 5", platform: ["Xbox"] },
];

let authors = [
  { id: "1", name: "Madhu", verified: true },
  { id: "2", name: "Mala", verified: true },
  { id: "3", name: "Gourav", verified: false },
  { id: "4", name: "Abhi", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "lorem 1001", author_id: "2", game_id: "1" },
  { id: "2", rating: 7, content: "lorem 1002", author_id: "1", game_id: "2" },
  { id: "3", rating: 5, content: "lorem 1003", author_id: "3", game_id: "4" },
  { id: "4", rating: 10, content: "lorem 1004", author_id: "2", game_id: "3" },
  { id: "5", rating: 7, content: "lorem 1005", author_id: "4", game_id: "5" },
  { id: "6", rating: 8, content: "lorem 1006", author_id: "4", game_id: "2" },
  { id: "7", rating: 10, content: "lorem 1007", author_id: "1", game_id: "1" },
  { id: "8", rating: 9, content: "lorem 1008", author_id: "3", game_id: "3" },
  { id: "9", rating: 4, content: "lorem 1009", author_id: "3", game_id: "2" },
  { id: "10", rating: 5, content: "lorem 1010", author_id: "4", game_id: "5" },
  { id: "11", rating: 6, content: "lorem 1011", author_id: "1", game_id: "2" },
  { id: "12", rating: 9, content: "lorem 1012", author_id: "2", game_id: "4" },
];

export default { games, authors, reviews };
