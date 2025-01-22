import {version, versionName} from '../../../package.json';

export default function (): string {
	return version + ' ' + versionName;
}