/* eslint-disable import/first */

// SpookVooper API - src/main.ts
// Written by Brendan Lane - https://brndnln.dev/

import User from './modules/User'
import Group from './modules/Group'
import Auth from './modules/Auth'
import District from './modules/District'
import Stock from './modules/Stock'
import TransactionHub from './modules/TransactionHub'

import * as DepersonalizedUser from './modules/depersonalized/user'
import * as DepersonalizedGroup from './modules/depersonalized/group'

import * as SvidTool from './modules/tools/SvidTool'
const Tools = { SvidTool }

import * as Interfaces from './modules/interfaces/Interfaces'
import * as Types from './modules/types/Types'
const Dev = { Interfaces, Types }

export {
  User,
  Group,
  Auth,
  District,
  Stock,
  TransactionHub,
  DepersonalizedUser,
  DepersonalizedGroup,
  Tools,
  Dev
}
