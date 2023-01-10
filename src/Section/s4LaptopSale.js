import background from "./img/laptop.png";

export default function S4LaptopSale() {
  return (
    <div
      className="newLaptop"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="proInf">
        <button className="infBtn">New laptop</button>
        <h2>Sale up to 50% off</h2>
        <p>12 inch hd display</p>
        <button className="infBtn">Shop now</button>
      </div>
    </div>
  );
}
