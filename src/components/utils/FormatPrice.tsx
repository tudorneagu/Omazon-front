function FormatPrice(price: number) {
  const [euros, cents] = Number(price).toFixed(2).split('.');
  return (
    <div className="flex ">
      <p className="text-[30px] leading-[30px]">{euros}</p>
      <span className="text-xs">.{cents} €</span>
    </div>
  );
}

export default FormatPrice;
