const glob = require('glob')

class FileManager {
  resolveFiles(filelist) {
    const paths = `${filelist}`.split('\n').filter((line) => line.trim().length)

    const files = paths.map((filePath) => {
      // Use glob to parse paths with wildcards
      if (filePath.indexOf('*') !== -1) {
        const targets = glob.sync(filePath)
        return targets.split(',')
      }

      return [filePath]
    })

    return [].concat(...files)
  }
}

module.exports = {
  FileManager
}
