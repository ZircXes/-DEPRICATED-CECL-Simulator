import delay from './delay';

const assets = [
  {
    id: "cni-demo",
    type: "C&I",
    title: "US Banks: Commercial Loans",
    value: 4000,
    riskMultiplier: 1.00,
    riskRating: "NAT",
    amortizationTerm: 7,
    seasoning: 2.50,
    maturity: 7,
    prepaySpeed: 5,
    model: "None"
  },
  {
    id: "cre-demo",
    type: "CRE",
    title: "US Banks: Commercial Real Estate",
    value: 3000,
    riskMultiplier: 1.00,
    riskRating: "NAT",
    amortizationTerm: 7,
    seasoning: 2.50,
    maturity: 7,
    prepaySpeed: 5,
    model: "None"
  },  
  {
    id: "resi-demo",
    type: "RESI",
    title: "US Banks: Residential Mortgages",
    value: 2000,
    riskMultiplier: 1.00,
    riskRating: "NAT",
    amortizationTerm: 7,
    seasoning: 2.50,
    maturity: 7,
    prepaySpeed: 5,
    model: "None"
  },
  {
    id: "alll-demo",
    type: "ALLL",
    title: "US Banks: Allowance",
    value: -125,
    riskMultiplier: 1.00,
    riskRating: "NAT",
    amortizationTerm: 0,
    seasoning: 0,
    maturity: 0,
    prepaySpeed: 0,
    model: "None"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (asset) => {
  return replaceAll(asset.title, ' ', '-');
};

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

class AssetApi {
  static getAllAssets() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], assets));
      }, delay);
    });
  }


  static saveAsset(asset) {
    asset = Object.assign({}, asset); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAssetTitleLength = 1;
        if (asset.title.length < minAssetTitleLength) {
          reject(`Title must be at least ${minAssetTitleLength} characters.`);
        }
  
        if (asset.id) {
          const existingAssetIndex = assets.findIndex(a => a.id == asset.id);
          assets.splice(existingAssetIndex, 1, asset);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          asset.id = generateId(asset);
          assets.push(asset);
        }
  
        resolve(asset);
      }, delay);
    });
  }

}

export default AssetApi;