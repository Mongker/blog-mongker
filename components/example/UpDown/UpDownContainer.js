/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import UpDown from './UpDown';

// Action
import { actionDown, actionUp } from '../../../redux/actions/example/updownActions';

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    count: state.Counts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onUp: (data) => dispatch(actionUp(data)),
  onDown: (data) => dispatch(actionDown(data)),
});

const UpDownContainer = connect(mapStateToProps, mapDispatchToProps)(UpDown);

export default UpDownContainer;
