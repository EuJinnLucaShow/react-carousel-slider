function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Arrows;
