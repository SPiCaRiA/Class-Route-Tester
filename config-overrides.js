/**
 * The react-app-rewired configuration.
 *
 * @author Weixuan Lin
 */

'use strict';

// Overrides create-react-app webpack configs without ejecting
// https://github.com/timarney/react-app-rewired

const {useBabelRc, override} = require('customize-cra');

// eslint-disable-nextline react-hooks/rules-of-hooks
module.exports = override(useBabelRc());
