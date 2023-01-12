import "./section.css";
import S1CanonCamera from "./s1CanonCamera";
import S2RunList from "./s2RunList";
import S3TopProducts from "./s3TopProducts";
import S4LaptopSale from "./s4LaptopSale";
import S5See3Product from "./s5See3Product";
import S6About from "./s6About";
import S7Comments from "./s7Comments";
import S8Logos from "./s8Logos";
import S9Information from "./s9Information";

export default function Section() {
  return (
    <div className="mainSection">
      <S1CanonCamera />
      <S2RunList />
      <S3TopProducts />
      <S4LaptopSale />
      <S5See3Product />
      <S6About />
      <S7Comments />
      <S8Logos />
      <S9Information />
    </div>
  );
}
