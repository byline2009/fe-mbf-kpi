import { TailSpin } from "react-loader-spinner";

const LayoutSplashScreen = () => {
  // Everything are ready - remove splashscreen

  return (
    <div className="d-flex h-100 justify-content-center align-self-center align-items-center">
      <TailSpin ariaLabel="loading-indicator" />
    </div>
  );
};

export default LayoutSplashScreen;
