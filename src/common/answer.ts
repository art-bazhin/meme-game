export interface Answer {
  playerId: string;
  card: string;
  cardIndex: number;
  votes: (number | null)[];
}
