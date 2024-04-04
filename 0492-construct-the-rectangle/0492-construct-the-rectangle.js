const constructRectangle = (area) => {
  let w = Math.ceil(Math.sqrt(area));
  while ((area / w) % 1 !== 0) w++;
  return [w, area / w];
};