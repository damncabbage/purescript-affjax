'use strict';

// module Test.Main

exports.logAny = function(a){
  return function () {
    console.log(a);
    return {};
  };
}
