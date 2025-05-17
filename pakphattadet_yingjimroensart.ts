function quickestPath(
  portals: { location: number; destination: number }[]
): number {
    
  const warp = new Map<number, number>();
  portals.forEach((item) => {
    warp.set(item.location, item.location);
  });

  const positionDuplicate = Array(201).fill(false);
  positionDuplicate[1] = true;

  const q = [{ position: 1, turn: 0 }];

  for (let i = 0; i < q.length; i++) {
    const now = q[i];

    for (let step = 1; step <= 11; step++) {
      let next = now.position + step;

      if (warp[next]) {
        next = warp[next];
      }

      if (next === 200) {
        return now.turn + 1;
      }

      if (next > 200) continue;
      
    }
  }

  return -1;
}

const portals = [
  { location: 55, destination: 38 },
  { location: 14, destination: 35 },
  { location: 91, destination: 48 },
  { location: 30, destination: 8 },
  { location: 31, destination: 70 },
  { location: 63, destination: 83 },
  { location: 3, destination: 39 },
  { location: 47, destination: 86 },
  { location: 71, destination: 93 },
  { location: 21, destination: 4 },
  { location: 44, destination: 65 },
  { location: 96, destination: 66 },
  { location: 79, destination: 42 },
  { location: 87, destination: 54 },
  { location: 90, destination: 119 },
  { location: 120, destination: 149 },
  { location: 150, destination: 179 },
  { location: 180, destination: 200 },
];

console.log(quickestPath(portals));
