

// // export default JoinUsBox;
// import React from "react";
// import "./JoinUsBox.css";

// const JoinUsBox = () => {
//   return (
//     <div className="join-us-container">
//       <div className="join-us-box px-20 mx-5">
//        <h2><div className="join-heading font-semibold">Join us as an Author</div></h2>
//         <p>
//           We warmly welcome submissions for new articles and collaboration. We
//           are seeking high-quality articles that empower international
//           professionals to advance confidently with the knowledge, analysis, and
//           solutions our products offer. We aim to collaborate in a friendly,
//           professional, and efficient manner. Publish with us.
//         </p>
//         <button className="join-us-button mt-5">Join us</button> {/* Join Us button */}
//       </div>
//       <div className="join-us-box px-20 mx-5">
//       <h2><div className="join-heading font-semibold">Join us as a Reviewer/Editor</div></h2>
//         <p>
//           Our Reviewer/Editorial board's quality reflects the standard of
//           Medicoscript. We are seeking dynamic, qualified, high-profile
//           researchers and experts. We have established a comprehensive system
//           for peer-review, open access journals across numerous scientific and
//           medical disciplines. Choose the journal that fits your expertise.
//         </p>
//         <button className="join-us-button mt-5">Join us</button> {/* Join Us button */}
//       </div>
//     </div>
//   );
// };

// export default JoinUsBox;

import React from "react";
import "./JoinUsBox.css";

const JoinUsBox = () => {
  return (
    <div className="join-us-container">
      <div className="join-us-box">
        <h2><div className="join-heading font-semibold">Join us as an Author</div></h2>
        <p>
          We warmly welcome submissions for new articles and collaboration. We
          are seeking high-quality articles that empower international
          professionals to advance confidently with the knowledge, analysis, and
          solutions our products offer. We aim to collaborate in a friendly,
          professional, and efficient manner. Publish with us.
        </p>
        <button className="join-us-button mt-5">Join us</button>
      </div>
      <div className="join-us-box">
        <h2><div className="join-heading font-semibold">Join us as a Reviewer/ Editor</div></h2>
        <p>
          Our Reviewer/Editorial board's quality reflects the standard of
          Medicoscript. We are seeking dynamic, qualified, high-profile
          researchers and experts. We have established a comprehensive system
          for peer-review, open access journals across numerous scientific and
          medical disciplines. Choose the journal that fits your expertise.
        </p>
        <button className="join-us-button mt-5">Join us</button>
      </div>
    </div>
  );
};

export default JoinUsBox;
