import { Grid } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="loader">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="gold"
        ariaLabel="grid-loading"
        radius="12.5"
      />
    </div>
  );
};
