/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {Klass, LexicalNode} from 'lexical';

import {CodeHighlightNode, CodeNode} from '@lexical/code';
import {HashtagNode} from '@lexical/hashtag';
import {AutoLinkNode, LinkNode} from '@lexical/link';
import {ListItemNode, ListNode} from '@lexical/list';
import {MarkNode} from '@lexical/mark';
import {OverflowNode} from '@lexical/overflow';
import {HorizontalRuleNode} from '@lexical/react/LexicalHorizontalRuleNode';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';
import {TableCellNode, TableNode, TableRowNode} from '@lexical/table';
import {CollapsibleContainerNode} from '../plugins/CollapsiblePlugin/CollapsibleContainerNode.ts';
// import {CollapsibleContainerNode} from '../plugins/CollapsiblePlugin/CollapsibleContainerNode';
import {CollapsibleContentNode} from '../plugins/CollapsiblePlugin/CollapsibleContentNode.ts';
import {CollapsibleTitleNode} from '../plugins/CollapsiblePlugin/CollapsibleTitleNode.ts';
import {AutocompleteNode} from './AutocompleteNode.tsx';
import {EmojiNode} from './EmojiNode.tsx';
import {EquationNode} from './EquationNode.tsx';
import {ExcalidrawNode} from './ExcalidrawNode/index.tsx';
import {FigmaNode} from './FigmaNode.tsx';
import {ImageNode} from './ImageNode.tsx';
import {InlineImageNode} from './InlineImageNode.tsx';
import {KeywordNode} from './KeywordNode.ts';
import {LayoutContainerNode} from './LayoutContainerNode.ts';
import {LayoutItemNode} from './LayoutItemNode.ts';
import {MentionNode} from './MentionNode.ts';
import {PageBreakNode} from './PageBreakNode/index.tsx';
import {PollNode} from './PollNode.tsx';
import {StickyNode} from './StickyNode.tsx';
import {TweetNode} from './TweetNode.tsx';
import {YouTubeNode} from './YouTubeNode.tsx';

const PlaygroundNodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  TableNode,
  TableCellNode,
  TableRowNode,
  HashtagNode,
  CodeHighlightNode,
  AutoLinkNode,
  LinkNode,
  OverflowNode,
  PollNode,
  StickyNode,
  ImageNode,
  InlineImageNode,
  MentionNode,
  EmojiNode,
  ExcalidrawNode,
  EquationNode,
  AutocompleteNode,
  KeywordNode,
  HorizontalRuleNode,
  TweetNode,
  YouTubeNode,
  FigmaNode,
  MarkNode,
  CollapsibleContainerNode,
  CollapsibleContentNode,
  CollapsibleTitleNode,
  PageBreakNode,
  LayoutContainerNode,
  LayoutItemNode,
];

export default PlaygroundNodes;
