export default function SellOrderInfo({ price, amount, total }) {
  return (
    <div className="flex text-white/50 transition ease-out hover:text-white hover:bg-white/20 cursor-pointer py-2 px-2 rounded-full justify-between text-xs md:text-sm">
      <h1>{price}</h1>
      <h1>{amount}</h1>
      <h1>{total}</h1>
    </div>
  );
}
