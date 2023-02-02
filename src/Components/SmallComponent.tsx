import { useEffect, useRef } from "uelements";
import { SmallComponentprops } from "../types";

function  SmallComponent({
  cmpclose,
  video,
  setinitialsize,
  data,
  base,
  round = false,
  onlocalchange
}: SmallComponentprops) {

  const videoref = useRef<HTMLVideoElement | null>(null)
   useEffect(() => {
    videoref.current?.removeAttribute("controls")

   }, [])
     

    let cssval = "smvideo-container";

    function animationhandler() {
       console.log(round);
       
         if (round) {
            cssval = "smvideo-container-round"
         } else {

         }
    }
    animationhandler()
     
      function handleClick() {
        setinitialsize(true)
        onlocalchange()
      } 
  return (
<>  
    <>
      <div className="small-video-container-box "  
      
      >
     
        <div className="close-button cls-sm">
          <svg
            onClick={cmpclose}
            style="margin-left: 0.5px; width: 11px !important; height: 10px !important;"
            width="5"
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
        <div className={cssval} data-customattribute={"red"} >
          <video
            src={video}
            autoPlay
            id = "videos"
            className={round ? "sm-video circle " : "sm-video"}
            muted
            loop
            playsInline  
            ref={videoref}
          />
        </div>
        <h1 className="widgetheader" onClick={() => handleClick() }>
          {data.widgetHeader}
        </h1>
      </div>
    </>
    </>
  );
}

export default SmallComponent;
