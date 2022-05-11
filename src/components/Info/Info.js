import { useSelector } from "react-redux";

const Info = () => {
  const { calling } = useSelector(({ phone }) => phone);

  return (
    <>
      <span className={`message${calling ? "" : " off"}`}>Calling...</span>
    </>
  );
};

export default Info;
