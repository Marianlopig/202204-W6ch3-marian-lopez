import { useDispatch, useSelector } from "react-redux";
import {
  addNumbersActionCreator,
  deleteNumbersActionCreator,
} from "../../redux/features/phone/phoneSlice";
import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { calling, numbers: phoneNumber } = useSelector(({ phone }) => phone);

  const dispatch = useDispatch();

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key
          key={number}
          text={number}
          disabled={calling}
          actionOnClick={() => {
            if (phoneNumber.length < 9) {
              dispatch(addNumbersActionCreator(number));
            }
          }}
        />
      ))}
      <Key
        text="delete"
        big={true}
        actionOnClick={() => dispatch(deleteNumbersActionCreator())}
        disabled={calling}
      />
    </ol>
  );
};

export default Keyboard;
