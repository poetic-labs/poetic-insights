import React, { Component } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from 'recharts';
import map from 'lodash.map';
import CustomTooltip from '../CustomTooltip';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.renderScatter = this.renderScatter.bind(this);
  }

  renderScatter() {
    const { data } = this.props;

    return map(data, ({ site, mobileScore, desktopScore, mobileUsability }) => {
      const data = [{ site, mobileScore, desktopScore, mobileUsability }];

      return <Scatter 
                name={site}
                key={site}
                data={data}
                fill={'#'+Math.floor(Math.random()*16777215).toString(16)} />;
    });
  }

  render() {
    return (
      <div className="center">
        <h3>Mobile - Desktop Score</h3>
        <ScatterChart width={1200} height={800} pa>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 100]}
            dataKey="mobileScore"
            name="Desktop Score">
              <Label value="Desktop Score" offset={50} position="insideBottom" />
            </XAxis>
          <YAxis
            type="number"
            domain={[0, 100]}
            dataKey="desktopScore"
            name="Mobile Score">
              <Label value="Mobile Score" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right" />
          {this.renderScatter()}
        </ScatterChart>
      </div>
    );
  }
}

export default Chart;
