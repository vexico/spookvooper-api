// SpookVooper API - modules/tools/SvidTool.ts
// Written by Brendan Lane - https://brndnln.dev/

function svidType (svid: string): string {
  if (svid.startsWith('u-')) {
    return 'user'
  } else if (svid.startsWith('g-')) {
    return 'group'
  } else if (svid.startsWith('i-')) {
    return 'item'
  } else {
    throw new Error('This is either a legacy svid or it is not an svid! If it is a legacy SVID, it is no longer supported.')
  }
}

export {
  svidType
}
