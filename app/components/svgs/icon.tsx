export const ArrowRight = () => {
  let color = "#184dc4";

  const cursor = document.querySelector(".cursor");
  if (cursor?.classList.contains("asidemenu")) {
    console.log("yeah contained")
    color = "#fff";
  }else{
    color = "#184dc4";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      fill={`${color}`}
    >
      <title>Artboard-34</title>
      <g id="Right-2" data-name="Right">
        <polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" />
      </g>
    </svg>
  );
};

export const ArrowLink = () => {
  let color = "#184dc4";

  const cursor = document.querySelector(".cursor");
  if (cursor?.classList.contains("asidemenu")) {
    color = "#fff";
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
    >
      <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
    </svg>
  );
};
