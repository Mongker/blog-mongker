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

const { CompositeDecorator, Editor, EditorState, convertToRaw } = Draft;
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

class DraftEdit extends React.Component {
    onChange = (editorState) => {
        const { setEditorState } = this.props;
        console.log('Edit: ', JSON.stringify(convertToRaw(editorState.getCurrentContent())));
        setEditorState(editorState);
    };
    focus = () => {
        this.refs.editor.focus();
    };
    render() {
        const { editorState } = this.props;
        console.log('editorState.getCurrentContent(): ', JSON.stringify(convertToRaw(editorState.getCurrentContent())));
        return (
            <div className={styles.container_edit} onClick={this.focus}>
                <h1>Đăng bài của bạn</h1>
                <div className={styles.edit}>
                    <Editor editorState={editorState} onChange={this.onChange} customStyleMap={styleMap} ref='editor' spellCheck={true} />
                </div>
            </div>
        );
    }
}
DraftEdit.propTypes = {
    editorState: PropTypes.editorState,
};
DraftEdit.defaultProps = {
    editorState: EditorState.createEmpty(),
};

export default DraftEdit;
