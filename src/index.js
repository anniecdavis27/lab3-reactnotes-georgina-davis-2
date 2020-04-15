import $ from 'jquery';
import './style.scss';

let x = 0;

setInterval(() => {
  console.log(x);
  x += 1;
  $('#main').html(`You've been on this page for ${x} seconds`);
}, 1000);
