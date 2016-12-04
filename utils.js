/*
 * ScratchX extension utilities
 *
 * yokobond <koji.yokokawa@yengawa.com>
 */

(function (ext) {

  ext.match = function (str, regexp) {
    return str.match(regexp);
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      // Block type, block name, function name
      ['b', '%s match %s', 'match', 'string', 'regexp']
    ],
    menus: {
    },
    url: 'http://yokobond.github.io/scratchx-utils/'
  };

  // Register the extension
  ScratchExtensions.register('Utils', descriptor, ext);
})({});

