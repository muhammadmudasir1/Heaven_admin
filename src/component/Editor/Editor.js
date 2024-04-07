import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin';
import LexicalClickableLinkPlugin from '@lexical/react/LexicalClickableLinkPlugin';
import { CollaborationPlugin } from '@lexical/react/LexicalCollaborationPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import useLexicalEditable from '@lexical/react/useLexicalEditable';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { CAN_USE_DOM } from './canUseDom';

import { createWebsocketProvider } from './collaboration';
import { useSettings } from './context/SettingsContext.tsx';
import { useSharedHistoryContext } from './context/SharedHistoryContext.tsx';
import AutocompletePlugin from './plugins/AutocompletePlugin/index.tsx';
import AutoLinkPlugin from './plugins/AutoLinkPlugin/index.tsx';
import CodeActionMenuPlugin from './plugins/CodeActionMenuPlugin/index.tsx';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin/index.ts';
import CollapsiblePlugin from './plugins/CollapsiblePlugin/index.ts';
import ComponentPickerPlugin from './plugins/ComponentPickerPlugin/index.tsx';
import DragDropPaste from './plugins/DragDropPastePlugin/index.ts';
import DraggableBlockPlugin from './plugins/DraggableBlockPlugin/index.tsx';
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin/index.tsx';
import FloatingTextFormatToolbarPlugin from './plugins/FloatingTextFormatToolbarPlugin/index.tsx';
import ImagesPlugin from './plugins/ImagesPlugin/index.tsx';
import InlineImagePlugin from './plugins/InlineImagePlugin/index.tsx';
import { LayoutPlugin } from './plugins/LayoutPlugin/LayoutPlugin.tsx';
import LinkPlugin from './plugins/LinkPlugin/index.tsx';
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin/index.ts';
// import MarkdownShortcutPlugin from './plugins/MarkdownShortcutPlugin/index.tsx';
import { MaxLengthPlugin } from './plugins/MaxLengthPlugin/index.tsx';
import TabFocusPlugin from './plugins/TabFocusPlugin/index.tsx';
import TableCellActionMenuPlugin from './plugins/TableActionMenuPlugin/index.tsx';
import TableCellResizer from './plugins/TableCellResizer/index.tsx';
import ToolbarPlugin from './plugins/ToolbarPlugin/index.tsx';
import ContentEditable from './ui/ContentEditable.tsx';
import Placeholder from './ui/Placeholder.tsx';

const skipCollaborationInit =
  // @ts-expect-error
  window.parent != null && window.parent.frames.right === window;

export default function Editor({isEditableEditor}) {
  const { historyState } = useSharedHistoryContext();
  const {
    settings: {
      isCollab,
      isAutocomplete,
      isMaxLength,
      isRichText,
      showTreeView,
      tableCellMerge,
      tableCellBackgroundColor,
    },
  } = useSettings();
  const isEditable = useLexicalEditable();
  const text = isCollab
    ? 'Enter some collaborative rich text...'
    : isRichText
    ? 'Enter some rich text...'
    : 'Enter some plain text...';
  const placeholder = <Placeholder>{text}</Placeholder>;
  const [floatingAnchorElem, setFloatingAnchorElem] = useState(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] = useState(false);
  const [isLinkEditMode, setIsLinkEditMode] = useState(false);

  const onRef = (_floatingAnchorElem) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia('(max-width: 1025px)').matches;

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener('resize', updateViewPortWidth);

    return () => {
      window.removeEventListener('resize', updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);

  return (
    <>
      {isRichText && isEditableEditor&&<ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />}
      <div
        className={`editor-container ${
          showTreeView ? 'tree-view' : ''
        } ${!isRichText ? 'plain-text' : ''}`}
      >
        {isMaxLength && <MaxLengthPlugin maxLength={30} />}
        <DragDropPaste />
        <AutoFocusPlugin />
        <ClearEditorPlugin />
        <ComponentPickerPlugin />
        <AutoLinkPlugin />
          <>
            {isCollab ? (
              <CollaborationPlugin
                id="main"
                providerFactory={createWebsocketProvider}
                shouldBootstrap={!skipCollaborationInit}
              />
            ) : (
              <HistoryPlugin externalHistoryState={historyState} />
            )}
            <RichTextPlugin
              contentEditable={
                <div className={`${isEditableEditor?"editor-scroller":"editor-scroller-non-editable"}`}>
                  <div className="editor" ref={onRef}>
                    <ContentEditable />
                  </div>
                </div>
              }
              placeholder={placeholder}
              ErrorBoundary={LexicalErrorBoundary}
            />
            {/* <MarkdownShortcutPlugin /> */}
            <CodeHighlightPlugin />
            <ListPlugin />
            <CheckListPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <TablePlugin
              hasCellMerge={tableCellMerge}
              hasCellBackgroundColor={tableCellBackgroundColor}
            />
            <TableCellResizer />
            <ImagesPlugin />
            <InlineImagePlugin />
            <LinkPlugin />
            <LexicalClickableLinkPlugin disabled={isEditable} />
            <HorizontalRulePlugin />
            <TabFocusPlugin />
            <TabIndentationPlugin />
            <CollapsiblePlugin />
            <LayoutPlugin />
            {floatingAnchorElem && !isSmallWidthViewport && (
              <>
                <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
                <FloatingLinkEditorPlugin
                  anchorElem={floatingAnchorElem}
                  isLinkEditMode={isLinkEditMode}
                  setIsLinkEditMode={setIsLinkEditMode}
                />
                <TableCellActionMenuPlugin
                  anchorElem={floatingAnchorElem}
                  cellMerge={true}
                />
                <FloatingTextFormatToolbarPlugin
                  anchorElem={floatingAnchorElem}
                  setIsLinkEditMode={setIsLinkEditMode}
                />
              </>
            )}
          </>
        {isAutocomplete && <AutocompletePlugin />}
      </div>
    </>
  );
}
