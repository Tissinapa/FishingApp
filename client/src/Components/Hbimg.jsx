
import PropTypes from "prop-types"
import image from "../assets/vapa_frontpage.jpg"

const Hbimg = ({ children }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw", 
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {children}
      </div>
    );
  };

  Hbimg.propTypes = {
    children: PropTypes.node
};

export default Hbimg;