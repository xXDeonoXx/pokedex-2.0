export default interface Pokemon {
  pokedex_number: number;
  name: string;
  color: string;
  flavor_text: string;
  image_url: string;
  stats: [{ name: string; base_stat: number }];
  height: number;
  weight: number;
  moves: [
    {
      name: string;
      details: {
        level_learned_at: number;
        move_learn_method: { name: string };
      };
    }
  ];
  types: string[];
  abilities: string[];
  habitat: string;
}
