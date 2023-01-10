export default function S9Information() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between">
        <h2>Latest news</h2>
        <button>View all</button>
      </div>

      <div className="d-flex flex-row">
        <div className="d-flex flex-row">
          <div>
            <img src="./images/Blog1.png" alt="" />
          </div>
          <div>
            <p>22 oct 2021</p>
            <h4>Who avoids a pain that produces?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div>
            <img src="./images/Blog2.png" alt="" />
          </div>
          <div>
            <p>22 oct 2021</p>
            <h4>Who avoids a pain that produces?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>
          </div>
        </div>
      </div>

      <div className="nextBtns">
        <button id="nextBtn"></button>
        <button id="nextBtn"></button>
        <button id="nextBtn"></button>
        <button id="nextBtn"></button>
        <button id="nextBtn"></button>
      </div>
    </div>
  );
}
