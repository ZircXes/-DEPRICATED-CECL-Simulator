import React, {PropTypes} from 'react';
import AssetListRow from './AssetListRow';

const AssetList = ({assets}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Balance</th>
        <th>Risk Multiplier</th>
        <th>Rating</th>
        <th>Amortization Term</th>
        <th>WA Age</th>
        <th>WAM</th>
        <th>CPR</th>
        <th>Model</th>
        <th>Options</th>
      </tr>
      </thead>
      <tbody>
      {assets.map(asset =>
        <AssetListRow key={asset.id} asset={asset}/>
      )}
      </tbody>
    </table>
  );
};

AssetList.propTypes = {
  assets: PropTypes.array.isRequired
};

export default AssetList;
