import "assets/demo/demo.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/css/nucleo-icons.css";

export const PageBackground = ({
  children,
  background = true,
}: {
  children: any;
  background?: boolean;
}) => {
  return (
    <div className="page-header">
      {background && (
        <>
          {" "}
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />{" "}
        </>
      )}
      <div className="content-center">{children}</div>
    </div>
  );
};
