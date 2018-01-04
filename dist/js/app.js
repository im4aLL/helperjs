(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, [{
        key: 'objectAdd',
        value: function objectAdd(obj, key, value) {
            obj = Object.assign({}, obj);
            obj[key] = value;

            return obj;
        }
    }, {
        key: 'arrayCollapse',
        value: function arrayCollapse(arrays) {
            return arrays.reduce(function (a, b) {
                return a.concat(b);
            }, []);
        }
    }, {
        key: 'objectDevide',
        value: function objectDevide(obj) {
            return [this.objectKeys(obj), this.objectValues(obj)];
        }
    }, {
        key: 'objectKeys',
        value: function objectKeys(obj) {
            return Object.keys(obj);
        }
    }, {
        key: 'objectValues',
        value: function objectValues(obj) {
            return Object.values(obj);
        }
    }, {
        key: 'objectDot',
        value: function objectDot(obj) {
            var newObj = {};
            var vm = this;

            for (var key in obj) {
                newObj[buildKey(obj[key])] = fetchValue(obj[key]);
            }

            function buildKey(key) {
                return 1;
            }

            function fetchValue(key) {
                if (vm.isObject(key)) {
                    // fetchValue()
                }
            }

            return newObj;
        }
    }, {
        key: 'isObject',
        value: function isObject(obj) {
            return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
        }
    }]);

    return Helper;
}();

window.Helper = Helper;

exports.default = Helper;

},{}]},{},[1]);
