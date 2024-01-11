import { useContext } from "react";
import { UserContext } from "../../App";
const Error = () => {
  const {Navigate} = useContext(UserContext);
  return (
    <div>
      404
      <p onClick={() => Navigate(-1)}>Go back</p>
    </div>
  );
};

export default Error;
