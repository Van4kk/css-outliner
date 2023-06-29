const { version, versionName } =  require('../../../package.json');

export default function (){
    return version + ' ' + versionName;
}