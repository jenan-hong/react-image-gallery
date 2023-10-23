import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import image1 from "./assets/annie-spratt-QUHiX6x_yDE-unsplash.jpg";
import image2 from "./assets/annie-spratt-V705bwrTnQI-unsplash.jpg";
import image3 from "./assets/annie-spratt-Z9Ds4w141i4-unsplash.jpg";
import image4 from "./assets/chad-madden-SUTfFCAHV_A-unsplash.jpg";
import image5 from "./assets/deidre-schlabs-xhY0_j02ZWE-unsplash.jpg";
import image6 from "./assets/ian-schneider-PAykYb-8Er8-unsplash.jpg";
import image7 from "./assets/john-matychuk-5RGhNBTeplg-unsplash.jpg";
import image8 from "./assets/jonathan-borba-vcX5AhBwk6s-unsplash.jpg";
import image9 from "./assets/kira-auf-der-heide-IPx7J1n_xUc-unsplash.jpg";
import image10 from "./assets/luke-besley-Mdz-EpieP3A-unsplash.jpg";
import image11 from "./assets/nataliya-melnychuk-DHMWVqTaHus-unsplash.jpg";
import image12 from "./assets/prem-roshan-6SS1O3FdROE-unsplash.jpg";
import image13 from "./assets/raspopova-marina--o3cOUkb-eM-unsplash.jpg";
import image14 from "./assets/roberto-nickson-5PQn41LFsQk-unsplash.jpg";
import image15 from "./assets/rodion-kutsaiev-ySNkCkdKyTY-unsplash.jpg";
import image16 from "./assets/s-b-vonlanthen-IPubTLY7Ji0-unsplash.jpg";
import image17 from "./assets/stories-mFTOFzUKdl0-unsplash.jpg";
import image18 from "./assets/taisiia-shestopal-CnQaLU-0Zlc-unsplash.jpg";
import image19 from "./assets/tessa-rampersad-5toRIWF2GUY-unsplash.jpg";
import image20 from "./assets/tijana-drndarski-1L4q_S1atmc-unsplash.jpg";
// Add more images as needed

const CustomLink = React.forwardRef<
  HTMLAnchorElement,
  { children: React.ReactNode; to: string; className: string }
>(({ children, to, className }, ref) => (
  <Link to={to} className={className} ref={ref}>
    <a ref={ref}>{children}</a>
  </Link>
));

function App() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
            image11, image12, image13, image14, image15, image16, image17, image18, image19, image20]; // Add more images to this array
  const [lastViewedPhoto, setLastViewedPhoto] = useState(null);
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>();

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto) {
      // lastViewedPhotoRef.current.scrollIntoView({ block: 'center' });
      // setLastViewedPhoto(null);
    }
  }, [lastViewedPhoto]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className="mx-auto max-w-[1960px] p-4">
              <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
                {images.map((path: string, index) => (
                  <CustomLink
                    key={index}
                    to={`/?p=${index}`}
                    // href={`/?photoId=${index}`}
                    // as={`/p/${index}`}
                    // ref={
                    //   index === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                    // }
                    // shallow
                    className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                  >
                    <img 
                      alt="photo"
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      src={path}
                      width={720}
                      height={480}
                      sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                    />
                  </CustomLink>
                ))}
              </div>
            </main>
          }
        />
        <Route path="/p/:id">{/* Your modal code goes here */}</Route>
      </Routes>
    </Router>
  );
}

export default App;
