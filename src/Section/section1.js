export default function Section1() {
  return (
    <div className="d-flex flex-row justify-content-between p-4">
      <div>
        <h2>Canon camera</h2>
        <button>Shop now</button>
        <button>View more</button>

        <div className="nextBtns">
          <button id="nextBtn"></button>
          <button id="nextBtn"></button>
          <button id="nextBtn"></button>
        </div>
      </div>
      <div className="imgPrice">
        <img src="./images/camera.png" alt="" />
        <div className="price">
          only <br />
          $89
        </div>
      </div>
    </div>
  );
}
