import { useEffect, useRef } from "uelements";
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
    videoEl.current?.removeAttribute("controls");
  }, []);

  function handlereplay() {
    videoEl.current!.currentTime = 0;
    videoEl.current!.play();
  }
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
          {/* <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="black" />
            <g clip-path="url(#clip0_702_31)">
              <path
                d="M16.517 13.7747C16.5753 13.833 16.692 13.833 16.7503 13.833H20.2503C20.6003 13.833 20.8337 13.5997 20.8337 13.2497C20.8337 12.8997 20.6003 12.6663 20.2503 12.6663H18.1503L21.242 9.57467C21.4753 9.34134 21.4753 8.99134 21.242 8.75801C21.0087 8.52467 20.6587 8.52467 20.4253 8.75801L17.3337 11.8497V9.74967C17.3337 9.39967 17.1003 9.16634 16.7503 9.16634C16.4003 9.16634 16.167 9.39967 16.167 9.74967V13.2497C16.167 13.308 16.167 13.4247 16.2253 13.483C16.2837 13.5997 16.4003 13.7163 16.517 13.7747Z"
                fill="white"
              />
              <path
                d="M20.8335 14.4163C20.4835 14.4163 20.2502 14.6497 20.2502 14.9997V19.6663C20.2502 20.0163 20.0168 20.2497 19.6668 20.2497H10.3335C9.9835 20.2497 9.75016 20.0163 9.75016 19.6663V10.333C9.75016 9.98301 9.9835 9.74967 10.3335 9.74967H15.0002C15.3502 9.74967 15.5835 9.51634 15.5835 9.16634C15.5835 8.81634 15.3502 8.58301 15.0002 8.58301H10.3335C9.34183 8.58301 8.5835 9.34134 8.5835 10.333V19.6663C8.5835 20.658 9.34183 21.4163 10.3335 21.4163H19.6668C20.6585 21.4163 21.4168 20.658 21.4168 19.6663V14.9997C21.4168 14.6497 21.1835 14.4163 20.8335 14.4163Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_702_31">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(8 8)"
                />
              </clipPath>
            </defs>
          </svg> */}

          
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="black"/>
<path d="M15 18.9902C14.7491 18.9902 14.4982 18.8944 14.3069 18.7032L8.2872 12.6834C7.90427 12.3005 7.90427 11.6796 8.2872 11.2968C8.66997 10.9141 9.29071 10.9141 9.67367 11.2968L15 16.6235L20.3263 11.297C20.7092 10.9143 21.3299 10.9143 21.7126 11.297C22.0957 11.6798 22.0957 12.3007 21.7126 12.6836L15.693 18.7033C15.5017 18.8946 15.2508 18.9902 15 18.9902Z" fill="white"/>
</svg>

        </div>
        <button className="mutedbutton" onClick={handlemuted}>
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

        <button className="mutedbutton replay" onClick={handlereplay}>
          <svg
            style={{ width: "32px", "display" : "inline"   }}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_118_21)">
              <path
                d="M7 0.875C5.55672 0.876578 4.16105 1.39143 3.0625 2.3275V1.3125C3.0625 1.19647 3.01641 1.08519 2.93436 1.00314C2.85231 0.921094 2.74103 0.875 2.625 0.875C2.50897 0.875 2.39769 0.921094 2.31564 1.00314C2.23359 1.08519 2.1875 1.19647 2.1875 1.3125V3.5C2.1875 3.61603 2.23359 3.72731 2.31564 3.80936C2.39769 3.89141 2.50897 3.9375 2.625 3.9375H4.8125C4.92853 3.9375 5.03981 3.89141 5.12186 3.80936C5.20391 3.72731 5.25 3.61603 5.25 3.5C5.25 3.38397 5.20391 3.27269 5.12186 3.19064C5.03981 3.10859 4.92853 3.0625 4.8125 3.0625H3.54812C4.49907 2.21684 5.72743 1.74978 7 1.75C8.09059 1.74946 9.15429 2.08857 10.0433 2.72024C10.9324 3.3519 11.6026 4.24475 11.961 5.27478C12.3194 6.3048 12.3481 7.42088 12.0432 8.46797C11.7382 9.51506 11.1148 10.4412 10.2594 11.1177C9.40399 11.7943 8.35915 12.1876 7.26997 12.2432C6.18079 12.2987 5.10134 12.0137 4.18157 11.4277C3.2618 10.8417 2.54736 9.98375 2.13748 8.97311C1.7276 7.96247 1.64263 6.84927 1.89437 5.78812C1.91288 5.73068 1.9193 5.67002 1.91323 5.60997C1.90716 5.54992 1.88873 5.49177 1.85909 5.43919C1.82946 5.38661 1.78927 5.34073 1.74105 5.30443C1.69283 5.26814 1.63761 5.24221 1.57889 5.22828C1.52016 5.21436 1.45918 5.21274 1.3998 5.22352C1.34041 5.2343 1.2839 5.25725 1.23382 5.29093C1.18373 5.32461 1.14115 5.36829 1.10877 5.41922C1.07638 5.47015 1.05488 5.52723 1.04563 5.58688C0.932904 6.04948 0.875626 6.52386 0.875 7C0.875 8.21141 1.23423 9.39562 1.90725 10.4029C2.58027 11.4101 3.53687 12.1952 4.65606 12.6588C5.77526 13.1223 7.00679 13.2436 8.19493 13.0073C9.38306 12.771 10.4744 12.1876 11.331 11.331C12.1876 10.4744 12.771 9.38306 13.0073 8.19493C13.2436 7.00679 13.1223 5.77526 12.6588 4.65606C12.1952 3.53687 11.4101 2.58027 10.4029 1.90725C9.39562 1.23423 8.21141 0.875 7 0.875Z"
                fill="white"
              />
              <path
                d="M6.125 9.27504C6.28925 9.27426 6.44996 9.22725 6.58875 9.13942L8.82438 7.74379C8.951 7.66532 9.05549 7.55582 9.12795 7.42566C9.20041 7.29551 9.23844 7.14901 9.23844 7.00004C9.23844 6.85107 9.20041 6.70457 9.12795 6.57442C9.05549 6.44426 8.951 6.33476 8.82438 6.25629L6.58875 4.86067C6.45649 4.778 6.30453 4.73219 6.14862 4.72798C5.99271 4.72377 5.8385 4.76131 5.70197 4.83671C5.56544 4.91212 5.45155 5.02265 5.37208 5.15685C5.29262 5.29106 5.25047 5.44407 5.25 5.60004V8.40004C5.25 8.63211 5.34219 8.85467 5.50628 9.01876C5.67038 9.18285 5.89294 9.27504 6.125 9.27504ZM6.125 5.60004L8.36063 7.00004L6.125 8.40004V5.60004Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_118_21">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
          <a
            href="https://api.whatsapp.com/send/?phone=918870981553&text=Hello%21+saw+your+plugin+on+Naturally+Yours+website.+Interested+to+know+more&type=phone_number&app_absent=0"
            target="_blank"
          >
            {" "}
            powered by
            <span style={{ fontSize: "14px", margin: "0px" }}>
              &nbsp; F22 Labs
            </span>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default LargeComponent;
