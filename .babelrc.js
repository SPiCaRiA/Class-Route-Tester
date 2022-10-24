/**
 * The Babel configuration.
 *
 * @author Weixuan Lin
 */

'use strict';

const fs = require('fs');
const path = require('path');
const fbjsModuleMap = require('fbjs/module-map');

/**
 * Read all file paths with specified extensions under the given root directory.
 * If a prefix is given, the returned paths will be concatenated with the prefix,
 * otherwise the returned paths will be absolute paths.
 */
function readDir(root, extensions, prefix) {
  const fileAndDirs = fs.readdirSync(root, {withFileTypes: true});

  const {dirs, files} = fileAndDirs.reduce(
    (res, fileOrDir) => {
      const {dirs, files} = res;

      if (fileOrDir.isDirectory()) {
        // Keep the directories.
        dirs.push(fileOrDir);
      } else if (extensions.some(ext => path.extname(fileOrDir.name) === ext)) {
        // Keep the files having the given extensions.
        files.push(fileOrDir);
      }

      return res;
    },
    {
      dirs: [],
      files: [],
    },
  );

  const paths = files.map(file => path.join(prefix ? prefix : root, file.name));

  const childPaths = dirs.map(dir =>
    readDir(
      path.join(root, dir.name),
      extensions,
      prefix ? path.join(prefix, dir.name) : root,
    ),
  );

  return paths.concat(childPaths.flat());
}

/**
 * Create module map for files under the 'src' directory.
 *
 * @param extensions the file extensions to be included.
 * @param omit the file extensions to be omitted in aliases.
 */
function makeSrcModuleMap({extensions = ['.js'], omit = ['.js']}) {
  const paths = readDir(
    path.join(path.resolve(__dirname), 'src'),
    extensions,
    'src',
  );

  return paths.reduce((res, sourcePath) => {
    const filename = path.basename(sourcePath);
    const alias = omit.includes(path.extname(sourcePath))
      ? filename.replaceAll(path.extname(sourcePath), '')
      : filename;

    // babel-plugin-module-resolver only accepts paths in the form of './xxx'.
    res[alias] = './' + sourcePath;

    return res;
  }, {});
}

const moduleMap = Object.assign(
  {},
  fbjsModuleMap,
  makeSrcModuleMap({
    extensions: ['.js', '.css'],
  }),
);

module.exports = {
  plugins: [
    'babel-plugin-transform-flow-enums',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: moduleMap,
      },
    ],
  ],
};
