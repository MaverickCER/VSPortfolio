import React from "react";

const ChangeLogComponent = ({name}) => {
  return (
    <React.Fragment>
    {
      {
        linkedinemail: (
          <div className="changeLog">
            <h3>CHANGELOG</h3>
            <hr/>
            <p>1.0 - 2021/05/30</p>
            <ul>
              <li>Initial Build on <a href="https://codepen.io/maverickcer/details/xxqLvMM" target="_blank" rel="noreferrer">CodePen.io</a></li>
            </ul>
          </div>
        ),
        transamericaemail: (
          <div className="changeLog">
            <h3>CHANGELOG</h3>
            <hr/>
            <p>1.0 - 2021/05/30</p>
            <ul>
              <li>Initial Build on <a href="https://codepen.io/maverickcer/pen/QWpqLOx" target="_blank" rel="noreferrer">CodePen.io</a></li>
            </ul>
          </div>
        ),
        soylentemail: (
          <div className="changeLog">
            <h3>CHANGELOG</h3>
            <hr/>
            <p>1.0 - 2021/05/30</p>
            <ul>
              <li>Initial Build on <a href="https://codepen.io/maverickcer/pen/RwpZzpM" target="_blank" rel="noreferrer">CodePen.io</a></li>
            </ul>
          </div>
        ),
        displateemail: (
          <div className="changeLog">
            <h3>CHANGELOG</h3>
            <hr/>
            <p>1.0 - 2021/05/30</p>
            <ul>
              <li>Initial Build on <a href="https://codepen.io/maverickcer/pen/ExWvJBG" target="_blank" rel="noreferrer">CodePen.io</a></li>
            </ul>
          </div>
        ),
        walmartemail: (
          <div className="changeLog">
            <h3>CHANGELOG</h3>
            <hr/>
            <p>1.0 - 2021/05/24</p>
            <ul>
              <li>Initial Build on <a href="https://codepen.io/maverickcer/pen/jOBBaxL" target="_blank" rel="noreferrer">CodePen.io</a></li>
            </ul>
          </div>
        ),
      }[name.slice(0, -5)]
    }
    </React.Fragment>
  );
};

export default ChangeLogComponent;