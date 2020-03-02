export class Config {
    public iconPath = '';
    public featureSwitches = {};
}

const config = new Config();
export default (() => {
    return config;
})();
