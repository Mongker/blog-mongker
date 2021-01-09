/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 09/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import Draft from 'draft-js';
import PropTypes from 'prop-types';

// styles
import styles from '../styles/index.module.css';

const { CompositeDecorator, Editor, EditorState } = Draft;

class DraftView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  render() {
    const { editorState } = this.props;
    return (
      <div className={styles.container_edit}>
        <h1>Review Edit Của bạn</h1>
        <div className={styles.edit}>
          <Editor editorState={editorState} ref='editor' spellCheck={true} readOnly={true} />
        </div>
      </div>
    );
  }
}
DraftView.propTypes = {
  editorState: PropTypes.object,
};
DraftView.defaultProps = {
  editorState: EditorState.createEmpty(),
};

export default DraftView;
