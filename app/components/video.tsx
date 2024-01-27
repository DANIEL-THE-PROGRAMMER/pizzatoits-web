export const Video = ({ name }: { name: string }) => {

    

  return (
    <video
      className="hero__video transform duration-[3s] scale-100"
      autoPlay
      muted
      loop
    >
      <source src={name} type="video/mp4" />
    </video>
  );
};
