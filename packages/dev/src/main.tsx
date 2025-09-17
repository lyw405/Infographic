/** @jsxImportSource @antv/infographic */
import { DoneList, ListColumn, renderSVG, Title } from '@antv/infographic';
import * as fs from 'fs';
import * as path from 'path';

const svg = renderSVG(
  <ListColumn
    Title={Title}
    Item={DoneList}
    data={{
      title: 'AntV Infographic',
      desc: 'AntV Infographic is an AI-powered infographic recommendation and generation tool',
      items: [
        { label: 'AntV G', desc: 'Flexible visualization rendering engine' },
        { label: 'AntV G2', desc: 'Progressive visualization grammar' },
        {
          label: 'AntV G6',
          desc: 'Simple, easy-to-use, and comprehensive graph visualization engine',
        },
      ],
    }}
  />,
);

const dir = path.join(__dirname, '../dist');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(path.join(dir, 'infographic.svg'), svg);
