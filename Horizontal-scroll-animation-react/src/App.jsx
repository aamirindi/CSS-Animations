import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Horizotal scroll Animation</h1>
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>Webdev</li>
          <li>Animation</li>
          <li>UI/UX</li>
        </ul>
      </div>

      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          <img
            src="https://i.pinimg.com/736x/3b/37/cd/3b37cd80d4f092ed392b1453b64cf0d0.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/originals/5f/80/85/5f80854fd1475958717a19e345695942.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/564x/7a/bb/9c/7abb9c37f78898566c8b1579e6c623bb.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/736x/f8/32/e9/f832e9eeb044c0724ed38d11a6fc3c52.jpg"
            alt=""
          />
          <img
            src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
            alt=""
          />
          <img
            src="https://s.keepmeme.com/files/en_posts/20200917/cute-cat-smiling-meme-9c9330916cd484e167f76998749f0a2d.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
