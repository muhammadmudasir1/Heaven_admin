import {
    CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  } from '@lexical/code';
  import {
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
  } from '@lexical/list';
  import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
  import {
    $setBlocksType,
  } from '@lexical/selection';
  import {
    $findMatchingParent,
    mergeRegister,
  } from '@lexical/utils';
  import {
    $createParagraphNode,
    $getSelection,
    $isRangeSelection,
    $isRootOrShadowRoot,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    COMMAND_PRIORITY_CRITICAL,
    LexicalEditor,
    REDO_COMMAND,
    SELECTION_CHANGE_COMMAND,
    UNDO_COMMAND,
  } from 'lexical';
  import {Dispatch, useCallback, useEffect, useState} from 'react';
  import * as React from 'react';
  import {IS_APPLE} from '../../shared/src/environment.ts';
  
  import useModal from '../../hooks/useModal.tsx';
  import DropDown, {DropDownItem} from '../../ui/DropDown.tsx';


  const blockTypeToBlockName = {
    bullet: 'Bulleted List',
    check: 'Check List',
    code: 'Code Block',
    h1: 'Heading 1',
    h2: 'Heading 2',
    h3: 'Heading 3',
    h4: 'Heading 4',
    h5: 'Heading 5',
    h6: 'Heading 6',
    number: 'Numbered List',
    paragraph: 'Normal',
    quote: 'Quote',
  };
  
  const rootTypeToRootName = {
    root: 'Root',
    table: 'Table',
  };
  
  function dropDownActiveClass(active: boolean) {
    if (active) {
      return 'active dropdown-item-active';
    } else {
      return '';
    }
  }
  
  function BlockFormatDropDown({
    editor,
    blockType,
    disabled = false,
  }: {
    blockType: keyof typeof blockTypeToBlockName;
    rootType: keyof typeof rootTypeToRootName;
    editor: LexicalEditor;
    disabled?: boolean;
  }): JSX.Element {
    const formatParagraph = () => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createParagraphNode());
        }
      });
    };
  
    const formatBulletList = () => {
      if (blockType !== 'bullet') {
        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
      } else {
        formatParagraph();
      }
    };
  
    const formatNumberedList = () => {
      if (blockType !== 'number') {
        editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      } else {
        formatParagraph();
      }
    };
  
    return (
      <DropDown
        disabled={disabled}
        buttonClassName="toolbar-item block-controls"
        buttonIconClassName={'icon block-type ' + blockType}
        buttonLabel={blockTypeToBlockName[blockType]}
        buttonAriaLabel="Formatting options for text style">
        <DropDownItem
          className={'item ' + dropDownActiveClass(blockType === 'paragraph')}
          onClick={formatParagraph}>
          <i className="icon paragraph" />
          <span className="text">Normal</span>
        </DropDownItem>
        <DropDownItem
          className={'item ' + dropDownActiveClass(blockType === 'bullet')}
          onClick={formatBulletList}>
          <i className="icon bullet-list" />
          <span className="text">Bullet List</span>
        </DropDownItem>
        <DropDownItem
          className={'item ' + dropDownActiveClass(blockType === 'number')}
          onClick={formatNumberedList}>
          <i className="icon numbered-list" />
          <span className="text">Numbered List</span>
        </DropDownItem>
      </DropDown>
    );
  }
  
  function Divider(): JSX.Element {
    return <div className="divider" />;
  }
  
  export default function ListToolbarPlugin({
  }: {
    setIsLinkEditMode: Dispatch<boolean>;
  }): JSX.Element {
    const [editor] = useLexicalComposerContext();
    const [activeEditor, setActiveEditor] = useState(editor);
    const [blockType, setBlockType] =
      useState<keyof typeof blockTypeToBlockName>('paragraph');
    const [rootType, setRootType] =
      useState<keyof typeof rootTypeToRootName>('root');
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const [modal, showModal] = useModal();
    const [isEditable, setIsEditable] = useState(() => editor.isEditable());
  
    const $updateToolbar = useCallback(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const anchorNode = selection.anchor.getNode();
        let element =
          anchorNode.getKey() === 'root'
            ? anchorNode
            : $findMatchingParent(anchorNode, (e) => {
                const parent = e.getParent();
                return parent !== null && $isRootOrShadowRoot(parent);
              });
  
        if (element === null) {
          element = anchorNode.getTopLevelElementOrThrow();
        }
  
        const elementKey = element.getKey();
        const elementDOM = activeEditor.getElementByKey(elementKey);
      }
    }, [activeEditor]);
  
    useEffect(() => {
      return editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          $updateToolbar();
          setActiveEditor(newEditor);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      );
    }, [editor, $updateToolbar]);
  
    useEffect(() => {
      return mergeRegister(
        editor.registerEditableListener((editable) => {
          setIsEditable(editable);
        }),
        activeEditor.registerUpdateListener(({editorState}) => {
          editorState.read(() => {
            $updateToolbar();
          });
        }),
        activeEditor.registerCommand<boolean>(
          CAN_UNDO_COMMAND,
          (payload) => {
            setCanUndo(payload);
            return false;
          },
          COMMAND_PRIORITY_CRITICAL,
        ),
        activeEditor.registerCommand<boolean>(
          CAN_REDO_COMMAND,
          (payload) => {
            setCanRedo(payload);
            return false;
          },
          COMMAND_PRIORITY_CRITICAL,
        ),
      );
    }, [$updateToolbar, activeEditor, editor]);
  
    return (
      <div className="toolbar">
        <button
          disabled={!canUndo || !isEditable}
          onClick={() => {
            activeEditor.dispatchCommand(UNDO_COMMAND, undefined);
          }}
          title={IS_APPLE ? 'Undo (⌘Z)' : 'Undo (Ctrl+Z)'}
          type="button"
          className="toolbar-item spaced"
          aria-label="Undo">
          <i className="format undo" />
        </button>
        <button
          disabled={!canRedo || !isEditable}
          onClick={() => {
            activeEditor.dispatchCommand(REDO_COMMAND, undefined);
          }}
          title={IS_APPLE ? 'Redo (⌘Y)' : 'Redo (Ctrl+Y)'}
          type="button"
          className="toolbar-item"
          aria-label="Redo">
          <i className="format redo" />
        </button>
        <Divider />
        {blockType in blockTypeToBlockName && activeEditor === editor && (
          <>
            <BlockFormatDropDown
              disabled={!isEditable}
              blockType={blockType}
              rootType={rootType}
              editor={editor}
            />
            <Divider />
          </>
        )}
        {blockType === 'code' ? (
        null
        ) : (
          <>
          </>
        )}
        <Divider />
  
        {modal}
      </div>
    );
  }
  