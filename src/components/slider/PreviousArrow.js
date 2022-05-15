const PreviousArrow = ({ imgSrc, imgAlt, onClick }) => {
    return (
      <button
      className=" h4 btn-light bg-white text-danger py-3 mx-2 px-2 shadow position-absolute start-0 top-50 translate-middle "
      style={{zIndex:3}}
        onClick={onClick}
      >
          <i class="bi bi-chevron-left" ></i>
        {/* <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            width: "50px",
            height: "50px",
            filter:
              onClick === null
                ? "invert(93%) sepia(7%) saturate(7029%) hue-rotate(94deg) brightness(86%) contrast(93%)"
                : "none"
          }}
        /> */}
      </button>
    );
  };
  export default PreviousArrow;