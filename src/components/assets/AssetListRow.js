import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AssetListRow = ({asset}) => {
  return (
    <tr>
      <td>{asset.type}</td>
      <td><Link to={'/asset/' + asset.id}>{asset.title}</Link></td>
      <td>{asset.value}</td>
      <td>{asset.type == 'ALLL' ? '' : asset.riskMultiplier}</td>
      <td>{asset.type == 'ALLL' ? '' : asset.riskRating}</td>
      <td>{asset.type == 'ALLL' ? '' : asset.amortizationTerm}</td>
      <td>{asset.type == 'ALLL' ? '' : asset.seasoning}</td>
      <td>{asset.type == 'ALLL' ? '' : asset.maturity}</td>
      <td>{asset.type == 'ALLL' ? '' : asset.prepaySpeed}</td>
      <td>{asset.type == 'ALLL' ? '' : asset.model}</td>
      <td>Edit/Delete</td>
    </tr>
  );
};

AssetListRow.propTypes = {
  asset: PropTypes.object.isRequired
};

export default AssetListRow;
