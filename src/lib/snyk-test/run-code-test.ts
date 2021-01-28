import * as tsc from '@deepcode/tsc';
import { api } from '../../lib/api-token';
import * as config from '../config';

tsc.emitter.on('scanFilesProgress', (processed: number) => {
  console.log(`Indexed ${processed} files`);
});

/** Bundle upload process is started with provided data */
tsc.emitter.on('uploadBundleProgress', (processed: number, total: number) => {
  console.log(`Upload bundle progress: ${processed}/${total}`);
});

/** Receives an error object and logs an error message */
tsc.emitter.on('sendError', (error) => {
  console.log(error);
});
export async function getCodeAnalysis(root) {
  let baseURL = config.SNYKCODE_PROXY;
  let sessionToken = api();
  return await tsc.analyzeFolders(baseURL, sessionToken, false, 1, [root]);
}

export function parseCodeTestResult(result) {
  console.log(result);
}
