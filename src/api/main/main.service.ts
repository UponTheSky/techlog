import { ServiceProvider } from '../../common/interfaces/service';
import { MainResponse, ArticleDTO, StaticFileList } from './main.dto';
import { MainRepository } from './main.repository';

import { getMonthsBefore } from '../../utils/date';
import { STATIC_ROOT } from '../../utils/config';
import fs from 'fs';
import path from 'path';

export class MainServiceProvider implements ServiceProvider<ArticleDTO> {
  repository = new MainRepository();

  getStaticFiles = (
    staticFileList: StaticFileList,
  ): MainResponse['mainInfos'] => {
    let staticFiles = {} as MainResponse['mainInfos'];
    const rootPath = path.resolve(`${__dirname}/../../../${STATIC_ROOT}/main`);

    staticFileList.forEach(file => {
      let fileUrl = `${rootPath}/${file}`;
      switch (file) {
        case 'picture':
          fileUrl = `${fileUrl}.png`;
          staticFiles = {
            ...staticFiles,
            [file]: fileUrl,
          };
          break;
        case 'shortIntro':
          fileUrl = `${fileUrl}.md`;
          const markdownData = fs.readFileSync(fileUrl, { encoding: 'utf-8' });
          staticFiles = {
            ...staticFiles,
            [file]: markdownData,
          };
          break;
        default:
          break;
      }
    });

    return staticFiles;
  };

  getRecentArticles = async (months: number) => {
    const monthsBefore = getMonthsBefore(months);
    const recentArticles = await this.repository.findMany(monthsBefore);

    return recentArticles;
  };
}
