import React from "react";

export const WelcomeMessage = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5 welcomeContainer">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <video
              className="d-block mx-lg-auto img-fluid videoClass"
              autoPlay
              loop
              muted
            >
              <source src="../public/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 welcomeHeading">
              No Posts Yet ?<br />
              <span className="welcomeSpan">Let’s Change That!</span>
            </h1>
            <p className="lead">
              "Your stories deserve to be heard. Start by creating your first
              post and sharing your thoughts, adventures, or ideas with the
              world. Click the button below to get started!" This headline and
              description create a sense of excitement and encourage users to
              engage actively with the platform. Let me know if you'd like to
              tweak the tone further!
            </p>
            {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-warning  px-2 me-md-2"
                style={{ fontWeight: "bold" }}
                onClick={handleFetchPost}
              >
                Fetch Post
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
