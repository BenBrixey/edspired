const sizes = {
  s: '0.75',
  m: '1',
  l: '1.25',
};

export default function calculateClubPrice(pence, size) {
  return pence * sizes[size];
}
