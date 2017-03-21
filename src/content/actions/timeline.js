// @flow
import type { Action } from './types';
import type { GetLabel } from '../labeling-strategies';
import type { GetCategory } from '../color-categories';
import type { ThreadIndex } from '../../common/types/profile';

export function changeFlameChartColorStrategy(getCategory: GetCategory): Action {
  return {
    type: 'CHANGE_FLAME_CHART_COLOR_STRATEGY',
    getCategory,
  };
}

export function changeFlameChartLabelingStrategy(getLabel: GetLabel): Action {
  return {
    type: 'CHANGE_FLAME_CHART_LABELING_STRATEGY',
    getLabel,
  };
}

export function changeTimelineExpandedThread(threadIndex: ThreadIndex, isExpanded: boolean): Action {
  const type = 'CHANGE_TIMELINE_EXPANDED_THREAD';
  return { type, threadIndex, isExpanded };
}

export type ChangeTimelineHorizontalViewport = (number, number) => Action

export function changeTimelineHorizontalViewport(left: number, right: number): Action {
  return {
    type: 'CHANGE_TIMELINE_HORIZONTAL_VIEWPORT',
    left,
    right,
  };
}