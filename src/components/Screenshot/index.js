import React, { Component } from 'react';
import map from 'lodash.map'
import Collapsible from 'react-collapsible';
import convertBase64Image from '../../helpers/convertBase64Image';

class Screenshot extends Component {
  constructor(props) {
    super(props);

    this.renderSites = this.renderSites.bind(this);
  }

  renderSites() {
    const { data } = this.props;

    return map(data, ({ site, mobileScreenShot, desktopScreenShot }) => {
      const mobileImage = convertBase64Image(mobileScreenShot); 
      const desktopImage = convertBase64Image(desktopScreenShot);

      return (
        <Collapsible trigger={site} key={site}>
          <div className="equal-column">
            <img src={desktopImage} alt="Desktop" />
          </div>
          <div className="equal-column">
            <img src={mobileImage} alt="Mobile" />
          </div>
        </Collapsible>
      );
    });
  }

  render() {
    return (
      <div className="screenshots">
        {this.renderSites()}
      </div>
    );
  }
}

export default Screenshot;
