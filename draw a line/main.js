// Set the height of the SVG path as a constant
const svg = document.getElementById("svgPath");
const length = svg.getTotalLength();

// Start positioning the SVG drawing
svg.style.strokeDasharray = length;

// Hide the SVG before scrolling starts
svg.style.strokeDashoffset = length;

window.addEventListener("scroll", function () {
  const scrollpercent =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);

  const draw = length * scrollpercent;

  // Reverse the drawing when scrolling upwards
  svg.style.strokeDashoffset = length - draw;
});
