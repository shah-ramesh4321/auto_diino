const NextArrow = ({ imgSrc, imgAlt, onClick }) => {
    return (
        <button
        className=" h4 btn-light bg-white text-danger py-3 px-2 mx-3  shadow position-absolute start-100 top-50 translate-middle "
          onClick={onClick}
        >
          <i class="bi bi-chevron-right" ></i>
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
  export default NextArrow;