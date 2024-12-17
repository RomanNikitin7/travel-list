export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        Start adding some items to your packing list 🚀
      </footer>
    );
  }
  const itemsAmount = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const itemsPackedPercent = Math.round((itemsPacked / itemsAmount) * 100);
  return (
    <footer className="stats">
      <em>
        {itemsPackedPercent === 100
          ? "You got everything. Ready to go ✈"
          : `👜 You have ${itemsAmount} items on your list, and you already packed
        ${itemsPacked} (${itemsPackedPercent}%)`}
      </em>
    </footer>
  );
}
