import 'bootstrap';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
import './scss/app.scss';

var md = require('markdown-it')();
window.mdit = md;