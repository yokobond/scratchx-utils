/*
 * ScratchX extension utilities
 *
 * yokobond <koji.yokokawa@yengawa.com>
 *
 *   open
 *   <a href="http://scratchx.org/?url=http://yokobond.github.io/scratchx-utils/utils.js">Open Scratchx with
 Utils Blocks</a>
 */

(function (ext) {

  ext.match = function (str, regexp) {
    return str.match(regexp);
  };

  ext.regexpTest = function (str, regexp) {
    return new RegExp(regexp).test(str);
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      // Block type, block name, function name
      ['b', '%s test regexp %s', 'regexpTest', 'string', 'regexp']
    ],
    menus: {
    },
    url: 'http://yokobond.github.io/scratchx-utils/'
  };

  // Register the extension
  ScratchExtensions.register('Utils', descriptor, ext);
})({});

