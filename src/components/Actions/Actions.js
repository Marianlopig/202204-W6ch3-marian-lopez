import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  callActionCreator,
  hangActionCreator,
} from "../../redux/features/phone/phoneSlice";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const { numbers, calling } = useSelector(({ phone }) => phone);
  const dispatch = useDispatch();
  const timer = useRef(null);
  const hang = () => {
    clearTimeout(timer.current);
    dispatch(hangActionCreator());
  };
  const call = () => {
    dispatch(callActionCreator());
    timer.current = setTimeout(() => {
      hang();
    }, 5000);
  };

  return (
    <>
      <Display />
      {!calling && (
        <Action
          action="call"
          isActive={numbers.length === 9}
          actionOnClick={call}
        />
      )}
      {calling && <Action action="hang" isActive={true} actionOnClick={hang} />}
    </>
  );
};

export default Actions;
