import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class CustomTooltip  extends Component {
  render() {
    const { active } = this.props;

    if (active) {
      const { payload } = this.props;

      const data = payload[0];
      
      const { payload: { site, mobileScore, desktopScore, mobileUsability }} = data;

      return (
        <Paper zDepth={2}>
          <Card className="custom-tooltip">
            <CardHeader title={site} />
            <CardText>
              <div>
                <div>Desktop Score: {desktopScore}</div>
                <div>Mobile Score: {mobileScore}</div>
                <div>Mobile Usability: {mobileUsability}</div>
              </div>
            </CardText>
          </Card>
        </Paper>
      );
    }

    return null;
  }
}

export default CustomTooltip;
