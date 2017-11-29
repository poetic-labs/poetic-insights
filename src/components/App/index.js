import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from '../Loading';
import Chart from '../Chart';
import Screenshot from '../Screenshot';
import fetchData from '../../helpers/fetchData';
import fetchPageSpeedInsights from '../../helpers/fetchPageSpeedInsights';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      processing: false,
      error: false,
      data: null,
    };

    this.analyze = this.analyze.bind(this);
    this.renderReport = this.renderReport.bind(this);
  }

  async analyze() {
    if (this.state.url !== null && this.state.url !== '') {
      this.setState({ processing: true });
      const data = await fetchData(this.state.url);
      
      const { feed: { entry } } = data;

      const reports = await this.getReport(entry);
      console.log('reports: ', reports);
      this.setState({
        data: reports,
        processing: false,
      });
    }
  }

  async getReport(results) {
    let reports = [];

    for(let i = 0; i < results.length; i++) {
      const { gsx$sites: { $t } } = results[i];

      const mobile = await fetchPageSpeedInsights($t, 'mobile');

      const desktop = await fetchPageSpeedInsights($t, 'desktop');

      reports.push(Object.assign({site: $t}, mobile, desktop));
    }

    return reports;
  }

  renderReport() {
    if (this.state.data !== null) {
      return (
        <div className="visualization">
          <Chart data={this.state.data} />
          <Screenshot data={this.state.data} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="center">
          <h1 className="title">Poetic Insights</h1>
          <TextField
            floatingLabelText="Google Sheet Public URL"
            fullWidth={true}
            defaultValue={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
          />
          <RaisedButton 
            label="Analyze"
            primary={true}
            onClick={this.analyze} 
            disabled={this.state.processing}/>
        </div>
        {this.state.processing ? <Loading /> : null}
        {this.renderReport()}
      </div>
    );
  }
}

export default App;
