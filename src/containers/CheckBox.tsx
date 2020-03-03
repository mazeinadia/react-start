// @ts-ignore
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { IAppState } from "../store/modules";
import { toggleCheckbox} from "../store/checkBox";
// @ts-ignore
import CheckBox from '../components/CheckBox';

const mapStateToProps = (state: IAppState) => ({
  checked: state.checkBox.checked,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: () => dispatch(toggleCheckbox())
});

export type CheckBoxProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
