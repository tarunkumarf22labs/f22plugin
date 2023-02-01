import { useEffect, useRef } from "uelements";
import useWindowDimensions from "../hook/useWindowDimensions";
import { LargeComponentprops } from "../types";

function LargeComponent({
  cssval,
  handleCloseforlargesize,
  video,
  videoEl,
  handlemuted,
  muted,
  handleChange,
  show,
  buttons,
}: LargeComponentprops) {

  useEffect(() => {
    videoEl.current?.removeAttribute("controls")

    
   }, []) 
//   const { width } =   useWindowDimensions()



//   let link = ""  
//  if (width > 500) {
//    console.log("Sahi");
   
//  }

// https://api.whatsapp.com/send/?phone=918870981553&text=Hello%21+saw+your+plugin+on+Na[…]site.+Interested+to+know+more&type=phone_number&app_absent=0
   return (
    <div style={cssval as any} className="video-container">
      <div className="loader-container">
        <svg
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
        >
          <path
            fill="#fff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </svg>
      </div>
      <div className="video-container-box">
        <div class="close-button" onClick={() => handleCloseforlargesize()}>
          <svg
            style="margin-left: 0.5px; width: 11px !important; height: 10px !important;"
            width="11"
            height="100"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0547 12.5938C12.8203 12.8281 12.3906 12.8281 12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.14062 12.8281 0.90625 12.5938C0.671875 12.3594 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.90625 1.34375C0.671875 1.10938 0.671875 0.679688 0.90625 0.445312C1.14062 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.8203 0.210938 13.0547 0.445312C13.2891 0.679688 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3594 13.0547 12.5938Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <button className="sahi" onClick={handlemuted}>
          {" "}
          {!muted ? (
            <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
              <use class="ytp-svg-shadow"></use>
              <path
                class="ytp-svg-fill"
                d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"
                id="ytp-id-17"
              ></path>
            </svg>
          ) : (
            <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
              <use class="ytp-svg-shadow"></use>
              <use class="ytp-svg-shadow"></use>
              <defs>
                <clipPath id="ytp-svg-volume-animation-mask">
                  <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
                  <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
                  <path
                    class="ytp-svg-volume-animation-mover"
                    d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                    transform="translate(0, 0)"
                  ></path>
                </clipPath>
                <clipPath id="ytp-svg-volume-animation-slash-mask">
                  <path
                    class="ytp-svg-volume-animation-mover"
                    d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                    transform="translate(0, 0)"
                  ></path>
                </clipPath>
              </defs>
              <path
                class="ytp-svg-fill ytp-svg-volume-animation-speaker"
                clip-path="url(#ytp-svg-volume-animation-mask)"
                d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                fill="#fff"
                id="ytp-id-15"
              ></path>
              <path
                class="ytp-svg-fill ytp-svg-volume-animation-hider"
                clip-path="url(#ytp-svg-volume-animation-slash-mask)"
                d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
                fill="#fff"
                id="ytp-id-16"
                style="display: none;"
              ></path>
            </svg>
          )}{" "}
        </button>
        <video
          src={video}
          autoPlay
          ref={videoEl}
          className="lg-video-for-full"
          playsInline 
        />

        <div className="large-container-buttonparent">
          {show ? (
            buttons.map((e: any) => {
              if (!e.value) {
                return (
                  <button
                    className={"overlay-thing-button"}
                    onClick={() => handleChange(e.next)}
                    href={e?.value}
                  >
                    {e.text}
                  </button>
                );
              } else {
                return (
                  <button className={"overlay-thing-button"}>
                    <a href={e.value} target="_blank">
                      {" "}
                      {e.text}{" "}
                    </a>
                  </button>
                );
              }
            })
          ) : (
            <div></div>
          )}
        </div>



        <h1
          className="lg-credit"
          style={{
            background: "black",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >

<a href="https://api.whatsapp.com/send/?phone=918870981553&text=Hello%21+saw+your+plugin+on+Naturally+Yours+website.+Interested+to+know+more&type=phone_number&app_absent=0" target="_blank" > powered by
          <span style={{ fontSize: "14px" }}>&nbsp; F22 Labs</span></a>

        </h1>
      </div>
    </div>
  );
}

export default LargeComponent;
