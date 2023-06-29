import { version, versionName } from '../../../package.json';

export default function (){
    return version + ' ' + versionName;
}