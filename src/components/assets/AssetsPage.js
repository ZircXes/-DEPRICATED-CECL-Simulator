import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AssetList from './AssetList';
import AssetSummary from './AssetSummary';
import * as assetActions from '../../actions/assetActions';
import {browserHistory} from 'react-router';

class AssetsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddAssetPage = this.redirectToAddAssetPage.bind(this);
  }
    
  redirectToAddAssetPage() {
      browserHistory.push('/asset');
  }      

  render() {
    const {assets} = this.props;  
    
    return (
      <div>
        <h1>Assets: Loans, Leases, and Allowance</h1>
        <input type="submit"
               value="Add New Asset"
               className="btn btn-primary"
               onClick={this.redirectToAddAssetPage}/> 

        &nbsp;&nbsp;&nbsp;

        <input type="submit"
               value="Add/Edit Allowance"
               className="btn btn-primary"
               onClick={this.redirectToAllowancePage}/>
        <AssetList assets={assets} />
        <AssetSummary assets={assets} />
      </div>
    );
  }
}

AssetsPage.propTypes = {
  assets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    assets: state.assets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetsPage);
