// dangerfile.js
import { schedule } from 'danger'
import taqtileDangerjsPlugin  from 'taqtile-dangerjs-plugin'

schedule(async() => {
  await taqtileDangerjsPlugin();
});
