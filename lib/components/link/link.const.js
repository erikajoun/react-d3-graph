"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.SELF_LINK_DIRECTION = exports.LINE_TYPES = void 0;

/**
 * @module Link/const
 * @description
 * A set of constants that facilitate readability regarding links.
 */

/**
 * @typedef {Object} LINE_TYPES
 * @property {string} STRAIGHT - a straight line.
 * @property {string} CURVE_SMOOTH - a slight curve between two nodes
 * @property {string} CURVE_FULL - a semicircumference trajectory unites source and target nodes.
 * @memberof Link/const
 */
var LINE_TYPES = {
  STRAIGHT: "STRAIGHT",
  CURVE_SMOOTH: "CURVE_SMOOTH",
  CURVE_FULL: "CURVE_FULL",
};
/**
 * @typedef {Object} SELF_LINK_DIRECTION
 * @property {string} TOP_LEFT - a self link will be drawn at the top left of a node.
 * @property {string} TOP_RIGHT - a self link will be drawn at the top right of a node.
 * @property {string} BOTTOM_LEFT - a self link will be drawn at the bottom left of a node.
 * @property {string} BOTTOM_RIGHT - a self link will be drawn at the bottom right of a node.
 * @memberof Link/const
 */

exports.LINE_TYPES = LINE_TYPES;
var SELF_LINK_DIRECTION = {
  TOP_LEFT: "TOP_LEFT",
  TOP_RIGHT: "TOP_RIGHT",
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
};
exports.SELF_LINK_DIRECTION = SELF_LINK_DIRECTION;
