/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 09/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import styles from './styles/index.module.css';
import { EditorState, convertToRaw } from 'draft-js';

// JSX
import DraftEdit from './DraftEdit/DraftEdit';
import DraftView from './DraftView/DraftView';
// import PropTypes from 'prop-types';

// Todo: Tham khảo tại https://codesandbox.io/s/draft-js-forked-nq1fk?file=/src/examples/Tweet.js
function DraftMain() {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
  console.log('editorState.getCurrentContent(): ', JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  const dataEdit = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.container}>
        <DraftEdit editorState={editorState} setEditorState={setEditorState} />
        <DraftView editorState={editorState} />
      </div>
      <div style={{ color: 'red', textAlign: 'center' }}>{dataEdit}</div>
    </div>
  );
}

// DraftMain.propTypes = {};
// DraftMain.defaultProps = {};

export default DraftMain;
