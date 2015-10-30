'use strict';

let _ = require('lodash');
let Twit = require('twit');
let stringify = require('csv-stringify');

let T = new Twit({
  consumer_key: 'tiqckMpW2uef5dXxlFrDR88Tb',
  consumer_secret: 'CCBNGsNMUj1NVFq9zz3rUQps1Sai5A6Sztg8hdK5ro2AhkbOKh',
  access_token: '11766442-cN3HkRXmVcolr9lldXUu498PK0RkYJMwHJFmbi01Y',
  access_token_secret: 'xhnSifIrhSEQC9CpUr76349Y3RPgmFcWOPC1BsRFrqxFv'
});

let filters = [
  '(^_^)',
  '(^o^)',
  '(^^)',
  '(^-^)',
  '（●＾o＾●）',
  '（＾◇＾）',
  '(*^_^*)',
  '(*´ｰ`)',
  '(*´∀｀*)',
  '(*´ω｀*)',
  '(*´艸｀*)',
  '(/ω＼)',
  '(^_^)V',
  '(^o^)V',
  'ヽ(=´▽`=)ﾉ',
  'o(^o^)o',
  '＼(^_^ )( ^_^)／',
  'σ(^_^)',
  'σ(´∀｀)',
  '!(^^)!',
  '(^^ゞ',
  '(^Q^)/',
  '(^^ゝ',
  '(^人^)',
  '(^_-)-☆',
  '(^з^)-☆',
  '(￣ー￣)ｂ',
  'p(^^)q',
  '(-o-)y-~~~',
  '(^_^)y-~~~',
  'φ(^o^)',
  '( ^_^)／□☆□＼(^_^ )',
  '( ^_^)／ o(^o^)o ＼(^_^ )',
  '(／＼) ＼(^o^)／',
  '(^_^)/~~~',
  '(# ﾟДﾟ)',
  '(゜_゜)',
  '(`_`)ノ゛',
  '(^-^;',
  '(-_-;)',
  '(=_=;)',
  '(ﾉ´Д`)',
  '(-o-;)',
  '(^^;)',
  '(^_^;)',
  '(^o^;)',
  '...(((;^^)',
  '(+_+)',
  '(o-_-o)',
  'ヽ(#ﾟДﾟ)ﾉ',
  '(-_-メ)',
  '(ーー゛)',
  '(-’’-)',
  '(｀´）',
  'ヽ(#｀Д´#)ﾉ',
  '(￣へ￣井)',
  '(-ε´-。)',
  '(￣д￣)',
  '( ´Д｀)',
  '(ﾉ´□｀)ﾉ',
  'ヽ(*´Д｀*)ﾉ',
  '┐(´～`；)┌',
  '(#´Д｀#)',
  '(*_*)',
  '( -_-)',
  '｜(-_-)｜',
  '(;_;)',
  '(T_T)',
  '(/_;)',
  '(ﾉдヽ)',
  '(TдT)',
  '(ﾉ´□｀)',
  'ヽ(;´Д`)ノ',
  '(ｏ´_｀ｏ)',
  'm(_ _)m',
  '＼(__ )',
  '(>_<)',
  '(>_<)',
  '(+д+)',
  '（￣□￣；）',
  '(lll￣□￣)',
  '(@_@)',
  '(＠_＠;)'
];

let stream = T.stream('statuses/sample', { language: 'ja' });
stream.on('tweet', (tweet) => {
  let matchedFilter = _.find(filters, filter => _.includes(tweet.text, filter));
  if(matchedFilter){
    stringify([[matchedFilter, tweet.text]], (err, output) => process.stdout.write(output));
  }
});
