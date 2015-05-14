try {
  module.exports = require('murmurhash3').murmur32Sync
} catch (e) {
  module.exports = require('murmurhash-js/murmurhash3_gc')
}
