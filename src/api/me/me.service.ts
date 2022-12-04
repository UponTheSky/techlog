import { MeResponse, StaticFileList } from './me.dto';
import { STATIC_ROOT } from '../../utils/config';
import { ServiceProvider } from '../../common/interfaces/service';

import fs from 'fs';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class MeServiceProvider implements ServiceProvider<any> {
  repository = undefined;

  getStaticFiles = (staticFileList: StaticFileList): MeResponse['meInfos'] => {
    let staticFiles = {} as MeResponse['meInfos'];
    const rootPath = path.resolve(`${__dirname}/../../../${STATIC_ROOT}/me`);

    staticFileList.forEach(file => {
      let fileUrl = `${rootPath}/${file}`;
      let markdownData = '';
      switch (file) {
        case 'profile':
          fileUrl = `${fileUrl}.png`;
          staticFiles = {
            ...staticFiles,
            [file]: fileUrl,
          };
          break;
        default:
          fileUrl = `${fileUrl}.md`;
          markdownData = fs.readFileSync(fileUrl, { encoding: 'utf-8' });
          staticFiles = {
            ...staticFiles,
            [file]: markdownData,
          };
          break;
      }
    });
    return staticFiles;
  };
}
