export default function Stats({ items }) {
  // this if close help me to increse interactive info to client and if there is no item ther is nothing
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding items to your paking list 🚀</em>
      </p>
    );

  const numitems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numitems) * 100);

  return (
    <footer className="stats">
      <em>
        {numitems === numPacked
          ? `you got everything ! Ready to go✈️`
          : `
        ${numitems} items on your list and you alredy packed ${numPacked} (
        ${numPercent}%) `}
      </em>
    </footer>
  );
}
