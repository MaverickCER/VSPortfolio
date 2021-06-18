import React from "react";

const OverviewComponent = ({name}) => {
  return (
    <React.Fragment>
    {
      {
        linkedinemail: (
          <div>
            <h2 className="extensionHeader">LinkedIn Email<span className="extensionID">linkedinemail.html</span></h2>
            <a href="https://www.github.com/MaverickCER" target="_blank" rel="noreferrer" className="extensionRepo"><span title="Publisher Name">MaverickCER</span> | <span title="Source Code">Repository</span> | v1.0 </a>
            <p className="extensionDescription">HTML Email - HTML5, CSS3</p>
          </div>
        ),
        transamericaemail: (
          <div>
            <h2 className="extensionHeader">TransAmerica Email<span className="extensionID">transamericaemail.html</span></h2>
            <a href="https://www.github.com/MaverickCER" target="_blank" rel="noreferrer" className="extensionRepo"><span title="Publisher Name">MaverickCER</span> | <span title="Source Code">Repository</span> | v1.0 </a>
            <p className="extensionDescription">HTML Email - HTML5, CSS3</p>
          </div>
        ),
        soylentemail: (
          <div>
            <h2 className="extensionHeader">Soylent Email<span className="extensionID">soylentemail.html</span></h2>
            <a href="https://www.github.com/MaverickCER" target="_blank" rel="noreferrer" className="extensionRepo"><span title="Publisher Name">MaverickCER</span> | <span title="Source Code">Repository</span> | v1.0 </a>
            <p className="extensionDescription">HTML Email - HTML5, CSS3</p>
          </div>
        ),
        displateemail: (
          <div>
            <h2 className="extensionHeader">Displate Email<span className="extensionID">displateemail.html</span></h2>
            <a href="https://www.github.com/MaverickCER" target="_blank" rel="noreferrer" className="extensionRepo"><span title="Publisher Name">MaverickCER</span> | <span title="Source Code">Repository</span> | v1.0 </a>
            <p className="extensionDescription">HTML Email - HTML5, CSS3</p>
          </div>
        ),
        walmartemail: (
          <div>
            <h2 className="extensionHeader">Walmart Email<span className="extensionID">walmartemail.html</span></h2>
            <a href="https://www.github.com/MaverickCER" target="_blank" rel="noreferrer" className="extensionRepo"><span title="Publisher Name">MaverickCER</span> | <span title="Source Code">Repository</span> | v1.0 </a>
            <p className="extensionDescription">HTML Email - HTML5, CSS3</p>
          </div>
        ),
        htmlquine: (
          <div>
            <h2 className="extensionHeader">HTML Only Quine<span className="extensionID">htmlquine.html</span></h2>
            <a href="https://www.github.com/MaverickCER" target="_blank" rel="noreferrer" className="extensionRepo"><span title="Publisher Name">MaverickCER</span> | <span title="Source Code">Repository</span> | v1.0 </a>
            <p className="extensionDescription">HTML Email - HTML5, CSS3</p>
          </div>
        ),
      }[name.slice(0, -5)]
    }
    </React.Fragment>
  );
};

export default OverviewComponent;