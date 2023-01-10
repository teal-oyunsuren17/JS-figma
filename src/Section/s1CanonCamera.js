export default function S1CanonCamera() {
  return (
    <div className="s1CanonCamera d-flex flex-row justify-content-between align-items-center">
      <div>
        <h2>Canon camera</h2>
        <div className="s1Btns d-flex flex-row">
          <button className="s1ShopnowBtn">Shop now</button>
          <button className="s1ViewmoreBtn">View more</button>
        </div>

        <div className="nextBtns">
          <button id="nextBtn"></button>
          <button id="nextBtn"></button>
          <button id="nextBtn"></button>
        </div>
      </div>
      <div className="imgPrice">
        <img className="s1CameraImg" src="./images/camera.png" alt="" />
        <div className="price">
          only <br />
          $89
        </div>
      </div>
    </div>
  );
}
